function loadDocument(){
    const settings = JSON.parse(localStorage.getItem("settings"));
    
    if (settings && settings.background){
        document.body.style.background = settings.background;
        } 
    
    if (settings && settings.theme) {

        if (settings.theme == 'startMatrix') {
           startMatrix();
        } else if (settings.theme == 'startBiMatrix'){
            startBiMatrix();
        } else if (settings.theme == 'startOriginalMatrix'){
            startOriginalMatrix();
        } else if (settings.theme == 'applyHalloween'){
            applyHalloween();
        } 
    }
        
        
    let placement = document.getElementById("subRoot2");
    if (localStorage.length <= 1){
       // return
    }
    let i;
    for (i = 0; i < localStorage.length; i++) {
        
        if (localStorage.key(i) === "settings"){
            continue;
        }
        let boards = JSON.parse(localStorage.getItem("Boards"));
    
        for ( const [name, value]  of Object.entries(boards)){
       
        let board = new Board(name);
            board.tasks = value;
            obj.push(board);

        
        let newBoard = document.createElement("div");
            newBoard.className = "col-auto m-2 rounded-3";
            newBoard.id = board.name;
            newBoard.style.background = "lightgrey";
            newBoard.style.border = "4px ridge grey";
            newBoard.style.boxShadow = "5px 5px 8px black"; 


        let header = document.createElement("h2");
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

        let deleteBoardSave = document.createElement("button");
            deleteBoardSave.className = "btn btn-outline-danger m-3";
            deleteBoardSave.id = "deleteBoardButton";
            deleteBoardSave.setAttribute("type", "button");
            deleteBoardSave.addEventListener("click", function deleteThisBoard(){

                board.deleteBoard(); 
            });
            deleteBoardSave.innerHTML = "Delete board";

        let ul = document.createElement("ul");
            ul.className = `list-group ${board.name} mb-3`;
                newBoard.appendChild(header);
                placement.appendChild(newBoard);
                newBoard.appendChild(addButton);
                newBoard.appendChild(addAi);
                newBoard.appendChild(deleteBoardSave);
                newBoard.appendChild(ul);
            
            if (value.length > 0){
                let j;
                for (j = 0; j < value.length; j++) {

                    let li = document.createElement("li");
                    li.style.background = "white";
                    li.className = "p-1 list-group-item my-1 rounded-1";
                    li.innerHTML = value[j];
                    li.id = value[j];

                    let spanCompleted = document.createElement("span");
                    let completedTask = document.createElement("button");
                    completedTask.className = "btn btn-primary ms-5";//mb-3 mx-1
                    completedTask.innerHTML = "&#x2713;";
                    completedTask.onclick = function completeTaskHere(){
                    li.style.background = "green";                
                    li.style.color = "white";
                    li.style.textDecoration = "line-through";
                    li.style.fontWeight = "lighter";
                    completedTask.disabled = true;
                    }
                spanCompleted.appendChild(completedTask);

                let spanDeleted = document.createElement("span");
                let deleteTask = document.createElement("button");
                deleteTask.className = "btn btn-dark ";//mb-3 mx-1
                deleteTask.innerHTML = "X";
                deleteTask.onclick = function deleteTaskHere(){
                    // needs a for loop to get the task out of the properties "tasks" array
                    let taskToBeDeleted = li.id;
                    
                    for (let i = 0; i < value.length; i++) {
                        if (taskToBeDeleted == value[i]){
                            value.splice(i,1);
                        }
                        
                    }
                    li.remove();
                }
                spanDeleted.appendChild(deleteTask);
                li.appendChild(spanCompleted);
                li.appendChild(spanDeleted);
                ul.appendChild(li)
                
            }

    } 
    }
}
    displayMessage();
    }