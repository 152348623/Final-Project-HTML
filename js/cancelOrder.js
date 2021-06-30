$(document).ready(function () {
  // Initialize Firebase
	// test
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
  var btnCancel = document.getElementById('btnCancel');             // 取得取消訂位資料
  var canacelTrue = document.getElementById('btnCancelTrue');       // 取得確認取消資料
  console.log(btnCancel.value);                                   // 顯示 確認取消
  btnCancel.onclick = function () {                                 // 判斷取消定位是否按下
    console.log(' 1 ' + canacelTrue.value);
    var InquireNumber = document.getElementById('InquireNumber').value;
    var $number = $('#number');
    var $date = $('#datepicker');
    var $hour = $('#hours');
    var $minute = $('#minutes');
    var $person = $('#persons');
    firebase.database().ref("order").on("value", function (data) {
      data.forEach(function (item) {
        if (InquireNumber == item.val().number) {
          console.log(item.val().number);
          $number.html(item.val().number);
          $date.html(item.val().date);
          $hour.html(item.val().hour);
          $minute.html(item.val().minute);
          $person.html(item.val().person);
          // var canacelTrue = document.getElementById('btnCancelTrue');
          canacelTrue.value = "確認取消";
          console.log(canacelTrue.value);                                   // 顯示 確認取消
          btnCancel.value = "";
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
  console.log("1 " + canacelTrue.value);                                   // 顯示 確認取消

  canacelTrue.onclick = function () {
    console.log(canacelTrue.value);                                   // 顯示 確認取消
    if (canacelTrue.value == "確認取消") {
      console.log("True");
      var InquireNumber = document.getElementById('InquireNumber').value;
      firebase.database().ref("order").on("value", function (data) {
        data.forEach(function (item) {
          if (InquireNumber == item.val().number) {
            console.log(item.key);
            firebase.database().ref('order/' + item.key).remove();
            window.location.href = 'cancelSuccess.html';
          }
        })
      })
    }
  }
});