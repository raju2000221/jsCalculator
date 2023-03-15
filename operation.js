
document.getElementById('nine').addEventListener('click',function(){
    const nineValue = getElementBtnValueById('nine')
    const textElement =document.getElementById('display')
    textElement.value += nineValue;   
})
document.getElementById('eight').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('eight')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('savn').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('savn')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('six').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('six')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('five').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('five')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('four').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('four')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('three').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('three')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('two').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('two')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('one').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('one')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('dot').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('dot')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('zero').addEventListener('click',function(){
    const eightValue = getElementBtnValueById('zero')
    const textElement =document.getElementById('display')
    textElement.value += eightValue;
    
})
document.getElementById('div').addEventListener('click',function(){
    const divValue = getElementBtnMathValueById('div');
    const textElement =document.getElementById('display')
    textElement.value += divValue;   
})
document.getElementById('add').addEventListener('click',function(){
    const divValue = getElementBtnMathValueById('add');
    const textElement =document.getElementById('display')
    textElement.value += divValue;
  
})
document.getElementById('sub').addEventListener('click',function(){
    const divValue = getElementBtnMathValueById('sub');
    const textElement =document.getElementById('display')
    textElement.value += divValue;
  
})
document.getElementById('mul').addEventListener('click',function(){
    const divValue = getElementBtnMathValueById('mul');
    const textElement =document.getElementById('display')
    textElement.value += divValue;
  
})
document.getElementById('clear').addEventListener('click',function(){
    const textElement =document.getElementById('display')
    textElement.value = '0';
  
})
// var count =0;
// document.getElementById('onOffBtn').addEventListener('click',function(){
    
//     const textElement =document.getElementById('onOffBtn')
//     count += 1;
//    count = textElement.innerHTML;
//    console.log(count)
//    if (count === count*2){
//     textElement.value = '0'
//    }
//    else{
//     textElement.value = '1'

//    }
  
// })
document.getElementById('equl').addEventListener('click',function(){
    const textElement =document.getElementById('display');
   const a = textElement.value;
   console.log(a)
   const b = eval(a);
   textElement.value = b;
   
    
    
})


