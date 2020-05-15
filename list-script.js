 //Get the form
 let form = document.getElementById("form");

 //Add event listener to form on submit
 form.addEventListener("submit", addToList);

 // //Function to add to list
 function addToList(){
     // Prevent form from resubmitting automatically and clearing
     event.preventDefault();

     //Get value from input and assign it to a variable
     let value = document.getElementById("input").value;

   // IF/else statement to parse if nothing is added to the input and sumbitted it doesn't add a black li to the list
     if (value == "") {

     } else {
        //Grab list
        list = document.getElementById("list");
        //Create element li
        let li = document.createElement("li");
        //Set the inner text to the input captured earlier
        li.innerText = value;
        //Give the li a class
        li.setAttribute("class", "list-group-item");
        li.setAttribute("id", "list-" + Date.now());
        //Add the li to the list
        list.appendChild(li);
         //Rested the form for next input
        form.reset();
     }
  }