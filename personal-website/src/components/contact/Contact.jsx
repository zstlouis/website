import React, { useEffect, useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact = () => {
    const [senderName, setSenderName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
   
      const [errors, setErrors] = useState({
        senderName: '',
        email: '',
        message: ''
    })
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
           if (validateForm()) {
            const sender = { senderName, email, message }
            console.log(sender)
            emailjs
            .sendForm('service_g0i7yl8', 'template_wvrqhxb', form.current, {
                publicKey: 'qJqgQ5kE28TVJQZVA',
            })
            .then(
                () => {
                    toast('Email Sent!');
                },
                (error) => {
                    console('Email not Sent.', error.text);
                },
            );
        } else{
            toast('Missing required fields.')
        }
        // emailjs
        //     .sendForm('service_g0i7yl8', 'template_wvrqhxb', form.current, {
        //         publicKey: 'qJqgQ5kE28TVJQZVA',
        //     })
        //     .then(
        //         () => {
        //             toast('Email Sent!');
        //         },
        //         (error) => {
        //             console.log('Email not Sent.', error.text);
        //         },
        //     );
    };

    function handleSenderName(e){
        setSenderName(e.target.value)
    }
     function handleEmail(e){
        setEmail(e.target.value)
    }
     function handleSubject(e){
        setSubject(e.target.value)
    }
     function handleMessage(e){
        setMessage(e.target.value)
    }



     function validateForm() {
        let valid = true

        const errorsCopy = { ...errors }

        if (senderName.trim()) {
            errorsCopy.senderName = ''
        } else {
            // errorsCopy.senderName = 'Name field is required.'
            valid = false
        }

        if (email.trim()) {
            errorsCopy.email = ''
        } else {
            // errorsCopy.email = 'Email field is required.'
            valid = false
        }

        if (message.trim()) {
            errorsCopy.message = ''
        } else {
            // errorsCopy.message = 'Message field is required.'
            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }



    return (
        <section className="contact container section" id='contact'>
            <h2 className="section_title">Contact</h2>
            <div className="contact_container grid">
                <div className="div contact_info">
                    {/* <h3 className="contact_title">Let's Talk</h3> */}
                    {/* <p className="contact_detai">Send an Email.</p> */}
                </div>
                <form ref={form} action="" className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input 
                            type="text" 
                            className="contact_form-input" 
                            placeholder='Insert your name' 
                            name='user_name' 
                            value={senderName}
                            onChange={handleSenderName}
                            />
                        </div>

                        <div className="contact_form-div">
                            <input type="email" 
                            className="contact_form-input" 
                            placeholder='Insert your email' 
                            name='user_email' 
                            value={email}
                            onChange={handleEmail}
                            />
                        </div>
                    </div>
                    <div className="contact_form-div">
                        <input type="text" 
                        className="contact_form-input" 
                        placeholder='Insert your subject' 
                        name='subject' 
                        value={subject}
                        onChange={handleSubject}
                        />
                    </div>
                    <div className="contact_form-div contact_form-area">
                        <textarea 
                        cols="30" 
                        rows="10" 
                        className="contact_form-input" 
                        placeholder='Enter your message' 
                        name='message'
                        value={message}
                        onChange={handleMessage}
                        
                        ></textarea>
                    </div>
                    <ToastContainer />
                    <button onClick={sendEmail} className="btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact