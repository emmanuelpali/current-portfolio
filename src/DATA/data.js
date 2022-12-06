import nextStore from "../images/nextstore.png";
import liquidSix from "../images/liquidSix.png";
import vanhike from "../images/vanhike.png";
import stocks from "../images/stocks.png";

const portfolioContent = [
  {
    id: 2,
    thumb: stocks,
    alt: "",
    appName: "Watch List",
    description:
      "For this react application, I explored the use of apexcharts to display stock data. In deploying this application, I learnt that Browser router does not work with github pages. Instead, HashRouter is used",
    shortDescription:
      "This app was built using React and is hosted on github pages.",
    webAddress: "https://emmanuelpali.github.io/mystocks/",
  },
  {
    id: 1,
    thumb: vanhike,
    alt: "",
    appName: "VanHike",
    description:
      "Vanhike was developed with Node. I explored EJS as the view engine. Used passport for authentication, cloudinary for image uploads, Mapbox etc. I will keep working on the application design and also make it more secure. The application is hosted on heroku for free. Loading may take some seconds",
    shortDescription:
      "An Express web application that allows users to share their hiking experiences and images.",
    webAddress: "https://github.com/emmanuelpali/vanhike",
  },
  {
    id: 3,
    thumb: nextStore,
    alt: "",
    appName: "Lightly",
    description:
      "This is an e-commerce website that sells used funiture and accessories. I used this project to get a better understancing of Nextjs, React-toast and context",
    shortDescription:
      "The application was developed and designed using Nextjs, Tailwind CSS and MongoDB.",
    webAddress: "https://nextjs-store-dt5036yaf-thesixth.vercel.app/",
  },
  {
    id: 4,
    thumb: liquidSix,
    alt: "",
    appName: "Liquid Six",
    description:
      "This is a restaurant design I intend to show prospective client when freelancing. I enjoyed working on this because it gave me the opportunity to explore my creative and writing skills.",
    shortDescription:
      "The application was developed and designed using React, Node, Bootstrap and SASS. It is hosting on Heroku",
    webAddress: "https://github.com/emmanuelpali/liquidSix-front",
  },
];

export default portfolioContent;
