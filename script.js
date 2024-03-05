let text = document.querySelector(".typewriter-effect");
let title = ["a Front-End Developer","Web Designer","UI/UX Enthusiast"]
let strIndex=0;
let arrIndex=0;


let typewriter = function (){
    console.log('index',arrIndex)
    let newTitle = title[arrIndex].slice(0,strIndex);
    text.innerText = newTitle + "|";
    
    strIndex>title[arrIndex].length?strIndex=0 & arrIndex++:strIndex++;
    arrIndex>=title.length?arrIndex=0:null;
    
    setTimeout(typewriter,150)

}

typewriter()