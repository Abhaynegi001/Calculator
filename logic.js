let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let result = document.querySelector(".result")
let history = document.querySelector(".history")
let string = "";
let array = []

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(J)=>{
        if(J.target.innerHTML=='='){
            if(string!=""){
                result.innerHTML = input.value
                // history
                let div = document.createElement('div')
                div.setAttribute("class","text")
                let text = document.createTextNode(`${input.value} = ${eval(string)}`)
                div.appendChild(text)
                history.appendChild(div)
    
                string = eval(string)
      
                array.push(string)
                if(Number.isInteger(string)==true){
                    input.value= string
                }
                else{
                    string = string.toFixed(2)
                    input.value= string
                }
            } 
        }
        else if(J.target.innerHTML=='AC'){
            result.innerHTML = `Ans = ${array[array.length-1]}`
            string = ""
            input.value = string
        }
        else if(J.target.innerHTML=='DEL'){  
            string = string.substring(0,string.length-1)
            input.value=string;
        }
        else{
            string+= J.target.innerHTML;
            input.value = string
            
        }
    })
})

