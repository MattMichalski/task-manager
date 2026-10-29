function groceryList(){
   
    let location = document.getElementById("subRoot2");
    let i;
    let dept;
    for (i = 0; i < 9; i++) {
        switch (i) {
        case 0:
          dept = "Bakery";
          break;
        case 1:
          dept = "Dairy";
          break;
        case 2:
          dept = "Deli";
          break;
        case 3:
          dept = "Frozen";
          break;
        case 4:
          dept = "Grocery";
          break;
        case 5:
          dept = "Meat";
          break;
        case 6:
          dept = "Pharmacy";
          break;
        case 7:
          dept = "Produce";
          break;
        case 8:
          dept = "Seafood";
          break;
        }
        
        let deptList = new Board(dept); 
        let j;
        for (j = 0; j < obj.length; j++) {
          if (deptList.name == obj[j].name){
            window.alert("You already have a grocery list")
            return
          }
          continue
        }
        obj.push(deptList);
        let deptElement = document.createElement("div");
        deptElement.className = "col-auto m-2 rounded-3";
        deptElement.id = deptList.name;
        deptElement.style.background = "lightgrey";
        deptElement.style.border = "4px ridge grey";
        deptElement.style.boxShadow = "5px 5px 8px";
        let headline = document.createElement("h2");
        headline.innerHTML = `${dept}`;
        headline.style.textDecoration = "underline";

        let addButton = document.createElement("button");
            addButton.className = "btn btn-primary m-3";
            addButton.id = "taskButton";
            addButton.setAttribute("type", "button");
            addButton.addEventListener("click", function callAdd(){deptList.add()});
            addButton.innerHTML = "Add task";

            let addAi = document.createElement("button");
            addAi.className = "btn btn-dark m-3";
            addAi.id = "aiButton";
            addAi.setAttribute("type", "button");
            addAi.addEventListener("click", function callAdd(){deptList.askAi()});
            addAi.innerHTML = "✨ Ask AI";

            let deleteBoard = document.createElement("button");
            deleteBoard.className = "btn btn-outline-danger m-3";
            deleteBoard.id = "deleteBoardButton";
            deleteBoard.setAttribute("type", "button");
            deleteBoard.addEventListener("click", function deleteThisBoard(){

                deptList.deleteBoard(); 
            });
            deleteBoard.innerHTML = "Delete board";

        let list = document.createElement("ul");
        list.className = `list-group ${deptList.name} mb-3`;

        deptElement.appendChild(headline);
        deptElement.appendChild(addButton);
        deptElement.appendChild(addAi);
        deptElement.appendChild(deleteBoard);
        deptElement.appendChild(list);
        location.appendChild(deptElement);
        
        
    }
    displayMessage();

}
