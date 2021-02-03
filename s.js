var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');

var s_db = require('./js/lib/s_db');
/*
let EventEmitter = require('events');
 // 이벤트 객체 생성
let myEvent = new EventEmitter();
// event1 등록
myEvent.addListener('event1', () => {
  console.log('event 1');
});
// event2 등록
myEvent.on('event2', () => {
  console.log('event 2')
});
// event 호출
myEvent.emit('event1');
myEvent.emit('event2');
});

let s_id = 'i_s';
let s_sig;
*/
var songDir = './song';
let songlist = fs.readdir(songDir, function(err, files){console.log(files);})

let songData = [];
var list = ''

function get_songData(){
  s_db.query('SELECT song,singer,filetype FROM song', function(error, songs){
  //  console.log(songs)
    list = ''
    for(var i =0; i < songs.length; i++){
      songData[i]=`${songs[i].song}_${songs[i].singer}.${songs[i].filetype}`;
      list += `<option id="${songData[i]}"></option>`;
      console.log("songData[i]_________:",songData[i])
    }
    console.log("list:________-",list)
  });
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var list = get_songData();
    console.log(url.parse(_url, true),'queryData:',queryData,'pathname:',pathname); //url info

    path = decodeURIComponent(path);
    console.log("path:",path);

    if(_url === '/'){
      _url = '/iframe.html';
      //s_song.home(request,response);
      //songs = s_song.home();
      //window.parent.postMessage([song_id, song_sig, songData], 'http://localhost:3000/iframe.html');
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);

      response.end();
      return;
    }if(pathname === '/top.html'){
      response.write(`
        <html>
            <style>
              .song_db{
                font-size: 0px;
                text-align: left;

                width: 0px;

                white-space:nowrap;
                overflow:hidden;
                text-overflow: ellipsis;

                padding:0px;
                margin-top:0px;
                margin-left:0px;
                border:0px;

                background-color: rgb(0,0,0,0);
                color:rgb(0,0,0,0);

              }
            </style>
            <select class="song_db">
              ${list}
            </select>
        </html>
        `);
      }
//  response.writeHead(200);
  response.end(fs.readFileSync(decodeURIComponent(__dirname + _url)));

});

app.listen(3000);
