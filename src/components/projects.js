import React from 'react';

const Work = () => {
    return (
        <div>
            
            <div className="container row-bottom">
                <div className="row">
                    <h2 className="col s12">Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col s12 m12 l4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Ticket Exchange</span>
                                <p>For my college 2nd year Java project, I was part of a project team responsible in creating an application
                                 called Ticket Exchange. Ticket Exchange is an application created by using Java language, its functionality is to allow users
                                 to select a sport game and seat. The IDE our team used was Netbeans. 
                                </p>
                             </div>
                            <div className="card-action">
                                <a href="https://github.com/oofdon2540/The-Ticket-Exchange"><i className="sm material-icons">insert_link</i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col s12 m12 l4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Stop Saver</span>
                                <p>I was part of a team developing a Rich Application Website called Stop Saver for my college 2nd year Web Application Module.
                                 The web application is embeded with full CRUD functionality and Dublin Bus api. The main languages that we implemented were
                                 PHP, jQuerry and Ajax.
                                 </p>
                            </div>
                            <div className="card-action">
                                <a href="https://github.com/joshuacassidy/Stop-Saver"><i className="sm material-icons">insert_link</i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m12 l4 ">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Thai Healing </span>
                                <p>For my first year Web Design porject, I created a simple website for my family business using 
                                simple html, css, boostrap and JavaScript. The website is pretty much static, it was the first website I have ever created which eventually exposing myself to programming and web development.
                                </p>
                            </div>
                            <div className="card-action">
                            <a href="https://github.com/oofdon2540/webDesignProject2016"><i className="sm material-icons">insert_link</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div> 
    );
}

export default Work;