import spacewindow from "../images/spacewindow.png";
import trucking from "../images/trucking-home.png";
import kenbc from "../images/wordpress.png";
import students from "../images/students.png";

const portfolioContent = [
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
  {
    id: 3,
    thumb: trucking,
    alt: "",
    appName: "Dispatch",
    description:
      "This is a web app that a trucking company can use to create and send dispatches to it's drivers. I integrated Twilio to send text messages as dispatches to the driver",
    shortDescription:
      "This is a fullstack MERN App. The code can be viewed on github",
    webAddress: "https://github.com/Thesixth/mern-dispatch",
  },
  {
    id: 4,
    thumb: kenbc,
    alt: "",
    appName: "KENBC",
    description:
      "For this web application, I used elementor to make it easy for the community members to customize the website without relying on me to maintain every little detail. ",
    shortDescription:
      "This is a wordpress application built for a community in BC",
    webAddress: "https://kenyacommunitybc.org/",
  },
];

export default portfolioContent;
