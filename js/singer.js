let singer_id = "i_singer";
let singer_sig;

let singerDic = {};
let singerSongDic = {};
let singerData = [];

//========================reload(color)
function reload_singerCanvas(reload_textcolor,reload_editBtncolor,reload_editbtnTextcolor){
  $("#singerTitle").css('color',reload_editBtncolor);

  $("#addsingerBtn").css('color',reload_editBtncolor);

  $("#allsingerBtn").css('color',reload_editBtncolor);

  $(".singer_list").css('color',reload_textcolor);

  $(".singer_edit").css('color',reload_editbtnTextcolor);
  $(".singer_edit").css('background-color',reload_editBtncolor);

  $(".singer_checkbox").css('background-color',reload_editbtnTextcolor);
}

//========================singer data form(singer,songs,singerbtn_id,checkbox_id,editbtn_id)
function singerID(singer,songs,titlebtn,checkbox,editbtn) {
  this.singer = singer;
  this.songs = songs;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
  this.editbtn = editbtn;
}

//========================sort singer & singersongs

function sort_singer(){
  songData = show_songData(); //song.js

  for(var i = 0; i < songData.length; i++){

    var song = [];
    var singer;
    var temp;

    song.push(songData[i]);

    temp = songData[i].split("_");
    temp = temp[1].split(".");
    singer = temp[0];

    if (singer in singerSongDic){
      singerSongDic[singer].push(songData[i]);
    } else {
      singerSongDic[singer] = song;
    }
    song = [];
  }
  //console.log("end_________singerSonglist:",singerSongDic);
  return singerSongDic
}

//========================draw singerlist & save singerData

function show_singer(){
  singerSongDic = sort_singer();
  var songs;

  for(key in singerSongDic){

    singer = key;
    songs = singerSongDic[key];

    titlebtn= document.createElement('input');
    titlebtn.setAttribute("type", 'button');
    titlebtn.setAttribute('value',key);
    titlebtn.setAttribute('class','singer_list');
    titlebtn.setAttribute('id',key+'+titlebtn');
    titlebtn.setAttribute('onclick','play_singerBtn(this);');
    document.getElementById('name_list').appendChild(titlebtn);

    checkbox= document.createElement('input');
    checkbox.setAttribute("type", 'checkbox');
    checkbox.setAttribute('class','singer_checkbox');
    checkbox.setAttribute('id',key+'+checkbox');
    checkbox.setAttribute('onclick','get_checkedsingerBtn();');
    document.getElementById('name_list').appendChild(checkbox);

    editbtn= document.createElement('input');
    editbtn.setAttribute("type", 'button');
    editbtn.setAttribute('value',"edit");
    editbtn.setAttribute('class','singer_edit');
    editbtn.setAttribute('id',key+'+editbtn');
    document.getElementById('name_list').appendChild(editbtn);

    document.write('<br>');

    var Singer = new singerID(singer,songs,titlebtn.id,checkbox.id,editbtn.id);
    singerDic[singer] = Singer;

  }
  /*for(key in singerDic){
    console.log(key,singerDic[key]);
  }
  return singerDic;*/
}

//========================playsingerbtn
function play_singerBtn(btn){
  song = singerDic[btn.value].songs;

  singer_sig = "play_singerBtn"

  window.parent.postMessage([singer_id,singer_sig,song], 'http://localhost:3000/iframe.html');
  console.log('song:',song)

}
//========================recognize checked singer
function get_checkedsingerBtn(){
  var checkedsingerlist = [];

  for(key in singerDic){
    if (document.getElementById(singerDic[key].checkbox).checked){
      var songs = singerDic[key].songs;
      for(var i = 0; i < songs.length; i++){
        console.log("typeof songs[i]:", typeof songs[i]);
        checkedsingerlist.push(songs[i]);
      }
      //console.log("checked_singer: ",singerDic[key].songs,"key.checkbox:",singerDic[key].checkbox);
    }
    else{
      continue;
    }
  }
  console.log("checkedsingerlist: ",checkedsingerlist);

  singer_sig = "get_checkedsingerBtn";
  window.parent.postMessage([singer_id,singer_sig,checkedsingerlist], 'http://localhost:3000/iframe.html');

}

//========================play_allsinger
function play_allsinger(){
  //console.log("play_allsinger_songData: ",songData);
  singer_sig = "play_allsinger";
  window.parent.postMessage([singer_id,singer_sig,songData], 'http://localhost:3000/iframe.html');
}

//========================add_singerToMylist--->top으로 변경
/*
function add_singerToMylist(){
  singer_sig = "add_singerToMylist";
  window.parent.postMessage([singer_id,singer_sig,checkedlist], 'http://localhost:3000/iframe.html');
}*/
