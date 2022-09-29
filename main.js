// declare variable 
let input=document.querySelector(".input")
let span=document.querySelector(".input span")
let output=document.querySelector(".output")
let arrayBtn=Array.from(document.querySelectorAll(".box div"))



arrayBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.dataset.num=="del"){
            input.value="";
            output.innerText="";
        }else if(e.target.dataset.num=="="){
            let result= +eval(input.value);
            output.innerHTML= result.toFixed(2);
        }else{
            input.value +=e.target.innerText;
        }
    })

})


// array of btn 
let btns=Array.from(document.querySelectorAll(".box div"))



document.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let result= +eval(input.value);
        output.innerHTML= result.toFixed(2);
    }

    // add number by keyboard
    btns.forEach(btn=>{
        if(e.key == btn.dataset.num){
            if(btn.dataset.num=="del"){
                input.value="";
                output.innerText="";
            }else if(btn.dataset.num=="="){
                let result= +eval(input.value);
                output.innerHTML= result.toFixed(2);
            }else{
                input.value +=btn.innerText;
            }
        }
    })

})





