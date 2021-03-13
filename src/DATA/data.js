import movie from '../images/movie.png';
import library from '../images/library.png';
import Todo from '../images/to-do-list.png';

const portfolioContent = [
    
    { 
        id:1,
        thumb: library,
        alt: "Library home page",
        appName: "Online Library",
        description: "After completing my front-end development program at BCIT, I met with a client who wanted an ERP system. I was positive that with a bit more study Emmanuel can develop the application for them. That was why I looked into developing an application like this.",
        shortDescription: "This is a basic CRUD application developed using Express, Node.js, Pug(Jade) and MongoDB",
        webAddress: "https://ancient-refuge-27465.herokuapp.com/catalog",

    },
    { 
        id:2,
        thumb: movie,
        alt: "Movie search home page",
        appName: "Sixth Media",
        description: "This is my first React application. It utilises The Movie Database API to allow users search for movies. Users can create a list of their favourite movies simply by liking them. I tried being adventurous by employing stylled components, it worked but it certainly won't be my go to.",
        shortDescription: "React application developed using React as stated, Local Storage and The Movie Database API",
        webAddress: "https://www.paliemmanuel.com/movie-search/",

    },
    { 
        id:3,
        thumb: Todo,
        alt: "Planned page",
        appName: "Planned!",
        description: "The functionality of this application can be applied in developing, online shopping carts, restaurant ordering systems and the likes. This application itself lets you create a list of things to be done. It could be a shopping list, checklist foir your baby sitter etc.",
        shortDescription: "This is another React application that showcases the capabilities of the React framework",
        webAddress: "https://www.paliemmanuel.com/to-do-list",

    },


]

export default portfolioContent