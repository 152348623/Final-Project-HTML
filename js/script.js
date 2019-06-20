var number = document.getElementById("number");
var date = document.getElementById("date");
var time = document.getElementById("time");
var persons = document.getElementById("persons");
var btnSubmit = document.getElementById("btnSubmit");

function submitClick() {
    //window.alert("TEST");
    var dbRef = firebase.database().ref().child("users");
    dbRef.child(number.value);
}

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
  