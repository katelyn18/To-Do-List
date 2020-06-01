
/*
****************IDEA:
- get the date to complete the task on
- top will show tasks to complete TODAY
- bottom tasks will show rest of the tasks and the day they are to be completed on
*/

var counter = 0;
function addItem(){
    var new_item = document.getElementById("newitem").value;
    if( new_item == "" ){
        alert("Please add an item");
    }
    else{
        counter++;  //unique item added ID

        //create container for new item
        let new_item_div = document.createElement("div");
        new_item_div.id = counter+"div#";
        new_item_div.className = "item_container";

        //create completed checkbox for new item
        let new_completed_checkbox = document.createElement("input");
        new_completed_checkbox.setAttribute("type", "checkbox");
        new_completed_checkbox.id = counter+"complete#";
        new_completed_checkbox.className = "item_completed";
        new_completed_checkbox.type = "checkbox";
        new_completed_checkbox.setAttribute("onclick", "completeItem(this)");
        let boostrap_text = document.createElement("div");
        boostrap_text.className = "input-group-text";
        boostrap_text.append(new_completed_checkbox);
        let bootstrap_prepend = document.createElement("div");
        bootstrap_prepend.className = "input-group-prepend";
        bootstrap_prepend.append(boostrap_text);
        new_item_div.append(bootstrap_prepend);

        //add item to list
        let new_item_list = document.createElement("p");
        
        new_item_list.id = counter+"item#";
        new_item_list.className = "added_item";
        new_item_list.innerText = new_item;
        new_item_div.append(new_item_list);

        //create delete button for new item
        let new_delete_button = document.createElement("button");
        new_delete_button.id = counter+"delete#";
        new_delete_button.className = "delete_item close";
        new_delete_button.setAttribute("onclick", "removeItem(this)");
        new_delete_button.setAttribute("type", "button");
        new_delete_button.setAttribute("data-dismiss", "alert");
        new_delete_button.setAttribute("aria-label", "Close");
        let x = document.createElement("span");
        x.setAttribute("aria-hidden", "true");
        x.innerHTML = "&times;"
        new_delete_button.append(x);
        new_item_div.append(new_delete_button);

        //add container to the page
        document.getElementById("item_list").append(new_item_div);
        //clear input textbox
        document.getElementById("newitem").value = "";
    }
}

var completion_counter = 0;
var deleted_counter = 0;

//remove item from to do list
function removeItem(dlt_btn){
    deleted_counter++;
    document.getElementById("gone").innerText = deleted_counter;
    let btn_id = dlt_btn.id[0]; //get item number
    document.getElementById("item_list").removeChild(document.getElementById(btn_id+"div#"));
}

//completed items are highlighted green
function completeItem(cmplt_chk){
    let cmplt_id = cmplt_chk.id;
    if( document.getElementById(cmplt_id).checked == true ){
        completion_counter++;
        document.getElementById(cmplt_id[0]+"div#").style.backgroundColor = "#b1ffb1";
    }
    else{
        completion_counter--;
        document.getElementById(cmplt_id[0]+"div#").style.backgroundColor = "white";
    }
    document.getElementById("done").innerText = completion_counter;
}