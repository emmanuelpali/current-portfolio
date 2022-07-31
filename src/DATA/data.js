import spacewindow from "../images/spacewindow.png";
import liquidSix from "../images/liquidSix.png";
import vanhike from "../images/vanhike.png";
import students from "../images/students.png";

const portfolioContent = [
  {
    id: 3,
    thumb: liquidSix,
    alt: "",
    appName: "Liquid Six",
    description:
      "This is a restaurant design I intend to show prospective client when freelancing. I enjoyed working on this because it gave me the opportunity to explore my creative and writing skills.",
    shortDescription:
      "The application was developed and designed using React, Node, Bootstrap and SASS. It is hosting on Heroku",
    webAddress: "https://protected-ridge-51693.herokuapp.com",
  },
  {
    id: 4,
    thumb: vanhike,
    alt: "",
    appName: "VanHike",
    description:
      "Vanhike was developed with Node. I explored EJS as the view engine. Used passport for authentication, cloudinary for image uploads, Mapbox etc. I will keep working on the application design and also make it more secure. The application is hosted on heroku for free. Loading may take some seconds",
    shortDescription:
      "An Express web application that allows users to share their hiking experiences and images.",
    webAddress: "https://vanhike.herokuapp.com/",
  },
  {
    id: 1,
    thumb: spacewindow,
    alt: "",
    appName: "Space Window",
    description:
      "The application displays 12 images from NASA's apod API. Users are able to like and unlike images. A user can go pick a date to view images taken before that day.",
    shortDescription:
      "This react application has been published using git-hub pages",
    webAddress: "https://thesixth.github.io/spacewindow/",
  },
  {
    id: 2,
    thumb: students,
    alt: "",
    appName: "Class-List",
    description:
      "User's are able to search for members by name. Add tags to individual class members and view member grades",
    shortDescription: "This is a React application hosted on AWS",
    webAddress: "https://master.d1w2t2e2vja4em.amplifyapp.com/",
  },
  
];

export default portfolioContent;
