$(document).ready(function () {
  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyDSeIojp74bFSagbOuKfWfbvDU2VXeuxqM",
    authDomain: "final-project-c2ad5.firebaseapp.com",
    databaseURL: "https://final-project-c2ad5.firebaseio.com",
    projectId: "final-project-c2ad5",
    storageBucket: "final-project-c2ad5.appspot.com",
    messagingSenderId: "1071572160789",
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  var btnInquire = document.getElementById('btnInquire');
  btnInquire.onclick = function () {
    var InquireNumber = document.getElementById('InquireNumber').value;
    var $number = $('#number');
    var $date = $('#datepicker');
    var $hour = $('#hours');
    var $minute = $('#minutes');
    var $person = $('#persons');

    firebase.database().ref("order").on("value", function (data) {
      data.forEach(function (item) {
        var count = 0;
        if (InquireNumber == item.val().number) {
          console.log(item.val().number);
          $number.html(item.val().number);
          $date.html(item.val().date);
          $hour.html(item.val().hour);
          $minute.html(item.val().minute);
          $person.html(item.val().person);
          return true;
        }
        else {
          $number.html("查詢錯誤");
          $date.html("查詢錯誤");
          $person.html("查詢錯誤");
          $hour.html("XX");
          $minute.html("XX");
        }
      })
    })

  }




  //   firebase.database().ref("order/" + InquireNumber+'/number').once("value",function(data){
  //     console.log(InquireNumber);
  //     number=data.val();
  //     console.log(number);

  //   })
  //    if(InquireNumber == number){
  //      firebase.database().ref("order/" + '/'+String(Number)).once("value",function(data){
  //     $number.html(data.val());
  //     console.log(data.val());
  // })

  // firebase.database().ref("order/" + InquireNumber+'/date').once("value",function(data){
  //   $date.html(data.val());
  //   console.log(data.val());
  // })
  // firebase.database().ref("order/" + InquireNumber+'/hour').once("value",function(data){
  //   $hour.html(data.val());
  //   console.log(data.val());

  // })
  // firebase.database().ref("order/" + InquireNumber+'/minute').once("value",function(data){
  //   $minute.html(data.val());
  //   console.log(data.val());

  // })
  // firebase.database().ref("order/" + InquireNumber+'/person').once("value",function(data){
  //   $person.html(data.val());
  //   console.log(data.val());
  // })
  //  } else{
  //   $number.html("查詢錯誤");
  //   $date.html("查詢錯誤");
  //   $person.html("查詢錯誤");

  //  }}

});