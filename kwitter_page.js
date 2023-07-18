//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("Room_name");

    function sendmsg(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            likes : 0 ,
            message : msg ,
            name : user_name 
      });
      document.getElementById("msg").value = "" ;
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id) ;
         console.log(message_data) ;
         name = message_data["name"];
         like = message_data["likes"];
         message = message_data["message"];
         namewithtick = "<h3>"+name + "<img class='user_tick' src='tick.png'></h3>";
         chatmsg = "<h4 class='message_h4'> "+ message + "</h4>";
         likebutton = "<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
         spanlike = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button> <hr>";
         row = namewithtick+chatmsg+likebutton+spanlike ;
         document.getElementById("output").innerHTML += row ;
         //End code
      } });  }); }
getData();
function updatelike(message_id) {
      console.log("clicked on like button " + message_id);
      button_id = message_id;
      buttonlikes = document.getElementById(button_id).value;
      clickedlike = Number(buttonlikes) + 1 ;
      console.log(clickedlike);

      firebase.database().ref(room_name).child(message_id).update({
            likes : clickedlike
      });

}
 
function Logout() {
   localStorage.removeItem("kwittername");
   localStorage.removeItem("Room_name");
   window.location = "index.html" ; 
}