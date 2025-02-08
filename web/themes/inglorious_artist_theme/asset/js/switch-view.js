document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.resource-list');
    var viewToggle = document.getElementById('viewToggle');

    // Helper function to switch views
    function switchView(toCardView) {
        var viewClass = toCardView ? 'card-view' : 'list-view';
        container.className = 'resource-list ' + viewClass; // Reset and apply the appropriate class
        viewToggle.setAttribute('data-view', toCardView ? 'cards' : 'lists');
        viewToggle.innerHTML = toCardView ? 'Switch to List View' : 'Switch to Card View';
        localStorage.setItem('viewMode', toCardView ? 'cards' : 'lists');
    }

    // Initialize or toggle view
    var savedView = localStorage.getItem('viewMode');
    var isCardView = savedView === 'cards';
    switchView(isCardView);

    viewToggle.addEventListener('click', function () {
        isCardView = !isCardView; // Toggle the view mode
        switchView(isCardView);
    });
});