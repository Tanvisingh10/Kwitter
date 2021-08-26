var firebaseConfig = {
      apiKey: "AIzaSyBRY8vJxLW9WRPJE2Vn4_0Ayn40rClWFZM",
      authDomain: "kwitter-34403.firebaseapp.com",
      databaseURL: "https://kwitter-34403-default-rtdb.firebaseio.com",
      projectId: "kwitter-34403",
      storageBucket: "kwitter-34403.appspot.com",
      messagingSenderId: "981046143785",
      appId: "1:981046143785:web:e3e9c2001a761fd783a538",
      measurementId: "G-FSN9GQNX24"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}  
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location = "index.html";
}