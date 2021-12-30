import curry from '../images/curry.png';
import trucking from '../images/trucking-home.png';
import kenbc from '../images/wordpress.png';

const portfolioContent = [
    { 
        id:1,
        thumb: trucking,
        alt: "",
        appName: "Dispatch",
        description: "This is a web app that a trucking company can use to create and send dispatches to it's drivers. I integrated Twilio to send text messages as dispatches to the driver", 
        shortDescription: "This is a fullstack MERN App. The code can be viewed on github",
        webAddress: "https://github.com/Thesixth/mern-dispatch",

    },
    { 
        id:2,
        thumb: kenbc,
        alt: "",
        appName: "KENBC",
        description: "For this web application, I used elementor to make it easy for the community members to customize the website without relying on me to maintain every little detail. ",
        shortDescription: "This is a wordpress application built for a community in BC",
        webAddress: "https://kenyacommunitybc.org/",

    },
    { 
        id:3,
        thumb: curry,
        alt: "",
        appName: "Curry&Proud",
        description: "This application is still being developed. It is an E-commerce site",
        shortDescription: "This is a fullstack MERN App. The code can be viewed on github",
        webAddress: "https://github.com/Thesixth/mernShop",

    },


]

export default portfolioContent