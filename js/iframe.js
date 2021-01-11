/*window.onload = function( ) {
           // 자식 함수 호출 ( script )
          document.getElementById("i_top").contentWindow.document.getElementById("name").innerText)
          document.getElementById("i_center").contentWindow.document.getElementById("name").innerText)
       }
       $('#iframeID').contents().find('#someID').html();
       $(document).find("i_top").contents().find('#someID').css('color', color);
       $(document).find("i_center").contents().find('#someID').css('color', color);
 });

 //$("#ID") $(".class")

*/

//================================dropdown======================================
//document.getElementById("myBtn").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
//================================color=========================================
//deepbrown //wins & editbtntext color & droptext color
var Wins = {
  set_backgroundColor:function(color){
    //iframe.css
    $('body').css("background-color",color);
    //song.css
    $(document).find("i_center").contents().find('.song_edit').css("color",color);
    //menu.css
    $('.dropbtn').css("color",color);
    $('.dropdown-content a').css("color",color);
  }
};

//white //songbtnText & slider & dropbtn hover 2
var Texts = {
  set_color:function(color){
    //parent iframe.css
    $('body').css("color",color);
    //i_center->song.css
    $(document).find("i_center").contents().find('.song_list').css("color",color);
    $(document).find("i_center").contents().find('#song_checkbox').css("color",color);
  },

  set_backgroundColor:function(color){
    //parent menu.class
    $('.dropdown-content a:hover').css("background-color",color);
    $('.dropdown:hover .dropbtn').css("background-color",color);
    //i_top->slider.css
    $(document).find("i_top").contents().find('.slider').css("background",color);
  }
};
//shinegreen //box & i_top button texts & slider rectangle obj & colorchaneBtn
var Boxs = {
  set_color:function(color){
    //parent->iframe.html
    $('#changeColorBtn').css("color",color);
    //i_top->slider.css
    $(document).find("i_top").contents().find('#plus').css("color",color);
    $(document).find("i_top").contents().find('#play_plus').css("color",color);
    $(document).find("i_top").contents().find('#minus').css("color",color);
    $(document).find("i_top").contents().find('#play_minus').css("color",color);
    $(document).find("i_top").contents().find('#vol').css("color",color);
    $(document).find("i_top").contents().find('#pre').css("color",color);
    $(document).find("i_top").contents().find('#stop').css("color",color);
    $(document).find("i_top").contents().find('#next').css("color",color);
    $(document).find("i_top").contents().find('#random').css("color",color);
    $(document).find("i_top").contents().find('#replay').css("color",color);
    $(document).find("i_top").contents().find('#voice').css("color",color);
    $(document).find("i_top").contents().find('#playtitle').css("color",color);
    //i_center->song.html
    $(document).find("i_center").contents().find('#checksong_playBtn').css("color",color);
    $(document).find("i_center").contents().find('#songTitle').css("color",color);
  },

  set_backgroundColor:function(color){
    //parent menu.css
    $('.dropbtn').css("background-color",color);
    $('.dropdown').css("background-color",color);
    $('.dropdown-content').css("background-color",color);
    //i_top->slider.css
    $(document).find("i_top").contents().find('.slider -webkit-slider-thumb').css("background",color);
    $(document).find("i_top").contents().find('.slider -moz-range-thumb').css("background",color);
    //i_center->song.css
    $(document).find("i_center").contents().find('.song_edit').css("background-color",color);
  }
};


var Invisible = {
  set_color:function(color){

    $('').css("color",color);
  },

  set_backgroundColor:function(color){
    //parent iframe.html
    $('#changeColorBtn').css("background-color",color);
    //i_top->slider.css
    $(document).find("i_top").contents().find('#pre').css("background-color",color);
    $(document).find("i_top").contents().find('#stop').css("background-color",color);
    $(document).find("i_top").contents().find('#next').css("background-color",color);
    $(document).find("i_top").contents().find('#random').css("background-color",color);
    $(document).find("i_top").contents().find('#replay').css("background-color",color);
    $(document).find("i_top").contents().find('#voice').css("background-color",color);
    //i_center->song.css
    $(document).find("i_center").contents().find('#title_list').css("background-color",color);
    $(document).find("i_center").contents().find('.song_list').css("background-color",color);
    //i_center->song.html
    $(document).find("i_center").contents().find('#checksong_playBtn').css("background-color",color);
  }
};

var invisible = 'rgb(0,0,0,0)';

var white = 'rgb(255,255,255,1)';
var black = 'rgb(0,0,0,1)';
var lightgray = 'rgb(220,220,220,1)';
var middlegray = 'rgb(200,200,200,1)';
var deepgray = 'rgb(105, 105, 105,1)';

var deepbrown = 'rgb(25, 11, 10,1)';
var deepgreen = 'rgb(47,79,79,1)';
var shinegreen = 'rgb(0, 250, 235,1)';

var pastelpink = 'rgb(193,147,145,1)';//rgb(188, 143, 143,1)
var red = 'rgb(128, 0, 0,1)';
var pinkred = 'rgb(165,  42,  42,1)';
var shinered = 'rgb(220, 20, 60,1)';

function change_color(self){

  if(self.value === '✽'){
    //  Wins.set_color(win);
      Wins.set_backgroundColor(pinkred);

      Texts.set_color(deepbrown);
      Texts.set_backgroundColor(deepbrown);

      Boxs.set_color(shinegreen);
      Boxs.set_backgroundColor(shinegreen);

    self.value = '❆';
  }else{
    //Wins.set_color(win);
    Wins.set_backgroundColor(deepbrown);

    Texts.set_color(deepbrown);
    Texts.set_backgroundColor(deepbrown);

    Boxs.set_color(shinegreen);
    Boxs.set_backgroundColor(shinegreen);

    self.value = '✽';

  }
}
//================================later...add btn

function select_color(self){

  //Wins.set_color(win);
  Wins.set_backgroundColor(deepbrown);

  Texts.set_color(white);
  Texts.set_backgroundColor(white);

  Boxs.set_color(shinegreen);
  Boxs.set_backgroundColor(shinegreen);

  Invisible.set_color(invisible);
  Invisible.set_backgroundColor(invisible);

}
