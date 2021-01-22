//=============================date & time======================================
//https://www.w3schools.com/js/js_date_methods.asp
//Date(year, month, day, hours, minutes, seconds, milliseconds)
// ex. new Date(2018, 11, 24, 10, 33, 30, 0);
//(날짜만)dt.toDateString();
//(시간)dt.toISOString();// dt.toString();//dt.toUTCString();

/*var dt = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

yy = dt.getFullYear();
mm = months[dt.getMonth()];
dd = dt.getDate();

day = days[dt.getDay()];

h = dt.getHours();
m = dt.getMinutes();
s = dt.getSeconds();

var dtText = day + ", " + mm + " " + dd + ", " + yy + " " + h + ":" + m + ":" + s
*/
let iframe_id = "i_iframe";
let iframe_sig;

function get_datetime(){
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toUTCString();//dtText;
}

//================================color=========================================
//deepbrown //wins & editbtntext color & droptext color
var Wins = {
  set_color:function(color){
    //center.html -> colorpicker
    $('#center').contents().find('#center_animate').css('color',color);
    $('#center').contents().find('#center_clear').css('color',color);
    //song.css
    $("#center").contents().find('.song_edit').css("color",color);
    //menu.css
    $('.dropbtn').css("color",color);
    $('.dropdown-content a').css("color",color);
  },

  set_backgroundColor:function(color){
    //iframe.css & center.html
    $('html').css("background-color",color);
    //iframe.css
    $('body').css("background-color",color);

  }
};

//white //songbtnText & slider & dropbtn hover 2
var Texts = {
  set_color:function(color){
    //parent iframe.css
    $('body').css("color",color);
    //i_center->song.css
    $("#center").contents().find('.song_list').css("color",color);
    $("#center").contents().find('#song_checkbox').css("color",color);
  },

  set_backgroundColor:function(color){
    //parent menu.class
    $('.dropdown-content a:hover').css("background-color",color);
    $('.dropdown:hover .dropbtn').css("background-color",color);
    //i_top->slider.css
    $("#top").contents().find('.slider').css("background-color",color);
  }
};
//shinegreen //box & datetime text & i_top button texts & slider rectangle obj & colorchaneBtn
var Boxs = {
  set_color:function(color){
    //parent->iframe.html
    $('#datetime').css("color",color);
    $('#changeColorBtn').css("color",color);
    $('#colorBtn').css("color",color);
    //i_top->slider.css
    $("#top").contents().find('#plus').css("color",color);
    $("#top").contents().find('#play_plus').css("color",color);
    $("#top").contents().find('#minus').css("color",color);
    $("#top").contents().find('#play_minus').css("color",color);
    $("#top").contents().find('#vol').css("color",color);
    $("#top").contents().find('#pre').css("color",color);
    $("#top").contents().find('#stop').css("color",color);
    $("#top").contents().find('#pause').css("color",color);
    $("#top").contents().find('#next').css("color",color);
    $("#top").contents().find('#random').css("color",color);
    $("#top").contents().find('#replay').css("color",color);
    $("#top").contents().find('#vol').css("color",color);
    $("#top").contents().find('#vol_text').css("color",color);
    $("#top").contents().find('#speed').css("color",color);
    $("#top").contents().find('#voice').css("color",color);
    $("#top").contents().find('#playtitle').css("color",color);
    $("#top").contents().find('#select_playlist').css("color",color);

    //i_center->song.html
    $("#center").contents().find('#song_add').css("color",color);
    $("#center").contents().find('#songTitle').css("color",color);
  },

  set_backgroundColor:function(color){
    //parent menu.css
    $('.dropbtn').css("background-color",color);
    $('.dropdown').css("background-color",color);
    $('.dropdown-content').css("background-color",color);
    //center.html -> colorpicker
    $("#center").contents().find('#center_animate').css("background-color",color);
    $("#center").contents().find('#center_clear').css("background-color",color);
    //i_center->song.css
    $("#center").contents().find('.song_edit').css("background-color",color);
    //i_top->slider.css
    $("#top").contents().find('.slider -slider-thumb').css("background-color",color);
    $("#top").contents().find('.slider -moz-range-thumb').css("background-color",color);

  }
};


var Invisible = {
  set_color:function(color){
    //$('').css("color",color);
    //center.html ->colorpicker
    $("#center").contents().find('div.controls').css("color",color);
  },

  set_backgroundColor:function(color){
    //parent iframe.html
    $('#changeColorBtn').css("background-color",color);
    $('#colorBtn').css("background-color",color);
    //center.html ->colorpicker
    $("#center").contents().find('div.controls').css("background-color",color);
    //i_top->slider.css
    $("#top").contents().find('#pre').css("background-color",color);
    $("#top").contents().find('#stop').css("background-color",color);
    $("#top").contents().find('#pause').css("background-color",color);
    $("#top").contents().find('#next').css("background-color",color);
    $("#top").contents().find('#random').css("background-color",color);
    $("#top").contents().find('#replay').css("background-color",color);
    $("#top").contents().find('#vol').css("background-color",color);
    $("#top").contents().find('#speed').css("background-color",color);
    $("#top").contents().find('#voice').css("background-color",color);
    $("#top").contents().find('#select_playlist').css("background-color",color);
    //i_center->song.css
    $("#center").contents().find('#title_list').css("background-color",color);
    $("#center").contents().find('.song_list').css("background-color",color);
    //i_center->song.html
    $("#center").contents().find('#song_add').css("background-color",color);
  }
};

