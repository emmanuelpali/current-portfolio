import newport from "../images/newPortfolio.png";
import travel from "../images/travel.png";
import movies from "../images/movies.png";
import reactPortImg from "../images/react.png";
import InlandImg from "../images/InlandMarina.png";
import touchofAfricaImg from "../images/touch.png";

const portfolioContent = [
  {
    id: 1,
    thumb: movies,
    alt: "",
    appName: "Movies App",
    description:
      `Users can fetch popular movies by clicking a button on page load. RapidAPI's API is being used to get movies' data. The hosted application is automatically redeployed from my GitHub repository with each
      new push, as part of the CI/CD process. This was a one-day project for an internship assessment, developed according to the
      provided employer specifications`,
    shortDescription:
      "This is a React application that fetches data from a public data using an API",
    webAddress: "https://movies-mu-sand.vercel.app/",
  },
  {
    id: 2,
    thumb: travel,
    alt: "",
    appName: "Travel Experts",
    description:
      `For this .NET MVC application using Microsoft SQL Server and SQL, I led database scaffolding, design, and styling while also providing support to my team. Blended the flexibility of CSS with the ease-of-use of Bootstrap, resulting in a captivating and
      responsive web application`,
    shortDescription:
      `Collaborated with a team of 4 to build a dynamic .NET MVC application.`,
    webAddress: `https://github.com/emmanuelpali/TravelExperts-2`,
  },
  {
    id: 3,
    thumb: newport,
    alt: "",
    appName: "HTML In Motion",
    description:
      "This Portfolio site was developed using HTML, CSS, Bootstrap, and Vanilla JavaScript. It is hosted on GitHub and published using GitHub pages. Github helps with continous integration and deployment",
    shortDescription:
      "This was an assignment but I decided to have fun with it using CSS and Javascript animations",
    webAddress: "https://emmanuelpali.github.io/newPortfolio/",
  },
  {
    id: 4,
    thumb: InlandImg,
    alt: "",
    appName: "Inland Marina",
    description:
      "This application is developed using the SOLID principles of design. The code is available on github.",
    shortDescription:
      "C# MVC application.",
    webAddress: "https://github.com/emmanuelpali/InlandMarina",
  },
 
  {
    id: 5,
    thumb: touchofAfricaImg,
    alt: "",
    appName: "E-Commerce Store",
    description:
      "I set up this freelance project for a client in Vancouver. Through this experience, I learned that even with the availability of technology, clients may have preferences for what they are accustomed to.",
    shortDescription:
      "A client's store set up on shopify",
    webAddress: "https://touchofafrica.ca/",
  },
  {
    id: 8,
    thumb: reactPortImg,
    alt: "",
    appName: "React Portfolio",
    description:
      "My Website, developed using the React library. In addition to showcasing my love for the color blue, I experimented with a new navigation design style. For continuous integration, AWS Amplify is connected to my git-hub repository. I used React-router, CSS loaders and SASS and Bootstrap.",
    shortDescription:
      "My Portfolio is built with React It is hosted on AWS",
    webAddress: "https://www.paliemmanuel.com/",
  },
 
];

export default portfolioContent;
