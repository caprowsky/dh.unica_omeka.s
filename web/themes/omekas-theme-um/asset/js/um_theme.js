
let lastKnownScrollPosition = 0;
let ticking = false;
let dochead=null;
let msgdiv=null;
function doSomething(scrollPos) {
  if (document.readyState == 'complete')
  { 
	msgdiv=document.getElementById("MsgDiv");
    dochead=document.getElementsByTagName("HEADER");
	if(lastKnownScrollPosition>100)
	{
    dochead[0].classList.remove("not-scroll");
		dochead[0].classList.add("scroll");
	}
	else
	{
    dochead[0].classList.add("not-scroll");
		dochead[0].classList.remove("scroll");
	}
	msgdiv.innerHTML="Scrolled by " + lastKnownScrollPosition;
	
  }
}

document.onreadystatechange = function () {
    
        //StartPlayer();
};


document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});