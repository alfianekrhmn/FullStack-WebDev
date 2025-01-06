document.getElementById("click").addEventListener("click", click)
document.getElementById("myBtn").addEventListener("click", btn)


function btn() {
    let fullName = document.getElementById("fullName").value
    let email = document.getElementById("email").value
    let massage = document.getElementById("massage").value
    if(fullName == '' || email == '' || massage == ''){
        document.querySelector("#messeges").style.display = "block"
        document.querySelector("#messeges").style.color = "red"
        document.querySelector("#messeges").style.padding = "20px"
        document.querySelector("#messeges").style.backgroundColor = "white"
        document.querySelector("#messeges").innerHTML = "Silakan lengkapi formulirnya"

    }else{
        function validE(email) {
            const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return patt.test(email)
        }
        
        if(validE(email)){
            document.querySelector("#messeges").style.display = "block"
            document.querySelector("#messeges").style.color = "green"
            document.querySelector("#messeges").style.padding = "20px"
            document.querySelector("#messeges").style.backgroundColor = "white"
            document.querySelector("#messeges").innerHTML = "Terima kasih sudah mendaftar"
            alert("Terima kasih sudah mendaftar")
        }else{
            document.querySelector("#messeges").style.display = "block"
            document.querySelector("#messeges").style.color = "red"
            document.querySelector("#messeges").style.padding = "20px"
            document.querySelector("#messeges").style.backgroundColor = "white"
            document.querySelector("#messeges").innerHTML = "Silakan perbaiki emailnya"
        }
    }
}


function click() {
    const text = 'Hello world'
    console.log(text)
    alert(text)
}


document.getElementById("aaa").addEventListener("click", aaa)

const aaa = () => {
    let tambahkanTugas = document.getElementById("tambahkanTugas").value
    console.log(tambahkanTugas)
}