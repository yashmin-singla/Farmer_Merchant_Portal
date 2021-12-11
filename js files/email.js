
  const contact_information =document.getElementById("contact_info")
//   document.querySelector(".contact_form").addEventListener("submit", submitForm);
  
  function submitForm() {

    var email1 = contact_information["email1"].value;
    var email2 = contact_information["email2"].value;
    var message = contact_information["message"].value;
    console.log(email1, email2, message);
  
    // saveContactInfo(email1, email2, message);
    document.getElementById("contact_info").reset();
    // document.querySelector(".contact-form").reset();
    sendEmail(email1,email2,message);
  }
  


  function sendEmail(email1,email2,message){
      Email.send({
          Host:"smtp.gmail.com",
          Username:`${email1}`,
          Password:"yoisfbrzqfwnwbdg",
          To:`${email2}`,
          From:`${email1}`,
          Subject:`${email1} sent you a message`,
          Body:`Email 📩: ${email1} <br/> Message: ${message}`
      }).then((message)=>alert("mail sent successfully"))
  }