
let song_id = "i_song";
let song_sig;

let songDic = {};
let songData = [];

//========================reload(color)
function reload_songCanvas(tColor, bColor, wColor){
  $("#songTitle").css('color',bColor);

  $("#allsongBtn").css('color',bColor);

  $(".song_list").css('color',tColor);

  $(".song_edit").css('color',wColor);
  $(".song_edit").css('background-color',bColor);

  $(".song_checkbox").css('background-color',wColor);
}

//========================song data form(source,title,filetyle,songbtn_id,checkbox_id,editbtn_id)
function songID(original,title,finaltype,titlebtn,checkbox,editbtn) {
  this.original = original;
  this.title = title;
  this.finaltype = finaltype;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
  this.editbtn = editbtn;
}

//========================read_songdata from iframe.html
function show_songData(){
  var song_db = window.top.$('#top').contents().find(".song_db").children();
  //console.log("song_db:",song_db);
  for(var i=0; i < song_db.length; i++){
    songData.push(song_db[i].id);
  }
  console.log("songData:",songData);
  return songData
}

//========================draw songlist & save dongData
function show_song(){
  songData = show_songData();
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
//  for(key in songDic){
//    console.log(key,songDic[key]);
//  }
//  return songDic;
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
//      console.log("checked_title: ",songDic[key].original,"key.checkbox:",songDic[key].checkbox);
    }
    else{
      continue;
    }
  }
  console.log("checkedlist: ",checkedlist);

  song_sig = "get_checkedBtn";
  window.parent.postMessage([song_id,song_sig,checkedlist], 'http://localhost:3000/iframe.html');

}

//========================play_allsong
function play_allsong(){
  //console.log("play_allsong_songData: ",songData);
  song_sig = "play_allsong";
  window.parent.postMessage([song_id,song_sig,songData], 'http://localhost:3000/iframe.html');
}


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
