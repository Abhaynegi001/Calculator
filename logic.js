let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let result = document.querySelector(".result")
let string = "";


console.log(result)

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(J)=>{
        
        if(J.target.innerHTML=='='){
            result.innerHTML = input.value
            string = eval(string)
            if(Number.isInteger(string)==true){
                input.value= string
            }
            else{
                string = string.toFixed(2)
                input.value= string
            }
        }
        else if(J.target.innerHTML=='AC'){
            {
                let str = string
                result.innerHTML = `Ans = ${eval(str)}`
            }
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
