var emailinput =document.getElementById('email')
var passinput =document.getElementById('pass')


function validate(){
    if(emailinput.value=="" || passinput.value==''){
        
       var remove =document.getElementById("warning")
       remove.classList.remove("d-none")
    }
    else if(true){
        for (var i = 0; i < signUpArray.length; i++) {
            if (signUpArray[i].email.toLowerCase() == emailinput.value.toLowerCase()) {
               location.href='home.html'
               localStorage.setItem('username',signUpArray[i].name)
            }
        }
    }
    else {
        var remove =document.getElementById("warning")
       remove.classList.add("d-none")
    }
  

}
/*function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == emailinput.value.toLowerCase()) {
           console.log("good")
        }
    }
}*/
signUpArray =JSON.parse(localStorage.getItem('users'))

