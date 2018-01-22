import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/navbar.js';
import About from './components/about.js';
import Work from './components/projects.js';
import Experience from './components/experience.js';
import Footer from './components/footer.js';
import Contact from './components/contact.js';

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
