let td = document.querySelectorAll('.tdHover')
const one = document.getElementById('one')
const cell = document.querySelectorAll('td')
const table = document.getElementsByTagName('table') 



const output = document.getElementById('output')

function Operation(operation){
    output.innerHTML += operation;
}

function calculate(){
    let result = eval(output.innerHTML);
    output.innerHTML =result;
}


function clearLastElement(){

    if(output.innerHTML.endsWith(' ')){
        output.innerHTML = output.innerHTML.slice(0, -3);
        console.log(output)

    } else{
        output.innerHTML = output.innerHTML.slice(0, -1)
    }
}

function clearAll(){
    output.innerHTML = '';
}





function showMeLove(){
   const theDiv = document.querySelector('.theDiv')
   const goBack = document.querySelector('.goBack')

   theDiv.style.display = 'block'
   theDiv.style.position = 'relative'
   goBack.style.position = 'absolute'
   goBack.style.left = '670px'

   theDiv.scrollIntoView({
       behavior: 'smooth'
   })
 
}

const goBack = document.querySelector('.goBack')
const header = document.getElementById('header')

goBack.addEventListener('click', ()=>{

    header.scrollIntoView({
        behavior: 'smooth'
    })

})