var invisible = 'rgb(0,0,0,0)';

var white = 'rgb(255,255,255,1)';
var black = 'rgb(0,0,0,1)';
var lightgray = 'rgb(220,220,220,1)';
var middlegray = 'rgb(200,200,200,1)';
var deepgray = 'rgb(105,105,105,1)';

var deepbrown = 'rgb(25, 11, 10,1)';
var deepgreen = 'rgb(47,79,79,1)';
var shinegreen = 'rgb(0, 250, 235,1)';

var pastelpink = 'rgb(193,147,145,1)';//rgb(188, 143, 143,1)
var red = 'rgb(128,0,0,1)';
var pinkred = 'rgb(165,42,42,1)';
var shinered = 'rgb(220,20,60,1)';

let i_color;
let iceBlack = [deepbrown,white,shinegreen];
let iceRed = [pinkred,white,shinegreen];
let shineDeepgreen = [deepgreen,white,shinered];
let shinegreenRed = [shinered,white,shinegreen];
let grayPink =[middlegray,white,pastelpink];
let pinkGray =[pastelpink,lightgray,middlegray];

//================================color function================================

function select_color(self){
  let colorBtnId = $("#colorBtn option:selected").attr('id');

  console.log("colorBtnId:",colorBtnId);

  switch (colorBtnId) {

    case 'iceBlackBtn':
      i_color = iceBlack;
      console.log("colorBtnId:",colorBtnId);
      Wins.set_color(i_color[0]);
      Wins.set_backgroundColor(i_color[0]);

      Texts.set_color(i_color[1]);
      Texts.set_backgroundColor(i_color[1]);

      Boxs.set_color(i_color[2]);
      Boxs.set_backgroundColor(i_color[2]);
      break;


    case 'iceRedBtn':
      i_color = iceRed;
      console.log("colorBtnId:",colorBtnId);
      Wins.set_color(i_color[0]);
      Wins.set_backgroundColor(i_color[0]);

      Texts.set_color(i_color[1]);
      Texts.set_backgroundColor(i_color[1]);

      Boxs.set_color(i_color[2]);
      Boxs.set_backgroundColor(i_color[2]);

      break;
    case 'shineDeepgreenBtn':
      i_color = shineDeepgreen;
      console.log("colorBtnId:",colorBtnId);
      Wins.set_color(i_color[0]);
      Wins.set_backgroundColor(i_color[0]);

      Texts.set_color(i_color[1]);
      Texts.set_backgroundColor(i_color[1]);

      Boxs.set_color(i_color[2]);
      Boxs.set_backgroundColor(i_color[2]);
      break;

    case 'shinegreenRedBtn':
      i_color = shinegreenRed;
      console.log("colorBtnId:",colorBtnId);
      Wins.set_color(i_color[0]);
      Wins.set_backgroundColor(i_color[0]);

      Texts.set_color(i_color[1]);
      Texts.set_backgroundColor(i_color[1]);

      Boxs.set_color(i_color[2]);
      Boxs.set_backgroundColor(i_color[2]);
      break;

    case 'grayPinkBtn':
      i_color = grayPink;
      console.log("colorBtnId:",colorBtnId);
      Wins.set_color(i_color[0]);
      Wins.set_backgroundColor(i_color[0]);

      Texts.set_color(i_color[1]);
      Texts.set_backgroundColor(i_color[1]);

      Boxs.set_color(i_color[2]);
      Boxs.set_backgroundColor(i_color[2]);
      break;

    case 'pinkGrayBtn':
      i_color = pinkGray;
      console.log("colorBtnId:",colorBtnId);
      Wins.set_color(i_color[0]);
      Wins.set_backgroundColor(i_color[0]);

      Texts.set_color(i_color[1]);
      Texts.set_backgroundColor(i_color[1]);

      Boxs.set_color(i_color[2]);
      Boxs.set_backgroundColor(i_color[2]);
      break;

  //  defalut:
  }
}


/*
function change_color(self){
  if(self.value === "❆"){

    Wins.set_color(iceRed[0]);
    Wins.set_backgroundColor(iceRed[0]);

    Texts.set_color(iceRed[1]);
    Texts.set_backgroundColor(iceRed[1]);

    Boxs.set_color(iceRed[2]);
    Boxs.set_backgroundColor(iceRed[2]);

    self.value = "✽"

  }else if(self.value === "✽"){

    Wins.set_color(iceBlack[0]);
    Wins.set_backgroundColor(iceBlack[0]);

    Texts.set_color(iceBlack[1]);
    Texts.set_backgroundColor(iceBlack[1]);

    Boxs.set_color(iceBlack[2]);
    Boxs.set_backgroundColor(iceBlack[2]);

    self.value = "❆"

  }
}*/
