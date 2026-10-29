let obj = [];
let boards = new Map();
displayMessage();

function createBoard(){
    let x = document.getElementById("subRoot");
    let disableCreateButton = document.querySelector("button");
    disableCreateButton.disabled = true;
    let container = document.createElement("div");
    container.className = "col-auto mb-5 rounded-4";
    container.style.background = "lightgrey";
    container.style.border = "4px ridge grey";
    container.style.boxShadow = "5px 5px 8px black";

    let form = document.createElement("div");
    form.className = "form-floating p-1";

    let label = document.createElement("label");
    label.setAttribute("for", "boardName");
    label.innerHTML = "Name your board";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Board Name");
    input.className = "form-control my-2";
    input.id = "boardName";

    let create = document.createElement("button");
    create.className = "btn btn-primary m-1";
    create.onclick = function newBoard(){
        let isInput = input.value;
        if (isInput == ""){
            window.alert("Please put in a board name")
        }else{
            for (z = 0; z < obj.length; z++ ) {
                if (isInput == obj[z].name){
                    
                    let mess = document.createElement("h6");
                    mess.style.color = "red";
                    mess.innerHTML = "A board has this name";
                    if (form.childElementCount > 4){
                        form.removeChild(form.children[2]);
                     }
                    form.insertBefore(mess, form.children[2]);
                    input.style.border = "1px solid red";
                    return
                  }
                  continue
                
            }
        let placement = document.getElementById("subRoot2");
            let board = new Board(`${isInput}`);
            obj.push(board);
            board.name = `${isInput}`;

            let newBoard = document.createElement("div");
            newBoard.className = "col-auto m-2 rounded-3";
            newBoard.id = board.name;
            newBoard.style.background = "lightgrey";
            newBoard.style.border = "4px ridge grey";
            newBoard.style.boxShadow = "5px 5px 8px black"; 


            let header = document.createElement("h1");
            header.className = "p-2";
            header.style.textDecoration = "underline";
            header.appendChild(document.createTextNode(`${board.name}`));

            let addButton = document.createElement("button");
            addButton.className = "btn btn-primary m-3";
            addButton.id = "taskButton";
            addButton.setAttribute("type", "button");
            addButton.addEventListener("click", function callAdd(){board.add()});
            addButton.innerHTML = "Add task";

            let addAi = document.createElement("button");
            addAi.className = "btn btn-dark m-3";
            addAi.id = "aiButton";
            addAi.setAttribute("type", "button");
            addAi.addEventListener("click", function callAdd(){board.askAi()});
            addAi.innerHTML = "✨ Ask AI";

            let deleteBoard = document.createElement("button");
            deleteBoard.className = "btn btn-outline-danger m-3";
            deleteBoard.id = "deleteBoardButton";
            deleteBoard.setAttribute("type", "button");
            deleteBoard.addEventListener("click", function deleteThisBoard(){

                board.deleteBoard(); 
            });
            deleteBoard.innerHTML = "Delete board";

            let list = document.createElement("ul");
            list.className = `list-group ${board.name} mb-3`;
            displayMessage();
            newBoard.appendChild(header);
            placement.appendChild(newBoard);
            newBoard.appendChild(addButton);
            newBoard.appendChild(addAi);
            newBoard.appendChild(deleteBoard);
            newBoard.appendChild(list);
            container.remove();
            
        }
        disableCreateButton.disabled = false;

    }
    create.innerHTML = "Create";
 
    let cancel = document.createElement("button");
    cancel.className = "btn btn-dark m-1";
    cancel.onclick = function removeBoard(){
        container.remove();
        disableCreateButton.disabled = false;

    }; 
    cancel.innerHTML = "X";
    
    form.appendChild(input);
    form.appendChild(label);
    form.appendChild(create);
    form.appendChild(cancel);
    container.appendChild(form);
    x.appendChild(container);
   
    
    let col = document.createElement("div");
    col.className = "col-auto";




   
}

function saveDocument(){
    if (saveTheme == "") {
        const settings = {background: document.body.style.background, theme: saveTheme};
        localStorage.setItem("settings", JSON.stringify(settings));
    } else {
        const saveNewTheme = {background: document.body.style.background, theme: saveTheme};
        localStorage.setItem("settings", JSON.stringify(saveNewTheme));
    }

    
    ////////////////////////////////////////////////first to check if there are any objects in the obj array. if none this should be suffiecient
    let name;
    let value;
    if (obj.length == 0){
        localStorage.removeItem("Boards");
        return
    }else if(obj.length > 0){    
        let i;
        for (i = 0; i < obj.length; i++) {
            if (obj[i] == "settings"){
                continue
            }
        
            name = obj[i].name;
            value = obj[i].tasks;
            boards.set(name, value);
            localStorage.setItem("Boards", JSON.stringify(Object.fromEntries(boards)));
        }

    return
    
}

}




