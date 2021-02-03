let iframe_id = "i_iframe";
let iframe_sig;

let firstMylist_id = "i_firstMylist";
let firstMylist_sig;
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
function get_datetime(){
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toString();//dt.toUTCString();//dtText;
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
    //singer.css
    $("#center").contents().find('.singer_edit').css("color",color);
    //mylist.css
    $("#center").contents().find('.mylist_edit').css("color",color);
    //menu.css
    $('.dropbtn').css("color",color);
    $('.dropdown-content a').css("color",color);
  },

  set_backgroundColor:function(color){
    //iframe.html(popup)
    $('.popup').css("background-color",color);//(opacity0.7)
    $('.popup-content').css("background-color",color);
    $('#makePopupBtn').css("background-color",color);
    $('#editPopupBtn').css("background-color",color);
    $('#deletePopupBtn').css("background-color",color);
    $('.goto_checkbox').css("background-color",color);

    $('.popup-create-content').css("background-color",color);

    $('.popup-goto-content').css("background-color",color);
    //iframe.css & center.html
    $('html').css("background-color",color);
    //iframe.css
    $('body').css("background-color",color);
    //i_center->song.css
    $("#center").contents().find('.song_checkbox').css("background-color",color);
    //i_center->singer.css
    $("#center").contents().find('.singer_checkbox').css("background-color",color);
    //i_center->mylist.css
    $("#center").contents().find('.mylist_checkbox').css("background-color",color);

  }
};

//white //songbtnText & slider & dropbtn hover 2
var Texts = {
  set_color:function(color){
    //parent iframe.css
    $('body').css("color",color);
    //parent->iframe.html
    $('#namePopupHolder').css("color",color);//(popup)
    $('.gotoMyname').css("color",color);//(popup)
    //i_center->song.css
    $("#center").contents().find('.song_list').css("color",color);
    //i_center->singer.css
    $("#center").contents().find('.singer_list').css("color",color);
    //i_center->mylist.css
    $("#center").contents().find('.mylist_list').css("color",color);

  },

  set_backgroundColor:function(color){
    //parent->iframe.html
    //$('#namePopupHolder').css("background-color",color);//opacity=0.3 적용에서 제외
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
    $('.popup_mylist_list').css("color",color);//(popup)
    $('.popup_mylist_checkbox').css("color",color);//(popup)
    $('#closePopup').css("color",color);//(popup)
    $('#addPopup').css("color",color);//(popup)
    $('#playPopup').css("color",color);//(popup)
    $('#makePopupBtn').css("color",color);//(popup)
    $('#editPopupBtn').css("color",color);//(popup)
    $('#deletePopupBtn').css("color",color);//(popup)

    $('#namePopupLabel').css("color",color);//(popup)

    $('#gotoLabel').css("color",color);//(popup)

    $('#gotoDeleteBtn').css("color",color);//(popup)
    $('#gotoSelectBtn').css("color",color);//(popup)
    $('#gotoClose').css("color",color);//(popup)
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
    $("#top").contents().find('#topTomylist').css("color",color);
    //i_center->song.html
    $("#center").contents().find('#songTitle').css("color",color);
    $("#center").contents().find('#addsongBtn').css("background-color",color);
    $("#center").contents().find('#allsongBtn').css("background-color",color);
    //i_center->singer.html
    $("#center").contents().find('#singerTitle').css("color",color);
    $("#center").contents().find('#addsingerBtn').css("background-color",color);
    $("#center").contents().find('#allsingerBtn').css("background-color",color);
    //i_center->mylist.html
    $("#center").contents().find('#mylistTitle').css("color",color);
    $("#center").contents().find('#selectMylistBtn').css("background-color",color);
    $("#center").contents().find('#deleteMylistBtn').css("background-color",color);
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
    //i_center->singer.css
    $("#center").contents().find('.singer_edit').css("background-color",color);
    //i_center->mylist.css
    $("#center").contents().find('.mylist_edit').css("background-color",color);
    //i_top->slider.css
    $("#top").contents().find('.slider -slider-thumb').css("background-color",color);
    $("#top").contents().find('.slider -moz-range-thumb').css("background-color",color);

  },
  set_borderColor:function(color){
    //parent->iframe.html(popup)
    $('.popup-content').css("border-color",color);
    $('#makePopupBtn').css("border-color",color);
    $('#editPopupBtn').css("border-color",color);
    $('#deletePopupBtn').css("border-color",color);

    $('.popup-create-content').css("border-color",color);
    $('#namePopupHolder').css("border-color",color);

    $('.popup-goto-content').css("border-color",color);
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
    $('.popup_mylist_list').css("background-color",color);//(popup)
    $('.popup_mylist_checkbox').css("background-color",color);//(popup)
    $('#gotoDeleteBtn').css("background-color",color);//(popup)
    $('#gotoSelectBtn').css("background-color",color);//(popup)
    $('#gotoMylist').css("background-color",color);//(popup)
    $('.gotoMyname').css("background-color",color);//(popup)
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
    $("#top").contents().find('#topTomylist').css("background-color",color);
    //i_center->song.css
    $("#center").contents().find('#title_list').css("background-color",color);
    $("#center").contents().find('.song_list').css("background-color",color);
    //i_center->song.html
    $("#center").contents().find('#addsongBtn').css("background-color",color);
    $("#center").contents().find('#allsongBtn').css("background-color",color);
    //i_center->singer.css
    $("#center").contents().find('#name_list').css("background-color",color);
    $("#center").contents().find('.singer_list').css("background-color",color);
    //i_center->singer.html
    $("#center").contents().find('#addsingerBtn').css("background-color",color);
    $("#center").contents().find('#allsingerBtn').css("background-color",color);
    //i_center->mylist.css
    $("#center").contents().find('#myname_list').css("background-color",color);
    $("#center").contents().find('.mylist_list').css("background-color",color);
    //i_center->mylist.html
    $("#center").contents().find('#selectMylistBtn').css("background-color",color);
    $("#center").contents().find('#deleteMylistBtn').css("background-color",color);
  }
};

