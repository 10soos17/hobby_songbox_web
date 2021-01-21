
let song_id = "i_song";
let song_sig;

let songDic = {};

//database
let songData = [
  "test_1.mp3",
  "Colors_Pumas.mp3",
  "untitle_GDRAGON.mp3",
  "galaxy_galaxy.mp3",
  "Centro_Battiato.wav",
  "Jerusalema_Master.wav",
  "Conspiracy_Valli.mp3",
  "WhatLove_Renee.mp3",
  "LiveDie_OST.mp3",
  "Think_Andrew.mp3",
  "NoYou_Clem.mp3",
  "Mycage_Gabriel.mp3",
  "Endset_Trio.mp3",
  "Goldberg_Bach.mp3",
  "You_you.mp3",
  "Nothing_nothing.mp3"
];

//========================song data form(source,title,filetyle,songbtn_id,checkbox_id,editbtn_id)
function songID(original,title,finaltype,titlebtn,checkbox,editbtn) {
  this.original = original;
  this.title = title;
  this.finaltype = finaltype;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
  this.editbtn = editbtn;
}

//========================draw songlist & save dongData
function show_song(){

  for(var i = 0; i < songData.length; i++){

    var original = songData[i];

    var filetype = [".wav", ".mp3", ".ogg"];
    var title;
    var thistype;
    var finaltype;

    for(var f = 0; f < filetype.length; f++){

      thistype = songData[i].split(filetype[f]);

      if (thistype.length != 1) {
        finaltype =filetype[f];
        title = thistype[0];
        break;
      }
    }

    titlebtn= document.createElement('input');
    titlebtn.setAttribute("type", 'button');
    titlebtn.setAttribute('value',title);
    titlebtn.setAttribute('class','song_list');
    titlebtn.setAttribute('id',title+'+titlebtn');
    titlebtn.setAttribute('onclick','play_songBtn(this);');
    document.getElementById('title_list').appendChild(titlebtn);


    checkbox= document.createElement('input');
    checkbox.setAttribute("type", 'checkbox');
    checkbox.setAttribute('class','song_checkbox');
    checkbox.setAttribute('id',title+'+checkbox');
    checkbox.setAttribute('onclick','get_checkedBtn();');
    document.getElementById('title_list').appendChild(checkbox);

    editbtn= document.createElement('input');
    editbtn.setAttribute("type", 'button');
    editbtn.setAttribute('value',"edit");
    editbtn.setAttribute('class','song_edit');
    editbtn.setAttribute('id',title+'+editbtn');
    document.getElementById('title_list').appendChild(editbtn);

    document.write('<br>');

    var S = new songID(original,title,finaltype,titlebtn.id,checkbox.id,editbtn.id);

    songDic[title] = S;

  }
  for(key in songDic){
    console.log(key,songDic[key]);
  }
  return songDic;
}

//========================playsongbtn
function play_songBtn(btn){
  song = [];
  song.push(songDic[btn.value].original);

  song_sig = "play_songBtn"

  window.parent.postMessage([song_id, song_sig, song], 'http://localhost:3000/iframe.html');
  console.log('song:',song)
}

//========================recognize checked song
function get_checkedBtn(){

  var checkedlist=[];

  for(key in songDic){

    if (document.getElementById(songDic[key].checkbox).checked){
      checkedlist.push(songDic[key].original);
      console.log("checked_title: ",songDic[key].original,"key.checkbox:",songDic[key].checkbox);
    }
    else{
      continue;
    }
  }
  console.log("checkedlist: ",checkedlist);

  song_sig = "get_checkedBtn";
  window.parent.postMessage([song_id,song_sig,checkedlist], 'http://localhost:3000/iframe.html');
//  return checkedlist;
}

//========================add_songToMylist
/*
function add_songToMylist(){
  song_sig = "add_songToMylist";
  window.parent.postMessage([song_id,song_sig,checkedlist], 'http://localhost:3000/iframe.html');
}*/





//==============================================================================
//==============================================================================

/*

//$('p',parent.document).contents().find('#changeColorBtn').css("background", "red");

//document.getElementById('top').contentWindow.document.getElementById("#pre")

//document.getElementById('top').contentWindow.document.폼이름.파람이름.value


previousElementSibling()
lastElementChild()
removeChild()
replaceChild()


올바른 사용 예시 ex =================중복 없이 초기화(initialize)
function Person(name){
  this.name = name;
  this.introduce = function(){
    return 'My name is ' + this.name;
  }
}
var P1 = new Person('exam1');
document.write(P1.introduce() + "<br />");

var P2 = new Person('exam2');
document.write(P2.introduce() + "<br />");

*/
//==============================================================================
/*
function play_songBtn(btn){

  //filetype = songDic[btn.value].finaltype;
  original = songDic[btn.value].original;
  //console.log(btn.value,finaltype,original);

  playsong  = document.createElement('source');
  playsong.setAttribute("src", "./song/" + original);
  //playsong = document.createElement(type="audio/"+filetype);

  //lastchild = document.getElementById('audio').lastElementChild;
  //console.log('lastchild',lastchild,"num",num);
  num = (document.getElementById('audio').children).length;


  if (num !== 0){

  //  document.getElementById('audio').replaceChild(playsong,title_list.lastchild);
    document.getElementById('audio').removeChild(audio.children[0]);
  //  document.getElementById('audio').pause();
    document.getElementById('audio').load(playsong);
    document.getElementById('audio').play();

  }else{

    document.getElementById('audio').appendChild(playsong);
  //  document.getElementById('audio').pause();
    document.getElementById('audio').load(playsong);
    document.getElementById('audio').play();

  }

  console.log('this_:',btn.value,'num:',num);
}
*/
