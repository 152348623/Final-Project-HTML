// var number = document.getElementById("number");
// var date = document.getElementById("date");
// var time = document.getElementById("time");
// var persons = document.getElementById("persons");
// var btnSubmit = document.getElementById("btnSubmit");

//function submitClick() {
//window.alert("TEST");
//  var dbRef = firebase.database().ref().child("users");
//   dbRef.child(number.value);
//}

//     // const $number = $('#number');
//     // const $date = $('#date');
//     // const $time = $('#time');
//     // const $persons = $('#persons');
//     // const $btnSubmit = $('#btnSubmit');

//     // // SignUp
//     // $btnSubmit.click(function (e) {
//     //     const number = $number.val();
//     //     const date = $date.val();
//     //     const time = $time.val();
//     //     const persons = $persons.val();
//     //   //const auth = firebase.auth();
//     // //   // signUp
//     // //   auth.createUserWithEmailAndPassword(email, pass)
//     //   .catch(function(e){
//     //     console.log(e.message);
//     //     $signInfo.html(e.message);
//     //   });
//     });

//     // // Listening Login User
//     // firebase.auth().onAuthStateChanged(function(user){
//     //   if(user) {
//     //     console.log(user);
//     //     $signInfo.html(user.email+" is login...");
//     //     user.providerData.forEach(function (profile) {
//     //       console.log("Sign-in provider: "+profile.providerId);
//     //       console.log("  Provider-specific UID: "+profile.uid);
//     //       console.log("  Name: "+profile.displayName);
//     //       console.log("  Email: "+profile.email);
//     //       console.log("  Photo URL: "+profile.photoURL);
//     //     });
//     //   } else {
//     //     console.log("not logged in");
//     //   }
//     // });
//   });
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

    var btnSubmit = document.getElementById('btnSubmit');
    //var btn1 = document.getElementById('btnGet');
    var num;
    btnSubmit.onclick = function () {
        
        var number = document.getElementById('number').value;
        var date = document.getElementById('datepicker').value;
        var hour = document.getElementById('hours').value;
        var minute = document.getElementById('minutes').value;
        var person = document.getElementById('persons').value;

        num=number;
        firebase.database().ref('order/').push({
            number: number,
            date: date,
            hour: hour,
            minute: minute,
            person: person
        });
        window.location.href = 'checkOrder.html';

       
    }
   
    // btn1.onclick = function() {
    //   var number = document.getElementById('numberGet').value;
    //   var $title = $('#title');
    //   firebase.database().ref("order/" + number +'/time').on("value",function(data){
    //     $title.html(data.val());
    //     console.log(data.val());

    //    })

    // }

});