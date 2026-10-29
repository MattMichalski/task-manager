
class Board{
    constructor(name, tasks){
        this.name = name;
        this.tasks = [];
    }
    add(){
        let x = document.getElementById(`${this.name}`)
        let tasks = this.tasks;
        let name = this.name;
        let disableButton = x.querySelector("button");
        disableButton.disabled = true;
        
        let taskForm = document.createElement("div");
        taskForm.className = "form-floating p-1";
        
        let newTaskInput = document.createElement("input");
        newTaskInput.setAttribute("type", "text");
        newTaskInput.setAttribute("placeholder", "New Task");
        newTaskInput.className = "form-control mb-3";
        newTaskInput.id = "TaskToCreate";
        
        let label = document.createElement("label");
        label.setAttribute("for", "TaskToCreate");
        label.innerHTML = "New Task";

        let newTaskMade = document.createElement("button");
        newTaskMade.setAttribute("type", "button");
        newTaskMade.className = "btn btn-primary mb-3 mx-1";
        newTaskMade.innerHTML = "Create Task";
        newTaskMade.onclick = function createTask(){
                if (newTaskInput.value == ""){
                    window.alert("Assign a task");
                    return false;
                }
                
                tasks.push(`${newTaskInput.value}`);
                taskForm.remove();
                ///////////////////////////////////////////////////////////////Making a unordered list to replace the div setup
                let doc = document.getElementById(name);
                let ul = doc.querySelector("ul");
                let li = document.createElement("li");
                li.style.background = "white";
                li.className = "p-1 list-group-item my-1 rounded-1";
                li.innerHTML = newTaskInput.value;
                li.id = newTaskInput.value;

                let spanCompleted = document.createElement("span");
                let completedTask = document.createElement("button");
                completedTask.className = "btn btn-primary ms-5";//mb-3 mx-1
                completedTask.innerHTML = "&#x2713;";
                completedTask.onclick = function completeTaskHere(){
                    // needs a for loop to get the task out of the properties "tasks" array
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
                    
                    for (let i = 0; i < tasks.length; i++) {
                        if (taskToBeDeleted == tasks[i]){
                            tasks.splice(i,1);
                        }
                        
                    }
                    li.remove();
                    disableButton.disabled = false;
                }
                spanDeleted.appendChild(deleteTask);
                li.appendChild(spanCompleted);
                li.appendChild(spanDeleted);
                ul.appendChild(li)
                
                disableButton.disabled = false;
                    
           
        }
        let removeForm = document.createElement("button");
        removeForm.className = "btn btn-dark mb-3 mx-1";
        removeForm.innerHTML = "X";
        removeForm.onclick = function formGone(){
            taskForm.remove();
            disableButton.disabled = false;
        }
        
        displayMessage();
        taskForm.appendChild(newTaskInput);
        taskForm.appendChild(label);
        taskForm.appendChild(newTaskMade);
        taskForm.appendChild(removeForm);

        x.appendChild(taskForm);
    }
    
    
    deleteBoard(){
        if(!confirm("Delete this board"))
            return;
        let toBeDeleted = document.getElementById(this.name);
        let storageDelete = JSON.stringify(this.name);
        localStorage.removeItem(storageDelete);
        for (const key in this) {          
                delete this[key];
        }
        for(let i = 0; i < obj.length; i++){
            if (obj[i].name == undefined && obj[i].tasks == undefined){
                obj.splice(i,1);
            }
        }
        
        toBeDeleted.remove();
        displayMessage();
    }

    askAi(){
        let x = document.getElementById(`${this.name}`);
        let tasks = this.tasks;
        let name = this.name;
        let disableButton = x.querySelector("#aiButton");
        disableButton.disabled = true;

        let aiForm = document.createElement("div");
        aiForm.className = "form-floating p-1";

        
        
        let newAiInput = document.createElement("input");
        newAiInput.setAttribute("type", "text");
        newAiInput.setAttribute("placeholder", "Ask Something");
        newAiInput.className = "form-control mb-3";
        newAiInput.id = "AiToCreate";
        
        let aiLabel = document.createElement("Label");
        aiLabel.setAttribute("for", "AiToCreate");
        aiLabel.innerHTML = "New AI";

        let newAiTaskMade = document.createElement("button");
        newAiTaskMade.setAttribute("type", "button");
        newAiTaskMade.className = "btn btn-primary mb-3 mx-1";
        newAiTaskMade.innerHTML = "Ask";

        let spinner = document.createElement("div");
        spinner.className = "spinner-grow";
        spinner.setAttribute("role", "status");
        spinner.textContext = "loading...";
        spinner.style.width = "50px";
        spinner.style.height = "50px";
        spinner.style.color = "#0e7490";
        newAiTaskMade.onclick = function createSuggestion(){
                
                aiForm.remove();
                
                if (newAiInput.value == ""){
                    window.alert("Ask AI");
                    x.appendChild(aiForm);
                    return;
                }
                x.appendChild(spinner);
                newAiInput.value = "break this task into small steps. return only a numbered list, one step per line, no introduction, no paragraphs: " +  newAiInput.value;
                
                fetch("https://text.pollinations.ai/",{
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({
                        messages: [{ role: "user", content: newAiInput.value}],
                        model: "openai"})
                })
                .then(response => {
                    if (response.status === 402){
                        return;
                    }
                    return response.text();
                    })
                .then(data => {
                    let responseArray = data.split("\n");

                    let cleanArray = [];
                    let i;
                    for( i = 0; i < responseArray.length; i++){
                        let clean = responseArray[i].replace(/^\d+\.\s*/, "").trim();
                        if (clean === "")
                            continue;
                        cleanArray.push(clean);
                    
                        
                        tasks.push(cleanArray[i]);
                        spinner.remove();
                ///////////////////////////////////////////////////////////////Making a unordered list to replace the div setup
                        let doc = document.getElementById(name);
                        let ul = doc.querySelector("ul");
                        let li = document.createElement("li");
                        li.style.background = "white";
                        li.className = "p-1 list-group-item my-1 rounded-1";
                        li.innerHTML = cleanArray[i];
                        li.id = cleanArray[i];

                        let spanCompleted = document.createElement("span");
                        let completedTask = document.createElement("button");
                        completedTask.className = "btn btn-primary ms-5";//mb-3 mx-1
                        completedTask.innerHTML = "&#x2713;";
                        completedTask.onclick = function completeTaskHere(){
                    // needs a for loop to get the task out of the properties "tasks" array
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
                    
                    for (let i = 0; i < tasks.length; i++) {
                        if (taskToBeDeleted == tasks[i]){
                            tasks.splice(i,1);
                        }
                        
                    }
                    li.remove();
                    disableButton.disabled = false;
                }
                spanDeleted.appendChild(deleteTask);
                li.appendChild(spanCompleted);
                li.appendChild(spanDeleted);
                ul.appendChild(li)
                
                disableButton.disabled = false;
               }  
            
            });
                
                
                    
           
        }
        let removeForm = document.createElement("button");
        removeForm.className = "btn btn-dark mb-3 mx-1";
        removeForm.innerHTML = "X";
        removeForm.onclick = function formGone(){
            aiForm.remove();
            disableButton.disabled = false;
        }
        
        displayMessage();
        aiForm.appendChild(newAiInput);
        aiForm.appendChild(aiLabel);
        aiForm.appendChild(newAiTaskMade);
        aiForm.appendChild(removeForm);

        x.appendChild(aiForm);
    }
            

}

