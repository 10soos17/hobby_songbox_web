//========================[about mylist]========================================
//==============================================================================
//========================draw mylist(mylist.html)============================
function show_mylist(){

  mylistSongDic = get_mylist();
  console.log("show_mylist_________:",mylistSongDic);
  //btn color 때문에 설정
  var bColor =  $("#namePopupHolder").css('border-color');

  var mynameList = window.top.$('#center').contents().find("#myname_list");
  var songs;

  mylistDic={};
  mynameList.empty();

  for(key in mylistSongDic){

    myname = key;
    songs = mylistSongDic[key];

    console.log("show_mylist_______myname:",myname,"songs:",songs);

    titlebtn=`<input type="button" class = "mylist_list" id="${key}+titlebtn" value="${key}"
                onclick="show_myname(this);" style="color:${bColor}"></input>`;

    checkbox = `<input type="checkbox" class = "mylist_checkbox" id="${key}+checkbox"
                onclick="get_checkedMylistBtn();"></input></br>`;

    mynameList.append(titlebtn);
    titlebtnId = mynameList.children("input:last").attr("id");

    mynameList.append(checkbox);
    checkboxId = mynameList.children("input:last").attr("id");

    var Mylist = new mylistID(myname,songs,titlebtnId,checkboxId);
    mylistDic[myname] = Mylist;

    console.log("show_mylist__________mylistDic:",mylistDic);
  }

}

//==============================================================================
//==========================draw mylist(mylist.html) functions==================
//========================reload(color)
function reload_mynameCanvas(tColor,bColor,wColor){
  $("#mylistTitle").css('color',bColor);

  $(".mylist_list").css('color',tColor);

  $(".mylist_checkbox").css('background-color',wColor);

  $(".create-content").css('border-color',bColor);
  $(".create-content").css('background-color',wColor);

  $("#nameLabel").css('color',bColor);

  $("#nameHolder").css('color',tColor);
  $("#nameHolder").css('border-color',bColor);
  $("#nameHolder").css('background-color',wColor);

  $("#makeBtn").css('color',bColor);
  $("#makeBtn").css('border-color',bColor);
  $("#makeBtn").css('background-color',wColor);

  $("#editBtn").css('color',bColor);
  $("#editBtn").css('border-color',bColor);
  $("#editBtn").css('background-color',wColor);

  $("#deleteBtn").css('color',bColor);
  $("#deleteBtn").css('border-color',bColor);
  $("#deleteBtn").css('background-color',wColor);

  $("#playBtn").css('color',bColor);
  $("#playBtn").css('border-color',bColor);
  $("#playBtn").css('background-color',wColor);

  $("#mylist_pageBtn").css('color',bColor);
  $("#mylist_pageBtn").css('border-color',bColor);
  $("#mylist_pageBtn").css('background-color',wColor);
}

//========================show mysongs(mylist 클릭 -> draw songslist)============
function show_myname(btn){

  thisname = btn.value;

  console.log("thisname:",thisname,"mynameList:",mynameList);

  document.querySelector('#mylistTitle').value = thisname;
  document.querySelector('#makeBtn').style.display = 'none'; //change setting pageBtn
  document.querySelector('#editBtn').style.display = 'none';
  document.querySelector('#deleteBtn').style.display = 'flex';
  document.querySelector('#mylist_pageBtn').style.display = 'flex';

  var mynamelistId = window.top.$('#center').contents().find("#myname_list");
  var song;

  mylistSongDic = get_mylist(); //iframe.html function
  mynameDic = {};
  mynameList = mylistSongDic[thisname];
  mynamelistId.empty();

  if(mynameList[0] !== "null" || mynameList.length !== 1){
    for(var i = 0; i < mynameList.length; i++){

      song = mynameList[i];

      titlebtn=`<input type="button" value="${song}" class="mylist_list" id="${song}+titlebtn" onclick="play_mylistsongBtn(this);"></input>`;
      checkbox = `<input type="checkbox" class="mylist_checkbox" id="${song}+checkbox" onclick="goto_checkedBtn();" ></input></br>`;

      mynamelistId.append(titlebtn);
      titlebtnId = mynamelistId.children("input:last").attr("id");

      mynamelistId.append(checkbox);
      checkboxId = mynamelistId.children("input:last").attr("id");

    //  console.log("titlebtnId:",titlebtnId,"checkboxId",checkboxId);

      var Myname = new mynameID(song,titlebtnId,checkboxId);
      mynameDic[song] = Myname;

    }
  }
//  for(key in mynameDic){
//    console.log("mynameDic:",key,mynameDic[key]);
//  }
  //return mynameDic;
}

