import movie from '../images/movie.png';
import library from '../images/library.png';
import Todo from '../images/to-do-list.png';
import news from '../images/news.png';

const portfolioContent = [
    
    { 
        id:1,
        thumb: movie,
        alt: "Movie search home page",
        appName: "Sixth Media",
        description: "This is my first React application. It utilises The Movie Database API to allow users search for movies. Users can create a list of their favourite movies simply by liking them. I used stylled components.",
        shortDescription: "The application also utilises Local Storage ",
        webAddress: "https://www.paliemmanuel.com/movie-search/",

    },
    { 
        id:2,
        thumb: news,
        alt: "",
        appName: "News Search",
        description: "Here, I worked with the NYT API to create this simple application. Similar to the movie search app, this was intended to give me more exposure to working with a third party API",
        shortDescription: "This is a basic JavaScript app which allows you to search for articles.",
        webAddress: "https://www.paliemmanuel.com/fresh-news",

    },
    { 
        id:3,
        thumb: library,
        alt: "Library home page",
        appName: "Online Library",
        description: "This is my first attempt at understanding backend development.",
        shortDescription: "This is a basic CRUD application developed using Express, Node.js, Pug(Jade) and MongoDB",
        webAddress: "https://ancient-refuge-27465.herokuapp.com/catalog",

    },
    { 
        id:4,
        thumb: Todo,
        alt: "Planned page",
        appName: "Planned!",
        description: "The functionality of this application can be applied in developing, online shopping carts, restaurant ordering systems and the likes. This application itself lets you create a list of things to be done. It could be a shopping list, checklist foir your baby sitter etc.",
        shortDescription: "This is another React application that showcases the capabilities of the React framework",
        webAddress: "https://www.paliemmanuel.com/to-do-list",

    },


]

export default portfolioContent