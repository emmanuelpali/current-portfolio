import curry from '../images/curry.png';
import movie from '../images/movie.png';
import epTheme from '../images/epTheme.png';

const portfolioContent = [
    { 
        id:1,
        thumb: curry,
        alt: "",
        appName: "Curry&Proud",
        description: "This application is still being developed. At this stage, using the credentials provided, users are able to login, shop and complete payment using PayPal. The completed application should allow buyers create accounts, shop and much more. To login now, use: somethingsomething@gmail.com for the email field and 4321 as the password. to test PayPal: sb-0qky66219908@personal.example.com password O>16Q|n3", 
        shortDescription: "This is a fullstack MERN App. It is hosted for free on Heroku, may take some seconds to load",
        webAddress: "https://curryandproud.herokuapp.com/",

    },
    { 
        id:2,
        thumb: movie,
        alt: "Movie search home page",
        appName: "Sixth Media",
        description: "This is my first React application. It utilises The Movie Database API to allow users search for movies. Users can create a list of their favourite movies simply by liking them. It utilizes local storage.",
        shortDescription: "This is a Movies search application ",
        webAddress: "https://www.paliemmanuel.com/movie-search/",

    },
    { 
        id:3,
        thumb: epTheme,
        alt: "",
        appName: "Whistler",
        description: "In web development wordpress has a good market share, here I have put my PHP knowlegde in good news. It started as plain HTML, CSS and javaScript before converting it to a wordpress theme.",
        shortDescription: "This is a custom wordpress theme",
        webAddress: "https://www.paliemmanuel.com/epTheme",

    },


]

export default portfolioContent