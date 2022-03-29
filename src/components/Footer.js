import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>Do you have an idea you want to work on? Let's Connect</p>
      <div className="contact">
        <a
          href="mailto:paliemmanuel@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-envelope"> email</i>
        </a>
        <a
          href="https://linkedin.com/in/emmanuelpaliwebdeveloper"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin"> linkedIn</i>
        </a>
        <a href="https://github.com/Thesixth" rel="noreferrer" target="_blank">
          <i className="fab fa-github-square"> gitHub</i>
        </a>
      </div>
      <a
        href="https://linkedin.com/in/emmanuelpaliwebdeveloper"
        rel="noreferrer"
        target="_blank"
      >
        &copy; Emmanuel Pali 2022
      </a>
    </div>
  );
};

export default Footer;
