let top_id, top_sig, _audio, songDir, stopbtn, pausebtn, mutebtn, shufflebtn, prebtn, nextbtn,
    speedlist, selectlist, playslider, volslider, seeking, pos, play_index, play_title,
    plustime, minustime, extlist, ext, title, type, agent, time_set;

top_id = "i_top";
songDir = "./song/";
extlist = [".wav", ".mp3", ".ogg"];

//============================================================================
function set_audio(newlist){

  songDir = "./song/";

  playlist = newlist;
  play_index = 0;

  console.log("playlist:",playlist);

  _audio = $('#top').contents().find('#audio');//audio = new Audio();//  audio.append(`<audio id='audio'></audio>`);
  _audio.attr('src',`${songDir}${playlist[play_index]}`);//audio.src = songDir + playlist[play_index];
  _audio.attr('load',`${songDir}${playlist[play_index]}`);


  if(playlist.length === 1){
    _audio.attr('loop',true);
  }else{
    _audio.attr('loop',false);
  }

  //split_title();
  //play_title.html(`Track ${play_index+1} - ${title}`);
  delete_selectlist();
  make_selectlist();
  act_play();

}

//========================function initAudioPlayer =============================

//========================function============================================
//========================play btn
function act_play(){

  let stopbtn = $('#top').contents().find('#stop');
  let pausebtn = $('#top').contents().find('#pause');
  let play_title = $('#top').contents().find('#playtitle');

  _audio[play_index].play();

  stopbtn.attr('value', ">");
  stopbtn.css('color',i_color[1]);
  play_title.html(`Track ${play_index+1} - ${playlist[0]}`);

  pausebtn.attr('value', "|||");
  pausebtn.css("color",i_color[2]);

}

//========================check playing and then pause
function check_playingPause(){
  let stopbtn = $('#top').contents().find('#stop');
  let pausebtn = $('#top').contents().find('#pause');

  if (pausebtn.val() === ">>>"){
    _audio[play_index].pause();
    stopbtn.attr('value',"=");
    stopbtn.css('color',i_color[2]);

    pausebtn.attr('value',"|||");
    pausebtn.css('color',i_color[2]);
  }
}

//========================selectlist
//========================기존 seleclist삭제
function delete_selectlist(){
//  top_sig = "delete_selectlist";
//  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
  console.log("i_top_____delete_selectlist");
  selectlist = $('#top').contents().find('#select_playlist');
  selectlist.empty();//https://blog.naver.com/keiaz/220971558830 ,https://blog.naver.com/ttotto4417/222212079744

}
//========================songDir -> seleclist추가
function make_selectlist(){
//  top_sig = "make_selectlist";
//  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
  selectlist = $('#top').contents().find('#select_playlist');

  for (var i = 0; i < playlist.length; i++){

    var title = playlist[i].split(".");
    title = title[0];
    console.log('playlist[i]:',playlist[i]);

    //selectlist.append(`<option value = ${i} id=${playlist[i]}>${title}</option>`);
    selectlist.append(`<option value ="${i}" id="${playlist[i]}">${title}</option>`);
    //id = $('#top').contents().find(`#${playlist[i]}`).attr('id');
    //console.log("selectlist_________ID:",id);
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

//==============================================================================
//===============================i_top==========================================
//========================get_items=============================================

function  get_items(){
  //document.getElementById("stop");
  _audio = $('#top').contents().find('#audio');

  stopbtn = $('#top').contents().find('#stop');
  pausebtn = $('#top').contents().find('#pause');

  prebtn = $('#top').contents().find('#pre');
  nextbtn = $('#top').contents().find('#next');

  mutebtn = $('#top').contents().find('#vol');
  voltext = $('#top').contents().find('#vol_text');
  volslider = $('#top').contents().find('#vol_bar');

  shufflebtn = $('#top').contents().find('#random');
  speedlist = $('#top').contents().find('#speed');
  selectlist = $('#top').contents().find('#select_playlist');

  playslider = $('#top').contents().find('#play_bar');
  plustime = $('#top').contents().find('#play_plus');
  minustime = $('#top').contents().find('#play_minus');

  play_title = $('#top').contents().find('#playtitle');

  //========================add event===========================================
/*
  stopbtn.attr("onclick", "act_stop()");//addEventListener("click", act_stop);
  pausebtn.attr("onclick", "act_pause()");

  prebtn.attr("onclick", "act_pre()");//.addEventListener("click", act_pre);
  nextbtn.attr("onclick", "act_next()");//.addEventListener("click", act_next);

  mutebtn.attr("onclick", "act_mute()");//.addEventListener("click", act_mute);
  volslider.attr("mousemove", "set_volume()");//.addEventListener("mousemove", set_volume);
  shufflebtn.attr("onclick", "act_shuffle()");//.addEventListener("click",act_shuffle);

  speedlist.attr("change", "set_speed()");//.addEventListener("change", set_speed);
  selectlist.attr("change", "change_selectlist()");//.addEventListener("change", change_selectlist);

  playslider.attr("mousedown", "function(event){seeking=true; seek_pos(event);}");//.addEventListener("mousedown", function(event){seeking=true; seek_pos(event);});
  playslider.attr("mousemove", "function(event){seek_pos(event)}");//.addEventListener("mousemove", function(event){seek_pos(event)});
  playslider.attr("mouseup", "function(event){seeking=false;}");//.addEventListener("mouseup", function(event){seeking=false;});

  _audio.addEventListener("timeupdate", function(){update_playTimePos();});
  _audio.addEventListener("ended", function(){change_playlist();});
*/
}

//========================stop btn
function act_stop(){

  top_sig = "act_stop";
  console.log("top: ",top_id,top_sig);
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');

}
//========================pause btn
function act_pause(){

  top_sig = "act_pause";
  console.log("top: ",top_id,top_sig);
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');

}
//========================prebtn
function act_pre(){
  top_sig = "act_pre";
  //console.log('playlist:',playlist, play_index);
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}

//========================nextbtn
function act_next(){
  top_sig = "act_next";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');

}
//========================volume
function act_mute(){
  top_sig = "act_mute";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}
function set_volume(){
  top_sig = "set_volume"
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}

//========================speed
function set_speed(){
  top_sig = "set_speed";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}

//========================slider pos
function seek_pos(event){
  if (seeking){
    top_sig = "seek_pos";
    window.parent.postMessage([top_id,top_sig,event.clientX], 'http://localhost:3000/iframe.html');
  }
}
//========================play time
function update_playTimePos(){
  top_sig = "update_playTimePos";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}
//========================play next song & change play title
function change_playlist(){
  top_sig = "change_playlist";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}

//========================play selectlist & act btn & change playtitle
function change_selectlist(event){
  let thislist = $("#select_playlist");
  let select_index = $("#select_playlist option:selected").attr('value');
  let select_src = $("#select_playlist option:selected").attr('id');

  top_sig = "change_selectlist";
  //console.log(event,select_index,select_src);
  window.parent.postMessage([top_id,top_sig,[select_index,select_src]], 'http://localhost:3000/iframe.html');
}
//========================act shuffle //error
function act_shuffle() {
  top_sig = "act_shuffle";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}

//========================manage_mylist
function open_popup(){
  top_sig = "open_popup";
  window.parent.postMessage([top_id,top_sig], 'http://localhost:3000/iframe.html');
}
