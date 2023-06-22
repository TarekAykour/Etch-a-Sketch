const container = document.querySelector('.container');
const colors = [];
let userInput = document.querySelector('.gridNum')
const generate = document.querySelector('.generate');
let gridValue = userInput.value
const selectedColor = document.querySelector('.colorSelect').value;



console.log(selectedColor)

// listen to enter, or change 

generate.addEventListener('click', ()=> {
    gridValue = userInput.value
    location.reload()
    
})





let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

for(let i =0; i <= parseInt(gridValue)*parseInt(gridValue); i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    container.append(div);


    div.addEventListener('mouseover', ()=> {
        div.style.background = selectedColor
    })
    div.addEventListener('mouseover', ()=> {
        div.style.background = selectedColor
    })
}



