




/*var input =signUpArray.email
console.log(input)*/

  document.getElementById("in").innerHTML=`welcome ${localStorage.getItem('username')}`
function logout(){
  location.href='index.html'
  localStorage.removeItem('username')
}