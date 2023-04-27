import newport from "../images/newPortfolio.png";
import reactPortImg from "../images/react.png";
import InlandImg from "../images/InlandMarina.png";
import mystocks from "../images/mystocks.png";
import kenyansImg from "../images/kenyans.png";
import touchofAfricaImg from "../images/touch.png";

const portfolioContent = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    thumb: mystocks,
    alt: "",
    appName: "Watch List",
    description:
      "This is a React project that I created to display real-time stock prices. I was able to retrieve the latest stock data and visualize it in an easy-to-read format. A user can see whether a selected stock price had increased or decreased since the previous day. Through this project, I gained valuable experience in working with APIs and manipulating data.",
    shortDescription:
      "This app was built using React and is hosted on github pages.",
    webAddress: "https://emmanuelpali.github.io/mystocks/",
  },
  {
    id: 5,
    thumb: kenyansImg,
    alt: "",
    appName: "KENBC",
    description:
      "This project involved working closely with two other individuals. Despite the occasional disagreements, we were able to maintain our friendships and work towards a common goal, which was to create a website that met the needs of the community. In addition to the technical skills involved in building the website, I also learned valuable lessons about communication, collaboration, and conflict resolution.",
    shortDescription:
      "A Client's Website developed using Wordpress.",
    webAddress: "https://kenyacommunitybc.org",
  },
  {
    id: 6,
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
