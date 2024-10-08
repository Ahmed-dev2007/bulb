function light(show){
    var pic;
    if(show == 0){
      pic = "bulb_off.jpg";
    }else{
      pic = "bulb_on.jpg"
    }   
    document.getElementById("blub-off").src = pic;   
}