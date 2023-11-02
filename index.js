// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Change Background</h1>`;

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const canvaDiv= document.getElementById('canva');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
      body.style.color = "black"
    }
    else if(e.target.id === "Black"){
      body.style.backgroundColor = e.target.id;
      body.style.color = "white"
      // body.style.backgroundColor = c.target.text;
      // body.style.color = "black"

    }
    else if(e.target.id === "Blue"){
      body.style.backgroundColor = e.target.id;
      body.style.color = "black"
    }
    else if(e.target.id === "Yellow"){
      body.style.backgroundColor = e.target.id;
      body.style.color = "black"
    }
    else{
      body.style.backgroundColor = null
    }
  })
})


