const menuTrigger = document.getElementById('menu-trigger');
const sidenaveContainer = document.getElementById('sideMenuContainer');
const sidenaveMenu = document.getElementById('sideMenu');


menuTrigger.addEventListener('click',()=>{
    

    if(sidenaveContainer.classList.contains('side-menu-container-open')){
        sidenaveContainer.classList.remove('side-menu-container-open');
        sidenaveContainer.classList.add('side-menu-container-close');
    }else{
        sidenaveContainer.classList.remove('side-menu-container-close');
        sidenaveContainer.classList.add('side-menu-container-open');

    }
});


sidenaveContainer.addEventListener('click',()=>{
    sidenaveContainer.classList.remove('side-menu-container-open');
    sidenaveContainer.classList.add('side-menu-container-close');

})

