import React from 'react';
import './Contact.css';
import {useState} from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';



function Contact() {
  const [userName, setName]= useState('');
  const [userEmail, setEmail]= useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage]= useState('');
  const sent = "Email Sent! Please allow up to 24 hours for a response";


  console.log(userName, userEmail, phone, message, " here");


  const sendEmail = (e) => {
    e.preventDefault();
    if(!userName || !userEmail || !phone || !message){
      console.log("user is missing input fields")
      swal({
        icon: "error",
        text: "Please complete all fields"
      });
    }
    else{
    emailjs.sendForm('service_ztd1adp', 'template_x3nakci', e.target, 'user_scLGKaDBeC0iWgGw5KidR')
      .then((result) => {
          console.log("result success", result.text);
      }, (error) => {
          console.log("error verifyEmail", error.text);
      });
    console.log("name", userName);
    console.log("email", userEmail);
    console.log("message", message);
    swal({
        icon: "success",
        text: sent
      });
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    }
  }



  const instagram = () => {
    window.open("https://www.instagram.com/lauren.bruun_bryant/")
  }

  const linkedin = () => {
    window.open("https://www.instagram.com/lauren.bruun_bryant/")
  }
  return (
    <div class="container">
    <span class="big-circle"></span>
    <img src="img/shape.png" class="square" alt="" />
    
    <div class="form">
    <i class="fas fa-adjust"></i>
      <div class="contact-info">
        <h3 class="title">Let's get in touch</h3>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>
        <div class="info">
          <div class="information">
            <img src="img/location.png" class="icon" alt="" />
            <p>
              Plymouth, Minnesota
            </p>
          </div>
          <div class="information">
            <img src="img/email.png" class="icon" alt="" />
            <p>lbruunbryant@gmail.com</p>
          </div>
          <div class="information">
            <img src="img/phone.png" class="icon" alt="" />
            <p>952.484.7331</p>
          </div>
        </div>

        <div class="social-media">
          <p>Connect with us :</p>
          <div class="social-icons">
            <a href="h">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#"
              onClick={instagram}>
            </a>
            <a href="#"
              onClick={linkedin}>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form 
          onSubmit={sendEmail}>
          <h3 class="title">Contact us</h3>
          <div class="input-container">
            <input 
              type="text" 
              name="name" 
              className="input"
              value={userName} 
              onChange={(event) => setName(event.target.value)}
              />
            <label for="">Username</label>
            <span>Username</span>
          </div>
          <div class="input-container">
            <input 
              type="email" 
              name="email" 
              class="input"
              value={userEmail}
              onChange={(event) => setEmail(event.target.value)}
              />
            <label for="">Email</label>
            <span>Email</span>
          </div>
          <div class="input-container">
            <input 
              type="tel" 
              name="phone" 
              class="input" 
              value={phone}
              onChange={(event) => setPhone(event.target.value)}/>
            <label for="">Phone</label>
            <span>Phone</span>
          </div>
          <div class="input-container textarea">
            <textarea 
              name="message" 
              class="input"
              value={message}
              onChange={(event) => setMessage(event.target.value)}>
            </textarea>
            <label for="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" class="btn" />
        </form>
      </div>
    </div>
  </div>

  )
}

export default Contact