var invisible = 'rgb(0, 0, 0, 0)';

var white = 'rgb(255, 255, 255)';
var black = 'rgb(0, 0, 0)';
var lightgray = 'rgb(220, 220, 220)';
var middlegray = 'rgb(200, 200, 200)';
var deepgray = 'rgb(105, 105, 105)';

var deepbrown = 'rgb(25, 11, 10)';
var deepgreen = 'rgb(47, 79, 79)';
var shinegreen = 'rgb(0, 250, 235)';

var pastelpink = 'rgb(193, 147, 145)';//rgb(188, 143, 143)
var red = 'rgb(128, 0, 0)';
var pinkred = 'rgb(165, 42, 42)';
var shinered = 'rgb(220, 20, 60)';

let iceBlack = [deepbrown,white,shinegreen];
let iceRed = [pinkred,white,shinegreen];
let shineDeepgreen = [deepgreen,white,shinered];
let shinegreenRed = [shinered,white,shinegreen];
let grayPink =[middlegray,white,pastelpink];
let pinkGray =[pastelpink,lightgray,middlegray];

let i_color = iceBlack;
let before_i_color = i_color;
let colorBtnId;

//================================color function================================
function check_btnColor(){
  let stopbtn_color = $('#top').contents().find('#stop');
  let pausebtn_color = $('#top').contents().find('#pause');

  if (pausebtn_color.css("color") === before_i_color[1]){
    stopbtn_color.css("color", i_color[1]);
    pausebtn_color.css("color", i_color[1]);
  } else if (stopbtn_color.css("color") === before_i_color[1]){
    stopbtn_color.css("color", i_color[1]);
  }
//  console.log("before_i_color",before_i_color,"i_color:",i_color);
}

function select_color(self){
  colorBtnId = $("#colorBtn option:selected").attr('id');
  before_i_color = i_color;

  //console.log("colorBtnId:",colorBtnId);

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
      Boxs.set_borderColor(i_color[2]);
      check_btnColor();
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
      Boxs.set_borderColor(i_color[2]);
      check_btnColor();
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
      Boxs.set_borderColor(i_color[2]);
      check_btnColor();
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
      Boxs.set_borderColor(i_color[2]);
      check_btnColor();
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
      Boxs.set_borderColor(i_color[2]);
      check_btnColor();
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
      Boxs.set_borderColor(i_color[2]);
      check_btnColor();
      break;

  }
}
//========================[about popup mylist]==================================
//==============================================================================
//========================mylist data form(myname,songs,singerbtn_id,checkbox_id,editbtn_id)
let mylistDic = {};//get data from mysql
let mylistSongDic = {};

