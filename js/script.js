// script to menu nav bar 
let MenuItems = document.getElementById("MenuItems");
let chsecer = MenuItems.style.maxHeight = "0px";
let menu = document.getElementById("menu");

function menutoggle() {
    if(chsecer == "0px"){
        chsecer = MenuItems.style.maxHeight = "55vh";
        menu.src = "images/close.svg";
    }
    else{
        chsecer = MenuItems.style.maxHeight = "0px";
        menu.src = "images/menu.png";

    }
}

// -------script for one product page gallery-----
let ProductImg = document.getElementById('ProductImg');
let SmallImg = document.getElementsByClassName('SmallImg');

    SmallImg[0].onclick =function () {
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick =function () {
        ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick =function () {
        ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick =function () {
        ProductImg.src = SmallImg[3].src;
    }


//  -----------script for one login -----------


function register() {
    LoginForm = document.getElementById('LoginForm');
    RegForm = document.getElementById('RegisterForm');
    Indicator = document.getElementById('Indicator');
    Indicator.style.transform = "translateX(100px)"
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
}
function login(){
    LoginForm = document.getElementById('LoginForm');
    RegForm = document.getElementById('RegisterForm');
    Indicator = document.getElementById('Indicator');
    Indicator.style.transform = 'translateX(0px)'
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
}

