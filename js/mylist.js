/*
//========================[about mylist]========================================
//==============================================================================

let myname_id = "i_secondMylist";
let myname_sig;

let mynameDic = {};
let mynameList = [];

//========================myname data form(myname,songs,singerbtn_id,checkbox_id,editbtn_id)
function mynameID(song,titlebtn,checkbox) {
  this.song = song;
  this.titlebtn = titlebtn;
  this.checkbox = checkbox;
}

//==============================================================================
//==============================================================================
//========================2.draw mylist(mylist.html)============================
//========================mysql 연결 후 수정하기
function show_mylist(){
  //btn color 때문에 설정
  let btncolor;
  btncolor = window.top.$('#top').contents().find("#playtitle").css('color');
  //or var bColor =  $("#namePopupHolder").css('border-color');

  var mynamelistId = window.top.$('#center').contents().find("#myname_list");
  var songs;

  mylistDic={};
  mynamelistId.empty();

  for(key in mylistSongDic){

    myname = key;
    songs = mylistSongDic[key];

    titlebtn=`<input type="button" class = "mylist_list" id="${key}+titlebtn" value="${key}"
                onclick="show_myname(this);" style="color:${btncolor}"></input>`;

    checkbox = `<input type="checkbox" class = "mylist_checkbox" id="${key}+checkbox"
                onclick="get_checkedMylistBtn();"></input></br>`;

    mynamelistId.append(titlebtn);
    titlebtnId = mynamelistId.children("input:last").attr("id");

    mynamelistId.append(checkbox);
    checkboxId = mynamelistId.children("input:last").attr("id");

    var Mylist = new mylistID(myname,songs,titlebtnId,checkboxId);
    mylistDic[myname] = Mylist;
  }
}

//==============================================================================
//==========================draw mylist(mylist.html) functions==================
//========================reload(color)
function reload_mynameCanvas(reload_textcolor,reload_editBtncolor,reload_editbtnTextcolor){
  $("#mylistTitle").css('color',reload_editBtncolor);

  $("#selectMylistBtn").css('color',reload_editBtncolor);

  $("#deleteMylistBtn").css('color',reload_editBtncolor);

  $(".mylist_list").css('color',reload_textcolor);

  $(".mylist_edit").css('color',reload_editbtnTextcolor);
  $(".mylist_edit").css('background-color',reload_editBtncolor);

  $(".mylist_checkbox").css('background-color',reload_editbtnTextcolor);
}

//========================show mysongs(mylist 클릭 -> draw songslist)============
function show_myname(btn){
  thisname = btn.value;
  mynameList = mylistSongDic[thisname];

  console.log("thisname:",thisname,"mynameList:",mynameList);

  var mynamelistId = window.top.$('#center').contents().find("#myname_list");
  var song;

  mynamelistId.empty();
  mynameDic = {};

  for(var i = 0; i < mynameList.length; i++){

    song = mynameList[i];

    //style="color:${btncolor}"
    titlebtn=`<input type="button" value="${song}" class="mylist_list" id="${song}+titlebtn"></input>`;
    checkbox = `<input type="checkbox" class="mylist_checkbox" id="${song}+checkbox" onclick="" ></input></br>`;

    mynamelistId.append(titlebtn);
    titlebtnId = mynamelistId.children("input:last").attr("id");

    mynamelistId.append(checkbox);
    checkboxId = mynamelistId.children("input:last").attr("id");

    console.log("titlebtnId:",titlebtnId,"checkboxId",checkboxId);

    var Myname = new mynameID(song,titlebtnId,checkboxId);
    mynameDic[song] = Myname;

  }
  for(key in mynameDic){
    console.log("mynameDic:",key,mynameDic[key]);
  }
  //return mynameDic;
}
*/
