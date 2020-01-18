var txt= document.getElementById('text');
function optionbold(){
    if(txt.style.fontWeight=='bold'){
        txt.style.fontWeight='normal';

    }
    else{
    txt.style.fontWeight='bold';
}
}
function optionstyle(){
    if(txt.style.fontStyle=='italic'){
        txt.style.fontStyle='normal';
    }
    else{
    txt.style.fontStyle='italic';
    }
}
function optiondecoration(){
    if(txt.style.textDecoration=='underline'){
        txt.style.textDecoration='none';
    }
    else{
        txt.style.textDecoration='underline';
    }
}
function optionsize(){
    var sop=document.getElementById('liste').value;
    txt.style.fontSize= sop + 'px';
}
function optionfamily(){
    var sfam=document.getElementById('list').value;
    txt.style.fontFamily= sfam;
}

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCy7eoX51dHGoKOkYoEGPLaSMbtMxRleE4",
    authDomain: "myfirstwebpage-f9f41.firebaseapp.com",
    databaseURL: "https://myfirstwebpage-f9f41.firebaseio.com",
    projectId: "myfirstwebpage-f9f41",
    storageBucket: "myfirstwebpage-f9f41.appspot.com",
    messagingSenderId: "36354233742",
    appId: "1:36354233742:web:b25ae205e2a90bcc85c0df",
    measurementId: "G-TG7TXS93KW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  var messagesRef = firebase.database().ref ('myfirstwebpage');
  function submitForm(){
    //   event.preventDefault();
    console.log("in");

      var track =document.getElementById('track').value;
      var name = document.getElementById('name').value;
      var email= document.getElementById('email').value;
      var number= document.getElementById('number').value;
      saveMessage(track, name, email, number);
  }
  function saveMessage( track, name, email, number){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        track: track, 
        name: name,
        email: email,
        number: number,
      })
  }