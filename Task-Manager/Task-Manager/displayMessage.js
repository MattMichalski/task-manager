function displayMessage(){
    let contents = document.getElementById("subRoot2");
    let x = document.createElement("h3");
    x.id = "displayMessage";
    let message = document.createTextNode("You have no tasks at this time");
    if (obj.length == 0){
        if (document.querySelectorAll("#displayMessage").length > 0){
            return
        }
        x.appendChild(message);
        contents.appendChild(x);
        return
    }
    else if(obj.length != 0){
        let y = document.getElementById("displayMessage");
        
        if (y == null){
            return
        }else{
        y.remove();
        }
    }

}
