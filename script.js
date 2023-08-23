let inp = document.getElementById('display');

let appendToDisplay = (ele) =>{
    
    inp.value += ele
}
let clearDisplay = () => {
    inp.value = ""
}
let calculate = () => {
    inp.value = eval(inp.value)
}
let backspace = () => {
    inp.value = inp.value.slice(0,-1)
}