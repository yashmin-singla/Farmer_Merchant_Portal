import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { doc, setDoc, getFirestore, getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";

const p_info1 = document.getElementById("personal_info1");
const login_form=document.getElementById("login-form");
const auth = getAuth();
const db = getFirestore();
 
  onAuthStateChanged(auth, async(user) => {

    if (user) {
      console.log(user.email)
      p_info1["i2"].value=user.email;
      const merchantRef = doc(db, "merchant", user.email);
      console.log(merchantRef);
      const docSnap=await getDoc(merchantRef);
  
  if(docSnap.exists() ){
    console.log(docSnap.data())
    p_info1["i1"].value=docSnap.data().name,
    p_info1["i2"].value=docSnap.data().email,
    p_info1["i3"].value=docSnap.data().phone_number,
    p_info1["i4"].value=docSnap.data().State,
    p_info1["i5"].value=docSnap.data().City
    
  }

      p_info1.addEventListener("submit",async(e)=>{
        e.preventDefault();
      const merchantRef = doc(db, "merchant", user.email);
     
     console.log(p_info1["i1"].value)
     console.log(p_info1["i3"].value)
     console.log(p_info1["i4"].value)
      if(p_info1["i1"].value!=" " && p_info1["i2"].value==user.email && (p_info1["i3"].value.length)==10 && p_info1["i4"]!="" && p_info1["i5"]!="")
     { await updateDoc(merchantRef, {
        name:p_info1["i1"].value,
        phone_number:p_info1["i3"].value,
        State:p_info1["i4"].value,
        City:p_info1["i5"].value,
        
  });
 

            
  alert("updated")
  const docSnap=await getDoc(merchantRef);

  if(docSnap.exists()){
    console.log(docSnap.data())
    p_info1["i1"].value=docSnap.data().name,
    p_info1["i2"].value=docSnap.data().email,
    p_info1["i3"].value=docSnap.data().phone_number,
    p_info1["i4"].value=docSnap.data().State,
    p_info1["i5"].value=docSnap.data().City
    
  }
     }
  
else{
  alert("Please recheck your personal information ");
}

})
    
  }
});



