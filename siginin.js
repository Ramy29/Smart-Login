var emailinput =document.getElementById('email')
var passinput =document.getElementById('pass')
var nameinput =document.getElementById('name')

var signUpArray= []
function validate(){
    if(emailinput.value=="" || passinput.value==''|| nameinput.value==''){
        
       var remove =document.getElementById("warning")
       remove.classList.remove("d-none")
    }
    else   {
        var remove =document.getElementById("warning")
        remove.classList.add("d-none")
    }
    

}
 btn.onclick=function(){
    var NewElement ={
        name:nameinput.value,
        email:emailinput.value,
        pass:passinput.value,
    }
     signUpArray.push(NewElement)
    localStorage.setItem('users', JSON.stringify(signUpArray))
    swal({
        title:"Sucess",
        text:"Data Has Been Added",
        icon:"success"
    })
    
    validate()
 
}
