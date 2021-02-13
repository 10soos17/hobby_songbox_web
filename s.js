var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');

var s_db = require('./js/lib/s_db');
var db_load = require('./js/lib/s_db_load.js');
var db_process = require('./js/lib/s_db_process.js');
var s_iframe = require('./js/iframe.js');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    var TOP_HTML = db_load.get_tophtml();
    //setInterval(db_load.get_tophtml, 5000);

    var clearhtml = db_load.get_data;
    path = decodeURIComponent(path);
    //console.log(url.parse(_url, true),'queryData:',queryData,'pathname:',pathname); //url info
    //console.log("path:",path);

    if(_url === '/'){
      _url = '/iframe.html';

    }
    if(request.url === '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    if(pathname === '/top.html'){
      response.write(TOP_HTML);
    }
    if(request.method === "POST"){
      console.log("POST_event___________",);

      request.on('data', function(data){

        var data = JSON.parse(data);

      //  console.log("data:", data, data.length, "\n");
      //  console.log(data.id, data.sig, data.contents);

        //================i_popupMylist==============
        if(data.id === "i_popupMylist" && data.sig === "create_mylist"){
          console.log("i_popupMylist_____create_mylist");
          db_process.insert_mylistData(data.contents);
        }
        else if(data.id === "i_popupMylist" && data.sig === "edit_mylist"){
          console.log("i_popupMylist_____edit_mylist\n");
        //  console.log(data.contents[0],data.contents[1]);
          db_process.update_mylistData(data.contents[0],data.contents[1]);
        }
        else if(data.id === "i_popupMylist" && data.sig === "delete_mylist"){
          console.log("i_popupMylist_____delete_mylist");
        //  console.log("\n",data.contents);
          db_process.delete_mylistData(data.contents);
        }
        else if(data.id === "i_popupMylist" && data.sig === "goto_deleteBtn"){
          console.log("i_popupMylist_____goto_deleteBtn");
        //  console.log("\n",data.contents,data.contents[0],data.contents[1],data.contents[1][0],data.contents[1][1]);
          db_process.delete_mylistsongsData(data.contents);
        }
        else if(data.id === "i_popupMylist" && data.sig === "add_songToMylist"){
          console.log("i_popupMylist_____add_songToMylist");
        //  console.log("\n",data);
        //  console.log("\n",data.contents);
          db_process.insert_mylistsongsData(data.contents);
        }
      });
    }
//  response.writeHead(200);
  response.end(fs.readFileSync(decodeURIComponent(__dirname + _url)));

});

app.listen(3000);
