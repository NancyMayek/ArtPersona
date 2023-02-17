const menuBtn = document.querySelector('#menu-btn');
let menuOpen = false;


menuBtn.addEventListener('click',() => {
    if(!menuOpen ){
       menuBtn.classList.add('open');
       menuOpen=true; 
        
        document.getElementById('links_2').style.display = "flex";

    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        document.getElementById('links_2').style.display = "none";

    }
});



const element = document.getElementById('links_2'); // replace with your element's ID

function toggleDisplay() {
  if (window.matchMedia('(min-width: 660px) and (max-width: 1150px)').matches) {
    element.style.display = 'flex';
  } else {
    if (window.matchMedia('(max-width: 660px)').matches)
    menuBtn.classList.remove('open');
    element.style.display = 'none';
  }
}

window.addEventListener('resize', toggleDisplay);

