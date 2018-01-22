import React from 'react';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaIg from 'react-icons/lib/fa/instagram';
import FaGit from 'react-icons/lib/fa/github-square';
const Footer = () => {
    return(
        <div className="footer">
        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Contact Info</h5>
              <p className="grey-text text-lighten-4">5th Floor, 53 Middle Abbey Street, Dublin 1, Ireland</p>
              <p className="grey-text text-lighten-4">Phone no: +363 86-844-1277</p>
              <p className="grey-text text-lighten-4">Gmail: dakdon40@gmail.com</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Stay Tuned</h5>
              <ul>
                <div className="col s3"> 
                    <a className="btn-floating btn-large waves-effect waves-light red" href="https://www.linkedin.com/in/yotsaphon-sutweha-00702712b/"><i className="fa-5x"><FaLinkedIn /></i></a>
                </div>
                <div className="col s3"> 
                    <a className="btn-floating btn-large waves-effect waves-light red" href="https://www.facebook.com/yotsaphon.sutweha?ref=bookmarks"><i className="fa-5x"><FaFacebook /></i></a>
                </div>
                <div className="col s3"> 
                    <a className="btn-floating btn-large waves-effect waves-light red" href="https://www.instagram.com/aoff_ys/?hl=en"><i className="fa-5x"><FaIg /></i></a>
                </div>
                <div className="col s3"> 
                    <a className="btn-floating btn-large waves-effect waves-light red" href="https://github.com/oofdon2540"><i className="fa-5x"><FaGit /></i></a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
}

export default Footer;