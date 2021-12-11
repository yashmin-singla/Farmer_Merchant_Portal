import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { doc, setDoc, getFirestore, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";

const login_form = document.getElementById("login-form");
const register_form = document.getElementById("register-form");
const p_info = document.getElementById("personal_info");
console.log(login_form);

const auth = getAuth();

  
  const db = getFirestore();


  if (login_form) {
    login_form.addEventListener("submit", async (e) => {
        e.preventDefault();
        // console.log("submitted");
        const loginemail = login_form["email"].value;
        const loginpassword = login_form["password"].value;
        var selectElement1 = login_form["select"];
        // var email=p_info.getElementById("input2");
        var output1 = selectElement1.options[selectElement1.selectedIndex].value;
      console.log(loginemail)
        if(output1=="farmer" )
        {

          const docRef = doc(db, "farmer",loginemail);
          const docSnap = await  getDoc(docRef);
          if (docSnap.exists()) {
            signInWithEmailAndPassword(auth, loginemail, loginpassword)
            .then((userCredential) => {
              // console.log("Document data:", docSnap.data());
              alert("Signed In Successfully");
              window.location.replace("http://127.0.0.1:5501/main/portal1/farmer/home.html");
              p_info["input2"].value=loginemail;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // alert("Wrong password entered!");
          });
        }
            
           else {
            // doc.data() will be undefined in this case
            alert("No such user exists!");
          }
        }
        else if(output1=="merchant")
        {
          const docRef = doc(db, "merchant",loginemail);
          const docSnap = await  getDoc(docRef);
          if (docSnap.exists()) {
            signInWithEmailAndPassword(auth, loginemail, loginpassword)
            .then((userCredential) => {
              // console.log("Document data:", docSnap.data());
              alert("Signed In Successfully");
              window.location.replace("http://127.0.0.1:5501/main/portal1/merchant/home.html")

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // alert("Wrong password entered!");
          });
            
          } else {
            // doc.data() will be undefined in this case
            alert("No such user exists!");
          }
        }
        else{
          alert("please select the correct user type");
        }
        

    });
}

  if(register_form)
  {
    // console.log(register_form)
    
      register_form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (register_form["username2"].value != "" && register_form["email2"].value != " " &&
            register_form["password2"].value != "" && (register_form["password2"].value.length) > 6 && register_form["confirm_password2"].value == register_form["password2"].value ) {

            // console.log("submitted")
            var email2 = register_form["email2"].value;
            var password2 = register_form["password2"].value
            var confirm_password2=register_form["confirm_password2"].value
            var selectElement = register_form["select1"];
        var output = selectElement.options[selectElement.selectedIndex].value;
            // console.log(email2)
            // console.log(password2)
            
            createUserWithEmailAndPassword(auth, email2, password2).then((userCredential) => {
                // console.log(userCredential.user)
                if(output=="farmer"){
                  setDoc(doc(db, "farmer", email2), {
                    username: register_form["username2"].value,
                    email: email2,
                    user_type:output,
                   

                })
                .then(() => {
                // console.log(userCredential);
                alert("Account Created")
                window.location.replace("http://127.0.0.1:5501/main/portal1/farmer/home.html")
            })
                }
                else if(output=="merchant")
                {
                  setDoc(doc(db, "merchant", email2), {
                    username: register_form["username2"].value,
                    email: email2,
                    user_type:output
                }).then(() => {
                    // console.log(userCredential);
                    alert("Account Created")
                    window.location.replace("http://127.0.0.1:5501/main/portal1/merchant/home.html")
                })
                }
                else{
                  alert("Enter the correct user type!");
                }
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  }
  else{
      alert("form not filled correctly");
  }
});
}  
    