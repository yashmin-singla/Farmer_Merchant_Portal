// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkSFQNiq3ZCJRh-T5ceqKZbDHQyaoJnao",
  authDomain: "farmer-portal-4e1e2.firebaseapp.com",
  projectId: "farmer-portal-4e1e2",
  storageBucket: "farmer-portal-4e1e2.appspot.com",
  messagingSenderId: "857958003228",
  appId: "1:857958003228:web:8d2cc3431918ddfb00e5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize variables
const auth =app.auth()
const database=app.database()

function register()
{
    username=document.getElementById('username').value
    email=document.getElementById('email').value
    password=document.getElementById('password').value
    confirm_password=document.getElementById('confirm password').value

}
if(validate_field(username)==false)
{
    alert('username not entered !')
    return
}
if(validate_email(email)==false || validate_password(password) == false)
{
    alert('Email or password is Outta Line !!')
    return
}
if(validate_confirm_password(confirm_password)==false)
{
    alert('Password doesnt match plz try again!')
    return
}
auth.createUserWithEmailAndPassword(email,password)
.then(function(){
var user = auth.currentUser

var database_ref=database.ref()

var user_data ={
    email:email,
    username:username

}
database_ref.child('users/' + user.uid).set(user_data)




alert('User created')
})
.catch(function(error){
    var error_code=error.code
    var error_message=error.message
})

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}
function validate_confirm_password(confirm_password) {
  // Firebase only accepts lengths greater than 6
  if (confirm_password!=password) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
