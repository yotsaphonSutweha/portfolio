import React from 'react';
import img from './yo.jpg';


const About = () => {
    return (
        
        <div>
            
                
                    <div>
                    <img src={img} />
                    </div>
              
            
            <div className="container" id="about">
                <div className="row">
                    <h2 className="col s12">About me</h2>
                </div>
                <div className="row">
                    <div className="col s12">
                        <p>
                            My name is Yotsaphon Sutweha, I am 20 years old college students 
                            currently studying BScH in Computing in the National College Of Ireland. I am
                            originally from Thailand, been living in Ireland for nearly 7 years. I personally
                            like challenging and learing new skills to extend my ability to the fullest.
                            At the same time, a good communicator and a teamworker who can adapt to any 
                            environment. Java is my favourite language, I also have experience with
                            html, css, JavaScript, SQL and React.js.
                        </p>
                    </div>
                </div>
            </div>
            
            
            
            
        </div>
    );
}

export default About;