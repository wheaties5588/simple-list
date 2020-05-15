//Get button by id and assign it to a variable
let clearListButton = document.getElementById("clear-list-button");
//Add event listener for click and assign clearList function
clearListButton.addEventListener("click", clearList);


//Create function to clear list
function clearList() {
    //Grab the list
    let liNode = document.getElementById("list");
    //Set list inner HTML to empty
    liNode.innerHTML = "";
}