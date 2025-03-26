#!/bin/bash

# Carica le variabili d'ambiente
source "$(dirname "$0")/.env.prod"

# Configura questi parametri
DUMP_NAME="db_backup_$(date +%F).sql"    # Nome del file di dump senza .gz
LOCAL_BACKUP_DIR="mariadb-init"          # Cartella locale dove salvare il dump
REMOTE_TEMP_DIR="$REMOTE_WEBROOT/web/dump-tmp"  # Directory temporanea per il dump
REMOTE_DUMP_PATH="$REMOTE_TEMP_DIR/$DUMP_NAME.gz"  # Percorso completo del dump remoto

# Configura sshpass se la password è impostata
if [ -n "$REMOTE_PASSWORD" ]; then
    SSH_CMD="sshpass -p $REMOTE_PASSWORD ssh"
    SCP_CMD="sshpass -p $REMOTE_PASSWORD scp"
else
    SSH_CMD="ssh"
    SCP_CMD="scp"
fi

echo " Avvio del backup del database..."
echo " Directory temporanea: $REMOTE_TEMP_DIR"
echo " Percorso dump: $REMOTE_DUMP_PATH"

# 1 Esegui il dump del DB sul server remoto e verifica
$SSH_CMD "$REMOTE_USER@$REMOTE_HOST" "set -x && mkdir -p $REMOTE_TEMP_DIR && cd $REMOTE_WEBROOT && \
  docker exec storiedigitali_php bash -c 'mkdir -p /var/www/html/storiedigitali/dump-tmp && \
  mysqldump -h mariadb -u \$DB_USER -p\$DB_PASSWORD \$DB_NAME | gzip > /var/www/html/storiedigitali/dump-tmp/$DUMP_NAME.gz' && \
  echo 'Dump creato' && \
  ls -l $REMOTE_TEMP_DIR"

# 2 Scarica il dump in locale
$SCP_CMD "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DUMP_PATH" "$LOCAL_BACKUP_DIR/$DUMP_NAME.gz"

# 3 Verifica il trasferimento
if [ -f "$LOCAL_BACKUP_DIR/$DUMP_NAME.gz" ]; then
    echo " Backup scaricato con successo in $LOCAL_BACKUP_DIR/$DUMP_NAME.gz"
    
    # 4 Decomprimi il file
    echo " Decompressione del dump..."
    gunzip -f "$LOCAL_BACKUP_DIR/$DUMP_NAME.gz"
    
    if [ -f "$LOCAL_BACKUP_DIR/$DUMP_NAME" ]; then
        echo " Dump decompresso con successo in $LOCAL_BACKUP_DIR/$DUMP_NAME"
    else
        echo " Errore nella decompressione del dump!"
        exit 1
    fi
    
    # Rimuovi la directory temporanea remota
    $SSH_CMD "$REMOTE_USER@$REMOTE_HOST" "rm -rf $REMOTE_TEMP_DIR"
    echo "  Directory temporanea remota rimossa"
else
    echo " Errore nel trasferimento del backup!"
    # Pulisci comunque la directory temporanea in caso di errore
    $SSH_CMD "$REMOTE_USER@$REMOTE_HOST" "rm -rf $REMOTE_TEMP_DIR"
    exit 1
fi

echo " Backup completato!"