function mylistID(myname,mysongs,titlebtn,checkbox) {
  this.myname = myname;
  this.mysongs = mysongs;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
}

//========================mylist 내부의 song data form(song,titlebtn,checkbox)
let mynameDic = {};
let mynameList = [];

function mynameID(song,titlebtn,checkbox) {
  this.song = song;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
}
//test data
mylistSongDic = {"favorite":["Nothing From Nothing (1974)_Billy Preston.mp3","White Rabbit_Jefferson Airplane.wav","Send Me On My Way_Rusted Root.wav"],
              "replay":["Nothing From Nothing (1974)_Billy Preston.mp3","White Rabbit_Jefferson Airplane.wav"]};

//==============================================================================
//========================reload(color)
function reload_popupCanvas(tColor, bColor, wColor){
  $(".popup").css('background-color',wColor);
  $(".popup").css('opacity', 0.7);
  $(".popup-create-content").css('background-color',wColor);
  $(".popup-goto-content").css('background-color',wColor);

  $(".popup-content").css('background-color',wColor);
  $(".popup_mylist_list").css('background-color',wColor);
  $(".popup_mylist_checkbox").css('background-color',wColor);
  $("#makePopupBtn").css('background-color', wColor);
  $("#editPopupBtn").css('background-color', wColor);
  $("#deletePopupBtn").css('background-color', wColor);
  $(".goto_checkbox").css('background-color', wColor);

  $(".popup-content").css('border-color',bColor);
  $(".popup-create-content").css('border-color',bColor);
  $("#makePopupBtn").css('border-color',bColor);
  $("#editPopupBtn").css('border-color',bColor);
  $("#deletePopupBtn").css('border-color',bColor);
  $("#namePopupHolder").css('border-color',bColor);
  $(".popup-goto-content").css('border-color',bColor);

  $(".popup_mylist_list").css('color',bColor);
  $(".popup_mylist_checkbox").css('color',bColor);
  $("#closePopup").css('color',bColor);
  $("#addPopup").css('color',bColor);
  $("#playPopup").css('color',bColor);
  $("#makePopupBtn").css('color',bColor);
  $("#editPopupBtn").css('color',bColor);
  $("#deletePopupBtn").css('color',bColor);
  $("#namePopupLabel").css('color',bColor);
  $("#gotoLabel").css('color',bColor);
  $("#gotoDeleteBtn").css('color',bColor);
  $("#gotoSelectBtn").css('color',bColor);
  $("#gotoClose").css('color',bColor);

  $("#namePopupHolder").css('color',tColor);
  $(".gotoMyname").css('color',tColor);
  //$("#namePopupHolder").css('background-color',tColor);//opacity->0.2이기에 컬러 적용 제외
}

//==============================================================================
//==============================================================================
//========================1.popup(top.html btn->iframe.html)====================
function popup_showMylist(){
  //btn color 때문에 설정
  var bColor =  $("#namePopupHolder").css('border-color');

  var popupList = $('#popup_mylist');
  var songs;

  mylistDic={};
  popupList.empty();

  for(key in mylistSongDic){

    myname = key;
    songs = mylistSongDic[key];

    titlebtn=`<input type="button" class = "popup_mylist_list" id="${key}+titlebtn" value="${key}"
                onclick="goto_mylist(this);" style="color:${bColor}"></input>`;

    checkbox = `<input type="checkbox" class = "popup_mylist_checkbox" id="${key}+checkbox"
                onclick="get_checkedMylistBtn();"></input></br>`;

    popupList.append(titlebtn);
    titlebtnId = $('#popup_mylist').children("input:last").attr("id");

    popupList.append(checkbox);
    checkboxId = $('#popup_mylist').children("input:last").attr("id");

    var Mylist = new mylistID(myname,songs,titlebtnId,checkboxId);
    mylistDic[myname] = Mylist;

  //console.log(myname,songs,titlebtnId,checkboxId);
  }
/*  for(key in mylistDic){
    console.log(key,mylistDic[key]);
  }*/
  //return mylistDic;*/
}
//==============================================================================
//==========================popup functions=====================================
//==========================close_popup
function close_popup(){
  var tColor  = $("#namePopupHolder").css('color');
  var bColor =  $("#namePopupHolder").css('border-color');
  var wColor =   $(".popup").css('background-color');

  document.querySelector('.popup').style.display = 'none';
  document.querySelector('.popup-create-content').style.display = 'none';
  document.querySelector('.popup-goto-content').style.display = 'none';

  document.querySelector('#makePopupBtn').style.color = bColor;
  document.querySelector('#makePopupBtn').style.borderColor = bColor;
  document.querySelector('#makePopupBtn').style.backgroundColor = wColor;
  document.querySelector('#makePopupBtn').value = 'new';

  document.querySelector('#editPopupBtn').style.color = bColor;
  document.querySelector('#editPopupBtn').style.borderColor = bColor;
  document.querySelector('#editPopupBtn').style.backgroundColor = wColor;
  document.querySelector('#editPopupBtn').value = 'edit';
}

