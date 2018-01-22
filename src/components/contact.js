import React from 'react';

const Contact = () => {
    return(
        <div className="container contact">
            <div className="row">
                <div className="col m7">
                <div className="input-field col s12">
                <form method="POST" action="https://formspree.io/komsan_58@hotmail.com">
                    <input type="email" name="email" placeholder="Your email"></input>
                    <textarea name="message" class="materialize-textarea" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </form>
                </div>
                </div>
                <div className="col m5">
                    <h4>Keep updated</h4>
                    <div className="contact-email">
                        <p>Email</p>
                        <p>dakdon40@gmail.com</p>
                    </div>
                    <div className="contact-phone"> 
                        <p>Phone</p>
                        <p>086-844-1277</p>
                    </div>
                    
                </div>
            </div>
        </div>
       
    );
}

export default Contact;