 function login(){
    user_name = document.getElementById("User").value ; 
    localStorage.setItem("kwittername",user_name);
    window.location = "kwitter_room.html";
 }