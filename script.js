const input = document.querySelector("#input");
const char = document.querySelector("#character");
const words = document.querySelector("#words"); 

input.addEventListener("input",()=>{

    const inpttxt =input.value;

    char.textContent=inpttxt.length;

    const trim=inpttxt.trim();
    if(trim===""){
        words.textContent=0;
    }else{
        const arrwords=trim.split(/\s+/);
        words.textContent=arrwords.length;
    }
     
})