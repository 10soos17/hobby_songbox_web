/*올바른 사용 예시 ex =================중복 없이 초기화(initialize)
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

//database
var songData = [
  "My Body is a cage_Peter Gabriel.mp3",
  "test_1.mp3",
  "Nothing From Nothing_Billy Preston.mp3",
  "test_2.mp3",
  "untitle_GDRAGON.mp3"
];

var songDic = {};

function songID(title,titlebtn,checkbox,editbtn) {
  this.title = title;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
  this.editbtn = editbtn;
}

function show_song(){

  for(var i = 0; i < songData.length; i++){

    var title = songData[i];

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

    document.getElementById('title_list').appendChild(checkbox);

    editbtn= document.createElement('input');
    editbtn.setAttribute("type", 'button');
    editbtn.setAttribute('value',"edit");
    editbtn.setAttribute('class','song_edit');
    editbtn.setAttribute('id',title+'+editbtn');
    document.getElementById('title_list').appendChild(editbtn);

    document.write('<br>');

    var S = new songID(title,titlebtn.id,checkbox.id,editbtn.id);
    songDic[title] = S;

  }
  for(key in songDic){
    console.log(key,songDic[key]);
  }
}
//========================playsongbtn
function play_songBtn(btn){

  playsong  = document.createElement('source');
  playsong.setAttribute("src", "./song/" + btn.value);

  //lastchild = document.getElementById('audio').lastElementChild;
  //console.log('lastchild',lastchild,"num",num);
  num = (document.getElementById('audio').children).length;


  if (num !== 0){

    document.getElementById('audio').replaceChild(playsong,lastchild);
    document.getElementById('audio').pause();
    document.getElementById('audio').load(playsong);
    document.getElementById('audio').play();

  }else{

    document.getElementById('audio').appendChild(playsong);
    document.getElementById('audio').pause();
    document.getElementById('audio').load(playsong);
    document.getElementById('audio').play();

  }

  console.log('this_',btn.value)
}
//========================recognize checked song
function get_checkedBtn(){
  var checkedlist=[];

  for(key in songDic){
    if (document.getElementById(songDic[key].checkbox).checked){
      checkedlist.push(songDic[key].title);
      console.log("checked_title: ",songDic[key].title,"key.checkbox:",songDic[key].checkbox);
    }
    else{
      continue;
    }
  }
  console.log("checkedlist: ",checkedlist);
  return checkedlist;
}

//========================play checked song
function play_checkedsong(){

  checkedlist = get_checkedBtn();

  document.getElementById('audio').pause();

  for(var i = 0; i < checkedlist.length; i++){

    playsong  = document.createElement('source');
    playsong.setAttribute("src", "./song/" + checkedlist[i]);
    document.getElementById('audio').appendChild(playsong);

    document.getElementById('audio').load(playsong);
    document.getElementById('audio').play();


    now = document.getElementById('audio').currentSrc;
    track = document.getElementById('audio').videoTracks;
    duration = document.getElementById('audio').lastElementChild.duration;
    console.log("now:",now,"track:",track,"duration:",duration);

  }

  num = (document.getElementById('audio').children).length;
  lastchild = document.getElementById('audio').lastElementChild;
  console.log('lastchild',lastchild,"num",num);

}

/*
//========================playsong
function playsong(){
  for(var i = 0; i < songData.length; i++){
    playsong  = document.createElement('source');
    playsong.setAttribute("src", "./song/"+songData[i]);
    document.getElementById('audio').appendChild(playsong);

  }
}

previousElementSibling()
lastElementChild()
removeChild()
replaceChild()
*/