//========================recognize checked mylist
function get_checkedMylistBtn(){
  var checkedMylist = [];
  console.log("checkedMylist: ",checkedMylist);
  for(key in mylistDic){
    if (document.getElementById(mylistDic[key].checkbox).checked){
      checkedMylist.push(mylistDic[key].myname);
      console.log("checked_mylist: ",mylistDic[key].myname);
    }
    else{
      continue;
    }
  }
  console.log("checkedMylist: ",checkedMylist);
  return checkedMylist;
}
//==========================create mylist
//mysql 연결 후에 수정(send message -> insert,edit,delete mysql -> reload)
function create_mylist(){
  var tColor  = $("#namePopupHolder").css('color');
  var bColor =  $("#namePopupHolder").css('border-color');
  var wColor =   $(".popup").css('background-color');

  if(document.querySelector('#makePopupBtn').value === 'new'){

    document.querySelector('.popup-create-content').style.display = 'flex';
    document.querySelector('#namePopupHolder').value = "";
    document.querySelector('#namePopupLabel').innerHTML = "Name";

    document.querySelector('#makePopupBtn').style.color = wColor;
    document.querySelector('#makePopupBtn').style.borderColor = tColor;
    document.querySelector('#makePopupBtn').style.backgroundColor = bColor;
    document.querySelector('#makePopupBtn').value = '✔︎';

    document.querySelector('#editPopupBtn').style.color = bColor;
    document.querySelector('#editPopupBtn').style.borderColor = bColor;
    document.querySelector('#editPopupBtn').style.backgroundColor = wColor;
    document.querySelector('#editPopupBtn').value = 'edit';

  }
  else if(document.querySelector('#makePopupBtn').value === '✔︎'){
    var createName = document.querySelector('#namePopupHolder').value;
    console.log("createName:",createName);
    if(createName === ""){

      document.querySelector('.popup-create-content').style.display = 'none';
      document.querySelector('.popup-goto-content').style.display = 'none';
      //document.querySelector('#namePopupHolder').value = `Write listname!!!`;
      alert("Write listname!!!");
    }else{
      mylistSongDic[createName] = [];
      popup_showMylist();
      //document.querySelector('.popup-create-content').style.display = 'none';
      document.querySelector('#namePopupHolder').value = `'${createName}' was created!`;
    }

    document.querySelector('#makePopupBtn').style.color = bColor;
    document.querySelector('#makePopupBtn').style.borderColor = bColor;
    document.querySelector('#makePopupBtn').style.backgroundColor = wColor;
    document.querySelector('#makePopupBtn').value = 'new';

  }
}
//==========================edit mylist name
function edit_mylist(){
  var tColor  = $("#namePopupHolder").css('color');
  var bColor =  $("#namePopupHolder").css('border-color');
  var wColor =   $(".popup").css('background-color');

  var checkedMylist = get_checkedMylistBtn();

  if(document.querySelector('#editPopupBtn').value === 'edit'){


    document.querySelector('.popup-create-content').style.display = 'flex';
    document.querySelector('#namePopupHolder').value = "";
    document.querySelector('#namePopupLabel').innerHTML = "Rename";

    document.querySelector('#editPopupBtn').style.color = wColor;
    document.querySelector('#editPopupBtn').style.borderColor = tColor;
    document.querySelector('#editPopupBtn').style.backgroundColor = bColor;
    document.querySelector('#editPopupBtn').value = '✔︎';

    document.querySelector('#makePopupBtn').style.color = bColor;
    document.querySelector('#makePopupBtn').style.borderColor = bColor;
    document.querySelector('#makePopupBtn').style.backgroundColor = wColor;
    document.querySelector('#makePopupBtn').value = 'new';
  }
  else if(document.querySelector('#editPopupBtn').value === '✔︎'){
    if(checkedMylist.length !== 1){
      document.querySelector('.popup-create-content').style.display = 'none';
      document.querySelector('.popup-goto-content').style.display = 'none';
      //document.querySelector('#namePopupHolder').value = "Select one!!!";
      alert("Select one!!!");

    }else{
      var afterName = document.querySelector('#namePopupHolder').value;
      var beforeName = checkedMylist[0];
      var beforeSongs = mylistSongDic[beforeName];
      console.log("afterName:",afterName,"beforeName:",beforeName,"beforeSongs:",beforeSongs);

      delete mylistSongDic[beforeName];
      mylistSongDic[afterName] = beforeSongs;

      popup_showMylist();

      //document.querySelector('.popup-create-content').style.display = 'none';
      document.querySelector('#namePopupHolder').value = `'${beforeName}' was edited!`;
      document.querySelector('#gotoLabel').innerHTML = afterName;

    }
    document.querySelector('#editPopupBtn').style.color = bColor;
    document.querySelector('#editPopupBtn').style.borderColor = bColor;
    document.querySelector('#editPopupBtn').style.backgroundColor = wColor;
    document.querySelector('#editPopupBtn').value = 'edit';
  }
}
//==========================delete mylist
function delete_mylist(){
  var checkedMylist = get_checkedMylistBtn();
  if(checkedMylist.length === 0){
    alert("Select list!!!");
  }
  else{
    for(var i = 0; i < checkedMylist.length; i++){
      delete mylistSongDic[checkedMylist[i]];
    }
  }
  //console.log("delete_mylistSongDic:",mylistSongDic);
  popup_showMylist();
}

