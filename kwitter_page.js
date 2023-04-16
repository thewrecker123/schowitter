//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAfvnZV41hg3uhE5BuMbfFNJVornA8-_wE",
      authDomain: "kwitter-70bc8.firebaseapp.com",
      databaseURL: "https://kwitter-70bc8-default-rtdb.firebaseio.com",
      projectId: "kwitter-70bc8",
      storageBucket: "kwitter-70bc8.appspot.com",
      messagingSenderId: "194104041832",
      appId: "1:194104041832:web:ae31b33be6d7a36d5f36dd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
