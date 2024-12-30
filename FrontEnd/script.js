document.getElementById("click").addEventListener("click", click)
document.getElementById("myBtn").addEventListener("click", btn)


function btn() {
    let fullName = document.getElementById("fullName").value
    let email = document.getElementById("email").value
    let massage = document.getElementById("massage").value
    console.log(`fullname: ${fullName}`)
    console.log(`Email: ${email}`)
    console.log(`Massage: ${massage}`)
}


function click() {
    const text = 'Hello world'
    console.log(text)
    alert(text)
}
