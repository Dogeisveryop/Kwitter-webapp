
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDrXk2RFHmeAuUtfnlZhh_yLf5c9uAmDwM",
      authDomain: "kwitter-736f8.firebaseapp.com",
      databaseURL: "https://kwitter-736f8-default-rtdb.firebaseio.com",
      projectId: "kwitter-736f8",
      storageBucket: "kwitter-736f8.appspot.com",
      messagingSenderId: "1093087336036",
      appId: "1:1093087336036:web:69f8af66216f618e67f171"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("kwittername");
document.getElementById("user").innerHTML = "Welcome " + user_name + " !!!";

function addroom() {
      room_name = document.getElementById("room_name").value ; 
      firebase.database().ref("/").child(room_name).update({
            room : "Adding Room Name"
      });

      localStorage.setItem("Room_name", room_name) ;

      window.location = "Kwitter_page.html" ;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names = " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'># "+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location = "Kwitter_page.html" ;    
}

function logout() {
      localStorage.removeItem("kwittername");
      localStorage.removeItem("Room_name");
      window.location= "index.html";
}
