import curry from '../images/curry.png';
import trucking from '../images/trucking-home.png';

const portfolioContent = [
    { 
        id:1,
        thumb: trucking,
        alt: "",
        appName: "Dispatch",
        description: "This application is still being developed. It is a web app that a trucking company can use to create and send dispatches to it's drivers. I integrated Twilio to send text messages as dispatches to the driver", 
        shortDescription: "This is a fullstack MERN App. The code can be viewed on github",
        webAddress: "https://github.com/Thesixth/mern-dispatch",

    },
    { 
        id:3,
        thumb: curry,
        alt: "",
        appName: "Curry&Proud",
        description: "This application is still being developed. At this stage, using the credentials provided, users are able to login, shop and complete payment using PayPal. The completed application should allow buyers create accounts, shop and much more. To login now, use: somethingsomething@gmail.com for the email field and 4321 as the password. to test PayPal: sb-0qky66219908@personal.example.com password O>16Q|n3", 
        shortDescription: "This is a fullstack MERN App. The code can be viewed on github",
        webAddress: "https://github.com/Thesixth/mernShop",

    },


]

export default portfolioContent