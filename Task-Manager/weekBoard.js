function weeklyBoard(){
    
    let location = document.getElementById("subRoot2");
    let i;
    for (i = 0; i < 7; i++) {
        let week = new Date();
        week.setDate(week.getDate() + i);
        let day = week.getDay();
    let month = week.getMonth();
    let date = week.getDate();
    switch (day) {
        case 0:
          day = "Sun";
          break;
        case 1:
          day = "Mon";
          break;
        case 2:
           day = "Tues";
          break;
        case 3:
          day = "Wed";
          break;
        case 4:
          day = "Thurs";
          break;
        case 5:
          day = "Fri";
          break;
        case 6:
          day = "Sat";
          break;
      }
      switch (month) {
        case 0:
          month = "Jan";
          break;
        case 1:
          month = "Feb";
          break;
        case 2:
           month = "Mar";
          break;
        case 3:
          month = "Apr";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "Aug";
          break;
        case 8:
          month = "Sept";
          break;
        case 9:
           month = "Oct";
          break;
        case 10:
          month = "Nov";
          break;
        case 11:
          month = "Dec";
          break;
      }
        let weekObj = new Board(`${day}-${month}-${date}`);
        let j;
        for (j = 0; j < obj.length; j++) {
          if (weekObj.name == obj[j].name){
            window.alert("You already have boards for the week made")
            return
          }
          continue
        }
        obj.push(weekObj);

        let weekDay = document.createElement("div");
        weekDay.className = "col-auto m-2 rounded-3";
        weekDay.id = weekObj.name;
        weekDay.style.background = "lightgrey";
        weekDay.style.border = "4px ridge grey";
        weekDay.style.boxShadow = "5px 5px 8px";
        let headline = document.createElement("h2");
        headline.innerHTML = `${day}-${month}-${date}`;
        headline.style.textDecoration = "underline";

        let addButton = document.createElement("button");
            addButton.className = "btn btn-primary m-3";
            addButton.id = "taskButton";
            addButton.setAttribute("type", "button");
            addButton.addEventListener("click", function callAdd(){weekObj.add()});
            addButton.innerHTML = "Add task";

            let addAi = document.createElement("button");
            addAi.className = "btn btn-dark m-3";
            addAi.id = "aiButton";
            addAi.setAttribute("type", "button");
            addAi.addEventListener("click", function callAdd(){weekObj.askAi()});
            addAi.innerHTML = "✨ Ask AI";

            let deleteBoard = document.createElement("button");
            deleteBoard.className = "btn btn-outline-danger m-3";
            deleteBoard.id = "deleteBoardButton";
            deleteBoard.setAttribute("type", "button");
            deleteBoard.addEventListener("click", function deleteThisBoard(){

                weekObj.deleteBoard(); 
            });
            deleteBoard.innerHTML = "Delete board";

        let list = document.createElement("ul");
        list.className = `list-group ${weekObj.name} mb-3`;

        weekDay.appendChild(headline);
        weekDay.appendChild(addButton);
        weekDay.appendChild(addAi);
        weekDay.appendChild(deleteBoard);
        weekDay.appendChild(list);
        location.appendChild(weekDay);
        
        
    }
   displayMessage();
}