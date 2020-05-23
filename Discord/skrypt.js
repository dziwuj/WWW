$( "div.kanal" ).click(function select() {

  $( document.querySelector( ".kanal_click" ) ).removeClass('kanal_click');
  $( this ).addClass( "kanal_click" );
  var x = document.getElementsByClassName( "kanal_click" ).length;
  console.log(x);
    
});

var menu1 = 0;
var menu2 = 0;
var menu3 = 0;
var menu4 = 0;
var menu5 = 0;
var menu6 = 0;
var menu10 = 0;

$( "div.menu10" ).click(function select() {

  if(menu10 % 2 == 0){
    $( ".bu" ).css( "display", "none" );
    $( "#a5" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".bu" ).css( "display", "block" );
    $( "#a5" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu10 += 1;

});

$( "div.menu1" ).click(function select() {

  if(menu1 % 2 == 0){
    $( ".o" ).css( "display", "none" );
    $( "#s1" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".o" ).css( "display", "block" );
    $( "#s1" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu1 += 1;

});

$( "div.menu2" ).click(function select() {

  if(menu2 % 2 == 0){
    $( ".p" ).css( "display", "none" );
    $( "#s2" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".p" ).css( "display", "block" );
    $( "#s2" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu2 += 1;

});

$( "div.menu3" ).click(function select() {

  if(menu3 % 2 == 0){
    $( ".k" ).css( "display", "none" );
    $( "#s3" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".k" ).css( "display", "block" );
    $( "#s3" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu3 += 1;

});

$( "div.menu4" ).click(function select() {

  if(menu4 % 2 == 0){
    $( ".u" ).css( "display", "none" );
    $( "#s4" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".u" ).css( "display", "block" );
    $( "#s4" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu4 += 1;

});

$( "div.menu5" ).click(function select() {

  if(menu5 % 2 == 0){
    $( ".w" ).css( "display", "none" );
    $( "#s5" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".w" ).css( "display", "block" );
    $( "#s5" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu5 += 1;

});

$( "div.menu6" ).click(function select() {

  if(menu6 % 2 == 0){
    $( ".s" ).css( "display", "none" );
    $( "#s6" ).css( "transform", "rotate(270deg)" );
  }
  else{
    $( ".s" ).css( "display", "block" );
    $( "#s6" ).css( "transform", "rotate(0deg)" );
  };

  $( ".kanal_click" ).css( "display", "block" );

  menu6 += 1;

});

var audio = 0;

$( "div.sluchawki" ).click(function select() {

  if(audio % 2 == 0){
    document.getElementById("headphones").src = "mute_headphones.svg";
    document.getElementById("micro").src = "mute_micro.svg";
  }
  else{
    document.getElementById("headphones").src = "headphones.svg";
    document.getElementById("micro").src = "micro.svg";
  };

  audio += 1;
    
});

var audio2 = 0;

$( "div.mikrofon" ).click(function select() {

  if(audio2 % 2 == 0){
    document.getElementById("micro").src = "mute_micro.svg";
  }
  else{
    document.getElementById("micro").src = "micro.svg";
  };

  audio2 += 1;
    
});

function losowanie(){
  
  var x;

  console.log("xd")

  switch (Math.floor((Math.random() * 49) + 1)){
    case 1:
      x = "0px 0px"
      break;
    case 2:
      x = "-22px 0px"
      break;
    case 3:
      x = "-44px 0px"
      break;
    case 4:
      x = "-66px 0px"
      break;
    case 5:
      x = "-88px 0px"
      break;
    case 6:
      x = "-110px 0px"
      break;
    case 7:
      x = "-132px 0px"
      break;
    case 8:
      x = "-154px 0px"
      break;
    case 9:
      x = "-176px 0px"
      break;
    case 10:
      x = "-198px 0px"
      break;
    case 11:
      x = "-220px 0px"
      break;
    case 12:
      x = "0px -22px"
      break;
    case 13:
      x = "-22px -22px"
      break;
    case 14:
      x = "-44px -22px"
      break;
    case 15:
      x = "-66px -22px"
      break;
    case 16:
      x = "-88px -22px"
      break;
    case 17:
      x = "-110px -22px"
      break;
    case 18:
      x = "-132px -22px"
      break;
    case 19:
      x = "-154px -22px"
      break;
    case 20:
      x = "-176px -22px"
      break;
    case 21:
      x = "-198px -22px"
      break;
    case 22:
      x = "-220px -22px"
      break;
    case 23:
      x = "0px -44px"
      break;
    case 24:
      x = "-22px -44px"
      break;
    case 25:
      x = "-44px -44px"
      break;
    case 26:
      x = "-66px -44px"
      break;
    case 27:
      x = "-88px -44px"
      break;
    case 28:
      x = "-110px -44px"
      break;
    case 29:
      x = "-132px -44px"
      break;
    case 30:
      x = "-154px -44px"
      break;
    case 31:
      x = "-176px -44px"
      break;
    case 32:
      x = "-198px -44px"
      break;
    case 33:
      x = "-220px -44px"
      break;
    case 34:
      x = "0px -66px"
      break;
    case 35:
      x = "-22px -66px"
      break;
    case 36:
      x = "-44px -66px"
      break;
    case 37:
      x = "-66px -66px"
      break;
    case 38:
      x = "-88px -66px"
      break;
    case 39:
      x = "-110px -66px"
      break;
    case 40:
      x = "-132px -66px"
      break;
    case 41:
      x = "-154px -66px"
      break;
    case 42:
      x = "-176px -66px"
      break;
    case 43:
      x = "-198px -66px"
      break;
    case 44:
      x = "-220px -66px"
      break;
    case 45:
      x = "0px -88px"
      break;
    case 45:
      x = "-22px -88px"
      break;
    case 46:
      x = "-44px -88px"
      break;
    case 47:
      x = "-66px -88px"
      break;
    case 48:
      x = "-88px -88px"
      break;
    case 49:
      x = "-110px -88px"
      break;
    case 50:
      x = "-132px -88px"
      break;
  }

  $( ".emotki" ).css( "background-position", x );
}

var dzwoni = 1;

$( "img#dzwon" ).click(function select() {

  if(dzwoni % 2 == 0){
    document.getElementById("dzwon").src = "bell.svg";
  }
  else{
    document.getElementById("dzwon").src = "bell_no.svg";
  };

  dzwoni += 1;
    
});

document.getElementById("lepsze").onmouseenter = function() {mouseOver()};


document.getElementById("lepsze").onmouseleave= function() {mouseOut()};

function mouseOver() {
  document.getElementById("tak").innerHTML = "League of Legends #2";
}

function mouseOut() {
  document.getElementById("tak").innerHTML = "League of Legend...";
}

var strzala = 0;

function animacje(){

  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("strzalka").style.display = "block";

  if(strzala % 2 == 0){
    document.getElementById("ciach").style.transform = "rotate(-90deg)";
    document.getElementById("strzalka").style.height = "20px";
    document.getElementById("strzalka").style.width = "20px";
    document.getElementById("strzalka").style.top = "15px";
    document.getElementById("strzalka").style.right = "10px";
  }
  else{
    document.getElementById("ciach").style.transform = "rotate(0deg)";
    document.getElementById("strzalka").style.height = "9px";
    document.getElementById("strzalka").style.width = "19px";
    document.getElementById("strzalka").style.top = "19px";
    document.getElementById("strzalka").style.right = "12px";
  };
   
  strzala += 1;

};

var guzik = 1;

$( "#guziczek" ).click(function select() {

  if(guzik % 2 == 0){
    document.getElementById("boxer1").style.display = "block";
    document.getElementById("boxer2").style.display = "none";
  }
  else{
    document.getElementById("boxer1").style.display = "none";
    document.getElementById("boxer2").style.display = "block";
  };

  guzik += 1;

});

$( ".szukacz" ).focus(function select() {
  $("#searchbar").css( "right", "100px" );
  $("#gl").css( "right", "100px" );
  $("#pi").css( "right", "100px" );
  $("#dz").css( "right", "100px" );
});

$( ".szukacz" ).blur(function select() {
  $("#searchbar").css( "right", "0px" );
  $("#gl").css( "right", "0px" );
  $("#pi").css( "right", "0px" );
  $("#dz").css( "right", "0px" );
});

var glowy = 0;

$( "#gl" ).click(function select() {

  if(glowy % 2 == 0){
    $(".right").css( "display", "none" );
    $(".mid").css( "grid-column", "3 / 5" );
    $(".down").css( "width", "calc(100% - (72px + 240px + 32px)" );
  }
  else{
    $(".right").css( "display", "block" );
    $(".mid").css( "grid-column", "3 / 4" );
    $(".down").css( "width", "calc(100% - (72px + 240px + 32px + 240px)" );
  };

  glowy += 1;

});

$(".szukacz").focus(function select() {
  $(".dropdown-content2").css( "display", "block" );
  console.log("tata")
});

$(".szukacz").blur(function select() {
  $(".dropdown-content2").css( "display", "none" );
});

var input = document.getElementById("mess");

var main_container = document.getElementById("sciana");

var liczenie = 0;

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var message = document.getElementById("mess").value;
   var text_container = document.createElement("a");
   var profilowe = document.createElement("img");
   var text = document.createTextNode(message);
   var nazwa = document.createTextNode("Zbyszko Sobecki 2Ia");
   var data = document.createElement("span");
   var tekst = document.createElement("p");
   var pojemnik = document.createElement('div');
   var pudelko = document.createElement('div');
   var okienko = document.createElement('div');
   var part1 = document.createElement('div');
   var part2 = document.createElement('div');
   var brum = document.createElement('br');
   var kalendarz = new Date();
   
   liczenie += 1;
   
   document.getElementById("mess").value = "";
   text_container.appendChild(nazwa);
   
   pojemnik.appendChild(profilowe).id = "profilowe";
   profilowe.src = "profilowe.png";

   pojemnik.appendChild(text_container);
   pojemnik.classList.add("wiadomosc");

   pojemnik.appendChild(data).id = "data";
   data.innerHTML = "Dziś o "+("0" + kalendarz.getHours("HH")).slice(-2)+":"+("0" + kalendarz.getMinutes("MM")).slice(-2);

   pojemnik.appendChild(brum);

   pojemnik.appendChild(pudelko).classList = "text";
   pudelko.appendChild(text);

   pojemnik.appendChild(okienko).classList = "numer";
   okienko.appendChild(part1).classList = "part1";
   part1.innerHTML = '<svg class="bosz" aria-hidden="false" width="18" height="18" viewBox="0 0 24 24"><path class="" fill="#b9bbbe" fill-rule="evenodd" clip-rule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"></path><path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="#b9bbbe"></path></svg>'
   
   okienko.appendChild(part2).classList = "part2";
   part2.innerHTML = '<svg class="bosz" aria-hidden="false" width="18" height="18" viewBox="0 0 24 24"><path class="" fill="#b9bbbe" fill-rule="evenodd" clip-rule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"></path></svg>'


   main_container.appendChild(pojemnik);

   $(".mid").scrollTop($(".mid")[0].scrollHeight);

   console.log(liczenie);
  
  }
});