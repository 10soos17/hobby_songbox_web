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

//========================function initAudioPlayer =============================
function initAudioPlayer(){

  var audio, songDir, stopbtn, pausebtn, mutebtn, shufflebtn, prebtn, nextbtn,
      speedlist, selectlist, playslider, volslider, seeking, pos, play_index, play_title,
      plustime, minustime, extlist, ext, title, type, agent;

  songDir = "./song/";

  playlist = ["Jerusalema_Master KG.wav",
              "You Get What You Give (Original)_New Radicals.mp3",
              "Centro di gravita permanente_Franco Battiato.wav",
              "kor_ko.wav"];

  play_index = 0;

  extlist = [".wav", ".mp3", ".ogg"];
  split_title();
  //check_agent();

  //========================get id==============================================
  stopbtn = document.getElementById("stop");
  pausebtn = document.getElementById("pause");

  prebtn = document.getElementById("pre");
  nextbtn = document.getElementById("next");

  mutebtn = document.getElementById("vol");
  volslider = document.getElementById("vol_bar");

  shufflebtn = document.getElementById("random");
  speedlist = document.getElementById("speed");
  selectlist = document.getElementById("select_playlist");

  playslider = document.getElementById("play_bar");
  plustime = document.getElementById("play_plus");
  minustime = document.getElementById("play_minus");

  play_title = document.getElementById("playtitle");


  //============================================================================
  audio = new Audio();
  audio.src = songDir + playlist[0];
  audio.loop = false;
  //audio.play();
  //play_title.innerHTML = "Track" + (play_index+1) + " - " + playlist[0];

  //========================add event===========================================
  stopbtn.addEventListener("click", act_stop);
  pausebtn.addEventListener("click", act_pause);

  prebtn.addEventListener("click", act_pre);
  nextbtn.addEventListener("click", act_next);

  mutebtn.addEventListener("click", act_mute);
  volslider.addEventListener("mousemove", set_volume);
  shufflebtn.addEventListener("click",act_shuffle);

  speedlist.addEventListener("change", change_speed);
  selectlist.addEventListener("change", change_selectlist);

  playslider.addEventListener("mousedown", function(event){seeking=true; seek_pos(event);});
  playslider.addEventListener("mousemove", function(event){seek_pos(event)});
  playslider.addEventListener("mouseup", function(event){seeking=false;});

  audio.addEventListener("timeupdate", function(){update_playTimePos();});
  audio.addEventListener("ended", function(){change_playlist();});

  make_selectlist();

  //========================function============================================
  //========================play btn
  function act_stop(){
    if(stopbtn.value === "="){
      audio.play();
      stopbtn.value = ">";
      $('#stop').css("color",white);
      play_title.innerHTML = "Track" + (play_index+1) + " - " + playlist[0];

      pausebtn.value = "|||";
      $('#pause').css("color",shinegreen);
    }else{
      audio.pause();
      stopbtn.value = "=";
      $('#stop').css("color",shinegreen);

      pausebtn.value = "|||";
      $('#pause').css("color",shinegreen);
    }
  }
  //========================pause btn
  function act_pause(){
    if(stopbtn.value === ">" && pausebtn.value === ">>>"){
      audio.play();
      pausebtn.value = "|||";
      $('#pause').css("color",shinegreen);
    }else if(stopbtn.value === ">"){
      audio.pause();
      pausebtn.value = ">>>";
      $('#pause').css("color",white);

    }
  }

  //========================check playing and then pause
  function check_playingPause(){
    if (audio.playing === true){
      audio.pause();
      stopbtn.value = "=";
      $('#stop').css("color",shinegreen);

      pausebtn.value = "|||";
      $('#pause').css("color",shinegreen);
    }
  }

  //========================prebtn
  function act_pre(){

    check_playingPause();

    if (play_index !== 0){
      play_index-=1;
    }

    audio.src = songDir + playlist[play_index];

    play_title.innerHTML = "Track " + (play_index + 1) + " - " + playlist[play_index];
    stopbtn.value = ">";
    $('#stop').css("color",white);

    audio.play();
  }

  //========================nextbtn
  function act_next(){

   check_playingPause();

   if (play_index !== playlist.length-1){
     play_index+=1;
   }

   audio.src = songDir + playlist[play_index];

   play_title.innerHTML = "Track " + (play_index + 1) + " - " + playlist[play_index];
   stopbtn.value = ">";
   $('#stop').css("color",white);

   audio.play();

  }

  //========================act shuffle //error
  function act_shuffle() {
    var randomlist, randomNum, limit, count;

    check_playingPause();

    randomlist = ['','','',''];
    limit = playlist.length;
    count = 0;

    while (count < limit){
      randomNum = Math.floor(Math.random() * limit);
      if(randomlist[randomNum] !== playlist[randomNum] && randomlist[randomNum] === ''){
        randomlist[randomNum] = playlist[count];
        count+=1;
      }
    }

    playlist = randomlist;
    play_index = 0;
    audio.src = songDir + playlist[play_index];

    play_title.innerHTML = "Track " + (play_index + 1) + " - " + playlist[play_index];
    stopbtn.value = ">";
    $('#stop').css("color",white);

    delete_selectlist();
    make_selectlist();

    audio.play();
  }

  //========================volume
  function act_mute(){
    if(audio.muted){
      audio.muted = false;
      mutebtn.value = "Vol";
      $('#vol').css("color",shinegreen);

    }else{
      audio.muted = true;
      mutebtn.value = "X";
      $('#vol').css("color",white);

    }
  }
  function set_volume(){
    audio.volume = volslider.value / 100;
    vol_text.innerHTML = volslider.value;
    //$('#vol_text').css("color",shinegreen);
  }

  //========================speed
  function change_speed(event){
    audio.playbackRate = event.target.value;
  }

  //========================play selectlist & act btn & change playtitle
  function change_selectlist(event){
   audio.src = songDir + event.target.value;// +extlist[0];

   stopbtn.value = ">";
   $('#stop').css("color",white);
   change_playlist();

   audio.play();
 }

  //========================slider pos
  function seek_pos(event){
    if(seeking){
      playslider.value = event.clientX - playslider.offsetLeft;
      pos = audio.duration * (playslider.value / 100);
      audio.currentTime = pos;
    }
  }
  //========================play time
  function update_playTimePos(){
    var nowtime = audio.currentTime * (100 / audio.duration);
    var remain = audio.duration - audio.currentTime;
    playslider.value = nowtime;

    //var totalmin = Math.floor(audio.duration / 60);
    //var totalsec = Math.floor(audio.duration - totalmin * 60);
    var nowmin = Math.floor(audio.currentTime / 60);
    var nowsec = Math.floor(audio.currentTime - nowmin * 60);
    var remainmin = Math.floor(remain / 60);
    var remainsec = Math.floor(remain % 60);

    //if(totalsec < 10){totalsec = "0" + totalsec;}
    //if(totalmin < 10){totalmin = "0" + totalmin;}
    if(nowsec < 10){nowsec = "0" + nowsec;}
    if(nowmin < 10){nowmin = "0" + nowmin;}
    if(remainmin < 10){remainmin = "0" + remainmin;}
    if(remainsec < 10){remainsec = "0" + remainsec;}

    play_plus.innerHTML = nowmin + ":" + nowsec;
    play_minus.innerHTML = remainmin + ":" + remainsec;
  }

  //========================play next song & change play title
  function change_playlist(){
    if(play_index === (playlist.length - 1)){
      play_index = 0;
    }else{
      play_index+=1;
    }
    split_title();

    play_title.innerHTML = "Track " + (play_index + 1) + " - " + title;
    audio.src = songDir + playlist[play_index];
    audio.play();
  }

  //========================selectlist
  //========================기존 seleclist삭제
  //  <option value="kor_ko.wav">kor_ko</option>
  function delete_selectlist(){

      num = selectlist.children.length;
      while(num > 0){
         selectlist.removeChild(selectlist.children[0]);
         num-=1;
      }

      console.log('num:',num);//,'nameList:',nameList);
    }
  //========================songDir -> seleclist추가
  //  <option value="kor_ko.wav">kor_ko</option>
  function make_selectlist(){
    for (var i = 0; i < playlist.length; i++){
      var track;
      title = playlist[i].split(".");
      title = title[0];

      track = document.createElement("option");
      track.setAttribute('value',playlist[i]);
      track.setAttribute('id',title);
      //track.setAttribute('class','track_list');
      document.getElementById('select_playlist').appendChild(track);

      track.innerHTML = title;

      selectlist.appendChild(track);
    }
  }


 //========================check browser
 /*//파일 종류 선택 재생 가능할 때 사용
  function check_agent(){
    agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('firefox') != -1 || agent.indexOf('opera') != -1){
      ext = ext[2];
    }
  }
  */

  //========================check file type
  //파일 타입 알아내서 재생할 때 사용 //(상황따라)확장자 error 처리하는 법 추가하기
  function split_title(){
    for(var i = 0; i < extlist.length; i++){
      type = playlist[play_index].split(extlist[i]);
      if (type.length != 1) {
        ext =extlist[i];
        title = type[0];
        break;
      }
    }
  }



}
