import React from "react";
import Typical from "react-typical";

class Intro extends React.Component {
  render() {
    return (
      <div className="styleTypical">
        <Typical
          steps={[
            "Bonjour! je suis Emmanuel",
            1000,
            "Hello! I'm Emmanuel",
            1000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
    );
  }
}

export default Intro;
