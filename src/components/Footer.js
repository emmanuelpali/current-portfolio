import React from 'react';
import'../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Let's Connect</p>
            <div className="contact">
                <a href="mailto:emmanuel@paliemmanuel.com" target="_blank" rel="noopener noreferrer">email</a>
                <a href="https://ca.linkedin.com/in/emmanuel-n-pali-a73b9b86" rel="noreferrer" target="_blank"><i className="fa fa-linkedin">  linkedIn</i></a>
                <a href="https://github.com/Thesixth" rel="noreferrer" target="_blank"><i className="fa fa-github-square">   gitHub</i></a>
            </div> 
        </div>
    )
}

export default Footer
