import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { doc, setDoc, getFirestore, getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";

const p_info = document.getElementById("personal_info");
const login_form=document.getElementById("login-form");
const auth = getAuth();
const db = getFirestore();
 
  onAuthStateChanged(auth, async(user) => {

    if (user) {
      // console.log(user.email)
      p_info["input2"].value=user.email;
      const farmerRef = doc(db, "farmer", user.email);
      // const cropRef=doc(db, "crop", user.email)
      // console.log(farmerRef);
      const docSnap=await getDoc(farmerRef);
  // const docSnap2=await getDoc(cropRef);
  if(docSnap.exists() ){
    console.log(docSnap.data())
    p_info["input1"].value=docSnap.data().name,
    p_info["input2"].value=docSnap.data().email,
    p_info["input3"].value=docSnap.data().phone_number,
    p_info["input4"].value=docSnap.data().State,
    p_info["input5"].value=docSnap.data().City,
    p_info["wheat_price"].value=docSnap.data().wheat_price,
    p_info["wheat_quantity"].value=docSnap.data().wheat_quantity,
    p_info["rice_price"].value=docSnap.data().rice_price,
    p_info["rice_quantity"].value=docSnap.data().rice_quantity,
    p_info["maize_price"].value=docSnap.data().maize_price,
    p_info["maize_quantity"].value=docSnap.data().maize_quantity,
    p_info["millets_price"].value=docSnap.data().millets_price,
    p_info["millets_quantity"].value=docSnap.data().millets_quantity,
    p_info["jute_price"].value=docSnap.data().jute_price,
    p_info["jute_quantity"].value=docSnap.data().jute_quantity,
    p_info["cotton_price"].value=docSnap.data().cotton_price,
    p_info["cotton_quantity"].value=docSnap.data().cotton_quantity
  }

      p_info.addEventListener("submit",async(e)=>{
        e.preventDefault();
      const farmerRef = doc(db, "farmer", user.email);
      // const cropRef=doc(db, "crop", user.email)
    //  console.log(p_info["input1"].value)
    //  console.log(p_info["input3"].value)
    //  console.log(p_info["input4"].value)
      if(p_info["input1"].value!=" " && p_info["input2"].value==user.email && (p_info["input3"].value.length)==10 && p_info["input4"]!="" && p_info["input5"]!="")
     { await updateDoc(farmerRef, {
        name:p_info["input1"].value,
        phone_number:p_info["input3"].value,
        State:p_info["input4"].value,
        City:p_info["input5"].value,
        wheat_price:p_info["wheat_price"].value,
        wheat_quantity:p_info["wheat_quantity"].value,
        rice_price:p_info["rice_price"].value,
        rice_quantity:p_info["rice_quantity"].value,
        maize_price:p_info["maize_price"].value,
        maize_quantity:p_info["maize_quantity"].value,
        millets_price:p_info["millets_price"].value,
        millets_quantity:p_info["millets_quantity"].value,
        jute_price:p_info["jute_price"].value,
        jute_quantity:p_info["jute_quantity"].value,
        cotton_price:p_info["cotton_price"].value,
        cotton_quantity:p_info["cotton_quantity"].value
        
  });
//   await updateDoc(cropRef, {

    
// });
// console.log(farmerRef)
            
  alert("updated")
  const docSnap=await getDoc(farmerRef);
  // const docSnap2=await getDoc(cropRef);
  if(docSnap.exists()){
    // console.log(docSnap.data())
    p_info["input1"].value=docSnap.data().name,
    p_info["input2"].value=docSnap.data().email,
    p_info["input3"].value=docSnap.data().phone_number,
    p_info["input4"].value=docSnap.data().State,
    p_info["input5"].value=docSnap.data().City,
    p_info["wheat_price"].value=docSnap.data().wheat_price,
    p_info["wheat_quantity"].value=docSnap.data().wheat_quantity,
    p_info["rice_price"].value=docSnap.data().rice_price,
    p_info["rice_quantity"].value=docSnap.data().rice_quantity,
    p_info["maize_price"].value=docSnap.data().maize_price,
    p_info["maize_quantity"].value=docSnap.data().maize_quantity,
    p_info["millets_price"].value=docSnap.data().millets_price,
    p_info["millets_quantity"].value=docSnap.data().millets_quantity,
    p_info["jute_price"].value=docSnap.data().jute_price,
    p_info["jute_quantity"].value=docSnap.data().jute_quantity,
    p_info["cotton_price"].value=docSnap.data().cotton_price,
    p_info["cotton_quantity"].value=docSnap.data().cotton_quantity
  }
     }
  
else{
  alert("Please recheck your personal information ");
}

})
    
  }
});



