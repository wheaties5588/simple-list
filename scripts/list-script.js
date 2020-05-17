 //Get the form
 let form = document.getElementById("form");

  // Capture the close buttons in an array
  let closeList = document.getElementsByClassName("close");
  let i;

 //Add event listener to form on submit
 form.addEventListener("submit", addToList);

 // //Function to add to list
 function addToList(){
     // Prevent form from resubmitting automatically and clearing
     event.preventDefault();

     //Get value from input and assign it to a variable
     let value = document.getElementById("input").value;

   // IF/else statement to parse if nothing is added to the input and sumbitted it doesn't add a black li to the list
     if (value === "") {
         alert("Please input an item.");
     } else {
        //Grab list
        list = document.getElementById("list");
        //Create element li
        let li = document.createElement("li");

        //Set the inner text to the input captured earlier
        li.innerText = value;
        //Give the li a class
        li.setAttribute("class", "list-group-item");
        //Generate random id using date
        li.setAttribute("id", "list-" + Date.now());

        //Add the li to the list
        list.appendChild(li);

        //Create span and internal text for close button
        let span = document.createElement("span");
        let spanTxt = document.createTextNode("x");

        //Different way of setting a class name
        span.className = "close";

        //Add the text to the span
        span.appendChild(spanTxt);

         // Add the close button span to the li
        li.appendChild(span);

        //Loop to create onclick event for close button
        for (i = 0; i < closeList.length; i ++) {
           closeList[i].onclick = function() {
              let parentDiv = this.parentElement;
              parentDiv.style.display = "none";
           }
        }



         //Rested the form for next input
        form.reset();
     }
  }