var fs = require('fs');
var qs = require('querystring');

var s_db = require('./s_db');

//==============================================================================
//================get data from mysql===========================================
//let s_id = 'i_s';
//let s_sig;

var songDir = './song';
var songlist = fs.readdir(songDir, function(err, files){console.log(files);})

var songData = [];
var song_list = ''

var mylist_list = '';

//================from songs table==============
exports.get_songData = function(){
  s_db.query('SELECT song,singer,filetype FROM song', function(error, songs){
  //  console.log(songs)
    song_list = '';
    for(var i =0; i < songs.length; i++){
      songData[i]=`${songs[i].song}_${songs[i].singer}.${songs[i].filetype}`;
      song_list += `<option id="${songData[i]}"></option>`;
    //  console.log("songData[i]_________:",songData[i]);
    }
  //  console.log("song_list:________",song_list);
  });
  return song_list;
}

//================from mylist table==============
exports.get_mylistData = function(){
  s_db.query('SELECT title, song FROM mylist LEFT JOIN mylist_songs ON mylist.title = mylist_songs.mylist_title;', function(error, mylist){
  //  console.log(songs)

    mylist_list = '';
    for(var i =0; i < mylist.length; i++){
      mylist_list += `<option id="${mylist[i].title}:${mylist[i].song}">${mylist[i].title}:${mylist[i].song}</option>`;
    }
    //console.log("mylist_list:________",mylist_list);
  });
  return mylist_list;
}
