

capslock = false
function display(content){
    if(capslock){
        word.value += content.toUpperCase()
    }
    else{
        word.value += content.toLowerCase()
    }
}
word.value += content
function del(){
    word.value = ""
}
function caps(){
    capslock = !capslock
    // const capsbtn =
}
function backspace(content){
    word.value = word.value.slice(0,-1)
}