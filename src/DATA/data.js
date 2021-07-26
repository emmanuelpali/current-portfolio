import trucking from '../images/trucking-home.png';
import movie from '../images/movie.png';
import epTheme from '../images/epTheme.png';

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