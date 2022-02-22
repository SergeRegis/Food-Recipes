import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${ PizzaLeft })` }}></div>
            <div className='rightSide'>
                <h1> Contact Us </h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor='name'>Full Name</label>
                    <input type="text" name='name' placeholder='Enter full name...' />

                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder='Enter email...' />

                    <label htmlFor='message'>Messages</label>
                    <textarea cols="30" rows="10" placeholder='Enter message...' name='message' required></textarea>
                    <button type='submit'> Send Message </button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;

