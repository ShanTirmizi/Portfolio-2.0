import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact' id='NavContact'>
            <from className="contact__title">
                <h2>Get in touch</h2>
                <div className="contact__title__name">
                    <label>Name</label>
                    <input type='text' placeholder='Name' />
                </div>
                <div className="contact__title__email">    
                    <label>Email</label>
                    <input placeholder='Email' />
                </div>
                <div className="contact__title__message">
                    <label>Message</label>
                    <textarea placeholder='Message'></textarea>
                </div>
                <button className='contact__title__button' type='submit'>Submit</button>
            </from>
        </div>
    )
}

export default Contact