//==========================create mylist name
function create_mylistpage(){

  var tColor  = $("#nameHolder").css('color');
  var bColor =  $("#nameHolder").css('border-color');
  var wColor =   $(".create-content").css('background-color');

  if(document.querySelector('#makeBtn').value === 'new'){

    document.querySelector('.create-content').style.display = 'flex';

    document.querySelector('#nameLabel').innerHTML = "Name";

    document.querySelector('#makeBtn').style.color = wColor;
    document.querySelector('#makeBtn').style.borderColor = tColor;
    document.querySelector('#makeBtn').style.backgroundColor = bColor;
    document.querySelector('#makeBtn').value = '✔︎';

    document.querySelector('#editBtn').style.color = bColor;
    document.querySelector('#editBtn').style.borderColor = bColor;
    document.querySelector('#editBtn').style.backgroundColor = wColor;
    document.querySelector('#editBtn').value = 'edit';

  }
  else if(document.querySelector('#makeBtn').value === '✔︎'){
    var createName = document.querySelector('#nameHolder').value;
    console.log("createName:",createName);
    if(createName === ""){

      document.querySelector('.create-content').style.display = 'none';
      alert("Write listname!!!");
    }else{
      mylistSongDic[createName] = [];

      mylist_list = window.top.$('#top').contents().find(".mylist_db");
      mylist_list.append(`<option id="${createName}:">${createName}:</option>`);
      console.log("mylist_list: ",mylist_list);

      show_mylist();
      document.querySelector('#nameHolder').value = "";
      document.querySelector('.create-content').style.display = 'none';

      //request to server(=== popup id, sig)
      var httpRequest = new XMLHttpRequest();

      var data = JSON.stringify({
            id: "i_popupMylist",
            sig: "create_mylist",
            contents: createName
            })

      httpRequest.open('POST', 'http://localhost:3000');
      httpRequest.send(data);

    }
    document.querySelector('#makeBtn').style.color = bColor;
    document.querySelector('#makeBtn').style.borderColor = bColor;
    document.querySelector('#makeBtn').style.backgroundColor = wColor;
    document.querySelector('#makeBtn').value = 'new';
  }
}

//==========================edit mylist name
function edit_mylistpage(){
  var tColor  = $("#nameHolder").css('color');
  var bColor =  $("#nameHolder").css('border-color');
  var wColor =   $(".create-content").css('background-color');

  var checkedMylist = get_checkedMylistBtn();//---> iframe.js function

  if(document.querySelector('#editBtn').value === 'edit'){


    document.querySelector('.create-content').style.display = 'flex';
    document.querySelector('#nameHolder').value = "";
    document.querySelector('#nameLabel').innerHTML = "Rename";

    document.querySelector('#editBtn').style.color = wColor;
    document.querySelector('#editBtn').style.borderColor = tColor;
    document.querySelector('#editBtn').style.backgroundColor = bColor;
    document.querySelector('#editBtn').value = '✔︎';

    document.querySelector('#makeBtn').style.color = bColor;
    document.querySelector('#makeBtn').style.borderColor = bColor;
    document.querySelector('#makeBtn').style.backgroundColor = wColor;
    document.querySelector('#makeBtn').value = 'new';
  }
  else if(document.querySelector('#editBtn').value === '✔︎'){
    if(checkedMylist.length !== 1){
      document.querySelector('.create-content').style.display = 'none';
      alert("Select one!!!");

    }else{
      var afterName = document.querySelector('#nameHolder').value;
      var beforeName = checkedMylist[0];

      console.log("afterName:",afterName,"beforeName:",beforeName);

      mylistSongDic = {};
      var mylist_db = window.top.$('#top').contents().find(".mylist_db").children();
      //console.log("song_db:",song_db);
      for(var i=0; i < mylist_db.length; i++){
        temp_db = mylist_db[i].id.split(":");
        thisMylist = temp_db[0];
        thisMylistSong = temp_db[1];
        console.log("temp_db:",temp_db);

        if(temp_db[0] === beforeName){
          mylist_db[i].id = `${afterName}:${temp_db[1]}`;
        }
      }

      show_mylist();

      document.querySelector('#nameHolder').value = "";//`'${beforeName}' was edited!`;
      document.querySelector('.create-content').style.display = 'none';

      //request to server(=== popup id, sig)
      var httpRequest = new XMLHttpRequest();

      var data = JSON.stringify({
            id: "i_popupMylist",
            sig: "edit_mylist",
            contents: [beforeName, afterName]
            })

      httpRequest.open('POST', 'http://localhost:3000');
      httpRequest.send(data);

    }
    document.querySelector('#editBtn').style.color = bColor;
    document.querySelector('#editBtn').style.borderColor = bColor;
    document.querySelector('#editBtn').style.backgroundColor = wColor;
    document.querySelector('#editBtn').value = 'edit';
  }
}

