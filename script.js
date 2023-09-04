
// initial Values
document.querySelector(".res").hidden=true;
document.getElementById('history').hidden=true;
document.getElementById('img_load').hidden=true;


// This function fetches data from an API and displays it on an HTML page after finding a solution.
async function find()
{
    document.getElementById('img_load').hidden=false;
    document.getElementById('history').hidden=true;
    let prob=document.getElementById('problem').value;
    console.log(prob);
    let a=document.getElementById('sel').value;
   let uri=encodeURIComponent(prob);
   console.log(uri);
    let s=await fetch(`https://newton.vercel.app/api/v2${a}/${uri}`);
    s=await s.json();
    console.log(s);
    document.getElementById('res_h').innerHTML=s.operation+":"+s.expression;
    document.getElementById('ans').innerHTML="Ans:- "+s.result;
    setTimeout(
    exchange(),2000);
    lcadd(s.operation,s.expression,s.result); 
}


// This function hides and shows specific sections on the page based on user interaction.
function exchange()
{
    document.getElementById('img_load').hidden=true;
    let dl=document.querySelector(".res").hidden=false;
}



// Section Of Local Storage -----

// This function Work to close Section Button
function dlt()
{
    let dl=document.querySelector(".res");
    let prob=document.getElementById('problem').value=null;
   dl.hidden="true";
}


// This function adds data to the local storage of the browser for future use.
function lcadd(op,ex,res)
{
    localStorage.setItem(op+`(${ex})`,res);
}


// This function retrieves data from the local storage of the browser and displays it on the page.
let i=1;
function show() {
    const historySection = document.getElementById('history');
    const historyTable = document.getElementById('his');

    // Clear existing content in the history table
    historyTable.innerHTML = '';

    // Populate the history table with new rows
    const len = localStorage.length;
    console.log(len);

    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let list = document.createElement('tr');
        list.innerHTML = `<td>${key}</td><td>${value}</td>`;
        historyTable.appendChild(list);
    }

    // Hide the result section
    document.querySelector(".res").hidden = true;

    // Show the history section
    historySection.hidden = false;
}




//This function removes all stored data from local storage, wiping the saved solution history in the browser.
function clear_history()
{
    let really=confirm("Do you realy want to Clear All History");
    if(really===true)
    {
localStorage.clear();
    }
show();   //Call Table Clear Function
}

//clear Table After clear all Local Data
function clr()
{
    let list=document.querySelector("td");
    list.remove();    
}






 
   





