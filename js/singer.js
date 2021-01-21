
function _(id){
  return document.getElementById(id);

}

function audioApp(){
  var audio, songDir, audio_ext, audio_index, is_playing, playbtnarray, playingtrack, trackbox, tracks

  audio = new Audio();
  songDir = "./song/";
  audio_ext = ".wav";
  audio_index = 1;
  is_playing = false;
  trackbox = _("trackbox");

  tracks = {
    "track1":["Jerusalema _Master KG", "Jerusalema _Master KG.wav"],
    "track2":["Centro di gravita permanente_Franco Battiato", "Centro di gravita permanente_Franco Battiato.wav"],
    "track3":["kor_ko","kor_ko.wav"],
    "track4":["You Get What You Give (Original)_New Radicals", "You Get What You Give (Original)_New Radicals.mp3"]
  };

  for (var track in tracks){
    var tb, pb, tn;
    tb = document.createElement("div");
    pb = document.createElement('input');
    pb.setAttribute("type", 'button');
    pb.setAttribute("background",'url(./image/nothing.png)');
    tn = document.createElement("div");

    tb.className = "trackbar";
    pb.className = "playbutton";
    tn.className = "trackname";

    tn.innerHTML = audio_index + ". " + tracks[track][0];
    pb.id = tracks[track][1];

  //  pb.id.style.color = white;

    pb.addEventListener("click", switchTrack);

    tb.appendChild(pb);
    tb.appendChild(tn);
    trackbox.appendChild(tb);
    audio_index++;
  }

  audio.addEventListener("ended", function(){
    _(playingtrack).style.background = "url(./image/yes.png)"; //actimage.png
    playingtrack = "";
  });

  function switchTrack(event){
    if(is_playing){
      if(playingtrack != event.target.id){
        is_playing = true;
        _(playingtrack).style.background = "url(./image/nothing.png)";//act_image
        event.target.style.background = "url(./image/yes.png)";//pause_image
        audio.src = songDir + event.target.id;// + audio_ext;
        audio.play();

      }else{
        audio.pause();
        is_playing = false;
        event.target.style.background = "url(./image/nothing.png)";//act_image
      }

    }else{
      is_playing = true;
      event.target.style.background = "url(./image/yes.png)";//pause_image
      if(playingtrack != event.target.id){
        audio.src = songDir + event.target.id;// + audio_ext;
      }
      audio.play();
    }
    playingtrack = event.target.id;

    }

}
