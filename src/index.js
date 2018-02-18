import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './views/navbar.js';
import About from './views/about.js';
import Work from './views/projects.js';
import Experience from './views/experience.js';
import Footer from './views/footer.js';
import Contact from './views/contact.js';


class App extends Component{
  
    render(){
        return (  
            <div>
                
                <NavBar />
                <About />
                <Work />
                <Experience />
                <Contact />
                <Footer />

            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.body'));
registerServiceWorker();
