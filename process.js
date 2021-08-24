function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
} // Allows only numerical input


var form = document.getElementById("frm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm); // Prevents page reload on submit

function generate(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
} //returns a random string


function replace() {
  var pswdlength = document.getElementById("box").value
  if(pswdlength > 20) {
      window.alert("You cannot generate password longer than 20 characters")
      return;
  }

  if(pswdlength < 4) {
      window.alert("You cannot generate password lesser than 4 characters")
      return;
  }
  var randompassword = generate(pswdlength)
  document.getElementById("rlc").innerHTML= "Password: ";
  document.getElementById("fna").innerHTML= randompassword;
}   // gets triggered onSubmit, generates a string and replace the Password field with new password