//========================play mylistbtn(mylistBtn click -> play)
function play_mylistBtn(){
  var checkedMylist = get_checkedMylistBtn();
  var songs = {};
  var songslist = [];

  if (checkedMylist.length === 0){
    alert("Select list!!!");
    return 0;
  }else{
    for(var i = 0; i < checkedMylist.length; i++){
      for(var j = 0; j < mylistDic[checkedMylist[i]].mysongs.length; j++){
        songs[mylistDic[checkedMylist[i]].mysongs[j]] = j;
      }
    }
    for(key in songs){
      songslist.push(key);
    }
    firstMylist_sig = "play_mylistBtn"

    window.parent.postMessage([firstMylist_id,firstMylist_sig,songslist], 'http://localhost:3000/iframe.html');
    console.log('songs:',songs,"songslist",songslist);
  }
}

//==========================add song(singer)(checked song(singer) -> checked mylist)
function add_songToMylist(){
  var checkedMylist = get_checkedMylistBtn();
  console.log("checkedlist:",checkedlist,"checkedMylist:",checkedMylist);
  console.log("before_mylistSongDic:",mylistSongDic);

  for(var i = 0; i < checkedlist.length; i++){
    for(var j = 0; j < checkedMylist.length; j++){
      mylistSongDic[checkedMylist[j]].push(checkedlist[i]);
    }
  }
  if(document.querySelector('.popup-goto-content').style.display === 'flex'){
    var thisname = document.querySelector('#gotoLabel').innerHTML;
    goto_mylist(thisname);
  }

  console.log("after_mylistSongDic:",mylistSongDic);
}

//==============================================================================
//==============================================================================
//========================1_1.goto(draw popup mylist 클릭 -> draw songslist)=====

