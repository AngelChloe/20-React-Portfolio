  import React from 'react';
  import Project from '../Project';
  import WeatherDashBoard from '../../assets/WeatherDashBoard.png';
  import TeamProfileGenerator from '../../assets/TeamProfileGenerator.png';
  import WorkdayScheduler from '../../assets/WorkdayScheduler.png';
  import CurrencyExchange from '../../assets/CurrencyExchange.png';
  import TechBlog from '../../assets/TechBlog.png';
  import GetRoutesProductTest from '../../assets/GetRoutesProductTest.png';


const projectCard = [

  {
    deployedLink: "https://cinderbeast.github.io/server-side-APIs-Weather-Dashboard/",
    imageIcon: "WeatherDashBoard.png",
    descriptionImage: WeatherDashBoard,
    projectName: "Weather Dashboard",
    projectDescription: "An application that lets the user see the current weather and forecast for the next 5 days.",
    githubLink: "https://github.com/Cinderbeast/server-side-APIs-Weather-Dashboard",
    id: 1
  },
  {
    deployedLink: "https://drive.google.com/file/d/1a9aIqdw6jlwDVTfykX16EG8nZt6aWsQ3/view",
    imageIcon: "TeamProfileGenerator.png",
    descriptionImage: TeamProfileGenerator,
    projectName: "Team Profile",
    projectDescription: "An application that helps you keep track of your employees profile.",
    githubLink: "https://github.com/Cinderbeast/Team-Profile-Generator",
    id: 2
  },
  {
    deployedLink: "https://cinderbeast.github.io/Third-Party-APIs-Workday-Scheduler/",
    imageIcon: "WorkdayScheduler.png",
    descriptionImage: WorkdayScheduler,
    projectName: "Workday Scheduler",
    projectDescription: "An application that allows the user to see their appointments for the day color coding times by past, present, and future events.",
    githubLink: "https://github.com/Cinderbeast/Third-Party-APIs-Workday-Scheduler",
    id: 3
  },
  {
    deployedLink: "https://logan2391.github.io/Currency-Exchange/",
    imageIcon: "CurrencyExchange.png",
    descriptionImage: CurrencyExchange,
    projectName: "Currency Exchange Locator Team Project",
    projectDescription: "Converts selected currency to desired currency in the preferred amount.  Displays locations nearby to exchange currency.",
    githubLink: "https://github.com/Logan2391/Currency-Exchange",
    id: 4
  },
  {
    deployedLink: "https://blooming-shore-85267.herokuapp.com/",
    imageIcon: "TechBlog.png",
    descriptionImage: TechBlog,
    projectName: "Tech Blog",
    projectDescription: " Application that allows developers to write about tech in CMS-style blog site.  User wil be able publish articles, blog posts, thoughts and opinions.",
    githubLink: "https://github.com/Cinderbeast/14-Model-View-Controller-MVC-Tech-Blog",
    id: 5
  },
  {
    deployedLink: "https://drive.google.com/file/d/18WWQQKblRJP7qggZcz-lnyMHr0n5vKH6/view",
    imageIcon: "GetRoutesProductTest.png",
    descriptionImage: GetRoutesProductTest,
    projectName: "E-commerce",
    projectDescription: "A back-end e-commerce site that uses the latest technologies to compete with other e-commerce companies.",
    githubLink: "https://github.com/Cinderbeast/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End",
    id: 6
  }
 
];

function Portfolio() {
  return (
    <div>
      {projectCard.map((project ) => (
        <Project project = { project } /> ))}
    </div>
  )
};
  
  export default Portfolio;