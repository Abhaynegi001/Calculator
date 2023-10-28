let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(J)=>{
        if(J.target.innerHTML=='='){
            string = eval(string)
            input.value= string
        }
        else if(J.target.innerHTML=='AC'){
            string = ""
            input.value = string
        }
        else if(J.target.innerHTML=='DEL'){  
            
            string = string.substring(0,string.length-1)
            input.value=string
            
        }
        else{
            string+= J.target.innerHTML;
            input.value = string
        }
    })
})
