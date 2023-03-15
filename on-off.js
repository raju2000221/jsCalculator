function getElementBtnValueById(value){
    const btnvalue = document.getElementById(value);
    const btnvalueString = btnvalue.innerText;
    // const btnvalueInit = parseInt(btnvalueString);
    return  btnvalueString;

}


function getElementBtnMathValueById(value){
    const mathbtn = document.getElementById(value);
    const mathbtnValue = mathbtn.innerText;
    return mathbtnValue;
}

// function setTextElementValueById(elementId, newValue){
    
//     const a = textElement.value;
//     const b = eval(a);
//     textElement.value = b;

// }
// function answer(){
//     const displaymath = document.getElementById('display').value ;
//     // const a = displaymath.value;
//     console.log(displaymath)
// }
   
function answer(){
    const a = document.getElementById('display');
    const b = a.value;
   console.log(b)
   const c = eval(a);
   document.getElementById('display').value = c;

}


