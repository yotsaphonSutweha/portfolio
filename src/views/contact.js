import React from 'react';

const Contact = () => {
    return(
        <div className="container contact">
            <div className="row">
                <div className="col m6 offset-m6">
                    <h4 id="contact">Keep updated</h4>
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
            <div className="row">
                <div className="col m12">
                <div className="input-field col s12">
                <form method="POST" action="https://formspree.io/komsan_58@hotmail.com">
                    <input type="email" name="email" placeholder="Your email"></input>
                    <textarea name="message" class="materialize-textarea email-area" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;