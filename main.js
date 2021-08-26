function addUser(){
    username=document.getElementById("user_name").Value;
    localStorage.setItem("user_name", username);
    window.location="letschatwebapp_room.html";
}