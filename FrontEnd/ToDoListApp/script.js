document.getElementById("btnAdd").addEventListener("click", btnAdd)

function btnAdd() {
    let addAndSearch = document.getElementById("addAndSearch").value
    let splitText = addAndSearch.toLowerCase().split(" ").map(function(word){
        return word[0].toUpperCase() + word.substr(1)
    }).join(" ")
    const node = document.createElement("li")
    const textNode = document.createTextNode(splitText)
    node.appendChild(textNode)
    document.getElementById("listToDo").appendChild(node)
}

let searchTask
const textInput = document.getElementById("addAndSearch")
let timeout = null

textInput.onkeyup = function() {
    clearTimeout(timeout)
    timeout = setTimeout(function(){
        searchTask = textInput.value

    })
}