function goto_mylist(btn){
  //btn color 때문에 설정
  var bColor =  $("#namePopupHolder").css('border-color');
  var thisname = btn.value;
  var gotoList = $('#gotoMylist');
  var song;

  mynameDic = {};
  mynameList = mylistSongDic[thisname];
  gotoList.empty();

  document.querySelector('#gotoLabel').innerHTML = thisname;
  document.querySelector('.popup-goto-content').style.display = 'flex';

  //console.log("thisname:",thisname,"mynameList:",mynameList);

  for(var i = 0; i < mynameList.length; i++){

    song = mynameList[i];

    titlebtn=`<input type="button" value="${song}" class="gotoMyname" id="${song}+titlebtn"
                onclick="goto_playBtn(this);" style="color:${bColor}"></input>`;
    checkbox = `<input type="checkbox" class="goto_checkbox" id="${song}+checkbox"
                onclick="goto_checkedBtn();" ></input></br>`;

    gotoList.append(titlebtn);
    titlebtnId = gotoList.children("input:last").attr("id");

    gotoList.append(checkbox);
    checkboxId = gotoList.children("input:last").attr("id");

    //console.log("titlebtnId:",titlebtnId,"checkboxId",checkboxId);

    var Myname = new mynameID(song,titlebtnId,checkboxId);
    mynameDic[song] = Myname;

  }
  /*for(key in mynameDic){
    console.log("mynameDic:",key,mynameDic[key]);
  }*/
  //return mynameDic;
}
//========================goto functions========================================
//========================goto_recognize checked mylist=========================
function goto_checkedBtn(){
  var checkedMylist = [];
  console.log("checkedMylist: ",checkedMylist);
  for(key in mynameDic){
    if (document.getElementById(mynameDic[key].checkbox).checked){
      checkedMylist.push(mynameDic[key].song);
      console.log("checked_mylist: ",mynameDic[key].song);
    }
    else{
      continue;
    }
  }
  console.log("checkedMylist: ",checkedMylist);
  return checkedMylist;
}
//========================goto_playbtn(songBtn click->play)
function goto_playBtn(btn){
  var song = [];
  song.push(mynameDic[btn.value].song);

  firstMylist_sig = "goto_playBtn"

  window.parent.postMessage([firstMylist_id,firstMylist_sig,song], 'http://localhost:3000/iframe.html');
  console.log('checkedMylist:',checkedMylist);
}
//========================goto_playchceckedsong(checkBtn click->get checkedlist->play)
function goto_playCheckedsong(){
  var checkedMylist = goto_checkedBtn();

  firstMylist_sig = "goto_playCheckedsong"

  window.parent.postMessage([firstMylist_id,firstMylist_sig,checkedMylist], 'http://localhost:3000/iframe.html');
  console.log('checkedMylist:',checkedMylist);
}
//========================goto_deleteBtn(deleteBtn click->delete song)
function goto_deleteBtn(){
  var thisMyname = document.querySelector('#gotoLabel').innerHTML;
  var checkedMylist = goto_checkedBtn();
  var beforeMylist = mylistSongDic[thisMyname];
  var afterMylist = [];
  console.log("beforeMylist:",beforeMylist);
  if(checkedMylist.length === 0){
    alert("Select list!!!");
  }
  else{
    for(var i = 0; i < beforeMylist.length; i++){
      for(var j = 0; j < checkedMylist.length; j++){
        if(beforeMylist[i] === checkedMylist[j]){
          console.log("delete______",beforeMylist[i]);
          delete beforeMylist[i];
          break;
        }
      }
    }

    for(var i = 0; i < beforeMylist.length; i++){
      if(beforeMylist[i] !== undefined){
        afterMylist.push(beforeMylist[i]);
        console.log("add______",beforeMylist[i]);
      }
    }

  }
  mylistSongDic[thisMyname] = afterMylist;
  console.log("delete_mylistSongDic:",mylistSongDic);
  goto_mylist(thisMyname);
}
//========================goto_close
function goto_close(){
  var tColor  = $("#namePopupHolder").css('color');
  var bColor =  $("#namePopupHolder").css('border-color');
  var wColor =   $(".popup").css('background-color');

  document.querySelector('.popup-goto-content').style.display = 'none';

  document.querySelector('#makePopupBtn').style.color = bColor;
  document.querySelector('#makePopupBtn').style.borderColor = bColor;
  document.querySelector('#makePopupBtn').style.backgroundColor = wColor;
  document.querySelector('#makePopupBtn').value = 'new';

  document.querySelector('#editPopupBtn').style.color = bColor;
  document.querySelector('#editPopupBtn').style.borderColor = bColor;
  document.querySelector('#editPopupBtn').style.backgroundColor = wColor;
  document.querySelector('#editPopupBtn').value = 'edit';
}
