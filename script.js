const newContainers = document.querySelector(".container")

for (let i = 0; i < 30; i++){
    const colorContainers = document.createElement("div")
    colorContainers.classList.add("color-container")
    newContainers.appendChild(colorContainers)
}
 
const colorBoxes = document.querySelectorAll(".color-container")

generateColors()

function generateColors(){
    colorBoxes.forEach((colorContainers)=>{
        const newColorCode = randomColor()
        console.log(newColorCode)
        colorContainers.style.backgroundColor = "#" + newColorCode
        colorContainers.innerText = "#" + newColorCode
    }) 
}

function randomColor(){
    const chars = "1234567890abcdef";
    const colorCodeLength = 6;
    let colorCode = ""
    for ( let i = 0; i < colorCodeLength; i++){
        const randomNum = Math.floor(Math.random()*chars.length)

        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode
}