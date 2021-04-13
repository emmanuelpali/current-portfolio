import React from 'react';
import'../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Do you have an idea you want to work on? Let's Connect</p>
            <div className="contact">
                <a href="mailto:emmanuel@paliemmanuel.com" rel="noreferrer" target="_blank"><i className="fa fa-envelope">   email</i></a>
                <a href="https://ca.linkedin.com/in/emmanuel-n-pali-a73b9b86" rel="noreferrer" target="_blank"><i className="fa fa-linkedin">  linkedIn</i></a>
                <a href="https://github.com/Thesixth" rel="noreferrer" target="_blank"><i className="fa fa-github-square">   gitHub</i></a>
            </div> 
        </div>
    )
}

export default Footer
