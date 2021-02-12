var qs = require('querystring');

var s_db = require('./s_db');


//================process i_popupMylist data====================================
//================insert mylist table==============
exports.insert_mylistData = function(data){
  s_db.query(`
    INSERT INTO mylist (title, created)
    VALUES(?, NOW());
    `,
    [data],
    function(error,result){
      if(error){
        throw error
      }

  });

}
//================update mylist && mylist_songs table==============
exports.update_mylistData = function(beforeData, afterData){
  s_db.query(`
    UPDATE mylist SET title=? WHERE title=?
    `,
    [afterData, beforeData],
    function(error, result){
      if(error){
        throw error
      }
      s_db.query(`
        UPDATE mylist_songs SET mylist_title=? WHERE mylist_title=?
        `,
        [afterData, beforeData],
        function(error,result){
          if(error){
            throw error
          }
      });
  });

}
//===============delete mylist table==============
exports.delete_mylistData = function(data){
  for(var i = 0; i < data.length; i++){
  //  console.log(data[i]);
    s_db.query(`
      DELETE FROM mylist WHERE title=?
      `,
      [data[i]],
      function(error, result){
        if(error){
          throw error
        }
    });
  }
}

//===============delete mylist_songs table==============
exports.delete_mylistsongsData = function(data){
  for(var i = 0; i < data[1].length; i++){
    console.log("process____:",data[0],"\n",data[1][i]);
    s_db.query(`
      DELETE FROM mylist_songs WHERE mylist_title=? and song=?
      `,
      [data[0],data[1][i]],
      function(error, result){
        if(error){
          throw error
        }
    });
  }
}

//===============insert mylist_songs table==============
exports.insert_mylistsongsData = function(data){

  for(var i = 0; i < data[0].length; i++){
    for(var j = 0; j < data[1][i].length; j++){
      //console.log(data[0][i], data[1][i][j]);
      s_db.query(`
        INSERT INTO mylist_songs (mylist_title, song, created)
        VALUES(?, ?, NOW());
        `,
        [data[0][i], data[1][i][j]],
        function(error,result){
          if(error){
            throw error
          }
      });
    }
  }

}

//module.exports = s_db_process;