//==========================delete mylist
function delete_mylistpage(){

  if($('#mylist_pageBtn').css('display') === 'none'){
    var checkedMylist = get_checkedMylistBtn();//---> iframe.js function
    console.log("mylist_pageBtn_____none____:get_checkedMylistBtn();",checkedMylist);
    if(checkedMylist.length === 0){
      alert("Select list!!!");
    }
    else{
      for(var i = 0; i < checkedMylist.length; i++){
        //delete mylistSongDic[checkedMylist[i]];
        var mylist_db = window.top.$('#top').contents().find(".mylist_db").children();

        for(var j = 0; j < mylist_db.length; j++){
          temp_db = mylist_db[j].id.split(":");
          thisMylist = temp_db[0];
          thisMylistSong = temp_db[1];

          if(temp_db[0] === checkedMylist[i]){
            console.log("temp_db_____delete:",temp_db[0]);
            mylist_db[j].remove();
          }
        }
      }
    }
    //console.log("delete_mylistSongDic:",mylistSongDic);
    show_mylist();

    //request to server(=== popup id, sig)
    var httpRequest = new XMLHttpRequest();

    var data = JSON.stringify({
          id: "i_popupMylist",
          sig: "delete_mylist",
          contents: checkedMylist
          })

    httpRequest.open('POST', 'http://localhost:3000');
    httpRequest.send(data);
  }else{
    var checkedMylist = goto_checkedBtn();//---> iframe.js function
    console.log("mylist_pageBtn_____flex____:goto_checkedBtn();",checkedMylist);

    var titleBtn = document.querySelector('#mylistTitle');
    var beforeMylist = mylistSongDic[titleBtn.value];
    var afterMylist = [];
    console.log("beforeMylist:",beforeMylist);

    if(checkedMylist.length === 0){
      alert("Select list!!!");
    }
    else{

      for(var i = 0; i < checkedMylist.length; i++){
        var mylist_db = window.top.$('#top').contents().find(".mylist_db").children();
        for(var j = 0; j < mylist_db.length; j++){
          temp_db = mylist_db[j].id.split(":");

          if(temp_db[0] === titleBtn.value && temp_db[1] === checkedMylist[i]){
            console.log("goto_temp_db_____delete:",temp_db[0],temp_db[1]);
            mylist_db[j].remove();
          }
        }
      }
    }

    show_myname(titleBtn);

    //request to server
    var httpRequest = new XMLHttpRequest();

    var data = JSON.stringify({
          id: "i_popupMylist",
          sig: "goto_deleteBtn",
          contents: [titleBtn.value, checkedMylist]
        });

    httpRequest.open('POST', 'http://localhost:3000');
    httpRequest.send(data);
  }

}
//========================playbtn(songBtn click->play)
function play_mylistsongBtn(btn){
  var song = [];
  song.push(mynameDic[btn.value].song);

  popupMylist_sig = "goto_playBtn"

  window.parent.postMessage([popupMylist_id,popupMylist_sig,song], 'http://localhost:3000/iframe.html');
  console.log('checkedMylist:',checkedMylist);
}

//========================play mylistbtn(mylistBtn click -> play)
function play_mylistpage(){

  if($('#mylist_pageBtn').css('display') === 'none'){
    var checkedMylist = get_checkedMylistBtn();
    var songs = {};
    var songslist = [];
    if (checkedMylist.length === 0){
      alert("Select list!!!");
      return 0;
    }else{
      for(var i = 0; i < checkedMylist.length; i++){
        for(var j = 0; j < mylistDic[checkedMylist[i]].mysongs.length; j++){
          songs[mylistDic[checkedMylist[i]].mysongs[j]] = j;
        }
      }
      for(key in songs){
        songslist.push(key);
      }
      //popup sig
      popupMylist_sig = "play_mylistBtn"
      window.parent.postMessage([popupMylist_id,popupMylist_sig,songslist], 'http://localhost:3000/iframe.html');
      console.log('songs:',songs,"songslist",songslist);
    }
  }
  else{
    var checkedMylist = goto_checkedBtn();

    if (checkedMylist.length === 0){
      alert("Select song!!!");
      return 0;
    }
    else{
      //popup sig
      popupMylist_sig = "goto_playCheckedsong"
      window.parent.postMessage([popupMylist_id,popupMylist_sig,checkedMylist], 'http://localhost:3000/iframe.html');
      console.log('checkedMylist:',checkedMylist);
    }
  }

}

//========================go mylistpage
function go_mylistpage(){
  history.go(0);
  //history.back();
  //location.reload();
}
