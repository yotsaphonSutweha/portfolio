import React from 'react';
import img from './yo.jpg';
import { Parallax, Background} from 'react-parallax';

const About = () => {
    return (
        
        <div>
            
           
       
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./yo.jpg')}
     
      strength={200}
    >
      
      <div style={{ height: '700px' }} />
    </Parallax>            
              
            
            <div className="container" >
                <div className="row">
                    <h2 className="col s12" id="about">About me</h2>
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