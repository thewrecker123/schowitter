
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    document.getElementById("welcome_user").innerHTML="Welcome "+user_name+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='functioname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function add_Room(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function functioname(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}