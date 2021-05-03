let selector =  (cssSelector) => {
    return document.querySelector(cssSelector)
}

let lftBtn = selector('.container input:first-of-type');
let ritBtn = selector('.container input:last-of-type');
let container = selector('.container');

let count = 0;


let updateDisplay = () => {  
    count = count > 20 ? 20 : count < 0 ? 0 : count;  
    container.style.backgroundImage = `url(https://picsum.photos/id/${count}/400/400)`;
    console.log(count);
}

[lftBtn, ritBtn].forEach((eachEle)=>{
    eachEle.addEventListener('click', ()=>{
   
    
    switch (eachEle.className) {
        case 'u-pull-left':
            count--
            
            updateDisplay()
            break;

        case 'u-pull-right':
             count++
            updateDisplay()
            break;
    
        default:
            break;
    }
    

    })
});
 