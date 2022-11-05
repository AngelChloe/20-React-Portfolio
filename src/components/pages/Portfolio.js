import React from 'react';
import Project from '../../components/Project';


const projectCard = [

 {
    deployedLink: "https://cinderbeast.github.io/Team-Profile-Generator/",
    imageIcon: "TeamProfileGenerator.png",
    descriptionImage: "Profile Cards",
    projectName: "Team Profile",
    projectDescription: "An application that helps you keep track of your employees profile.",
    githubLink: "https://github.com/Cinderbeast/Team-Profile-Generator",
    id: 2
  },
  {
    deployedLink: "https://cinderbeast.github.io/Third-Party-APIs-Workday-Scheduler/",
    imageIcon: "Daily-Planner-Blank.png",
    descriptionImage: "Work Schedule",
    projectName: "Daily Work Planner",
    projectDescription: "An application that allows the user to see their appointments for the day color coding times by past, present, and future events.",
    githubLink: "https://github.com/Cinderbeast/Third-Party-APIs-Workday-Scheduler",
    id: 3
  },
  {
    deployedLink: "https://cinderbeast.github.io/server-side-APIs-Weather-Dashboard/",
    imageIcon: "WeatherDashboard.png",
    descriptionImage: "Weather Dashboard",
    projectName: "Weather Dashboard",
    projectDescription: "An application that lets the user see the current weather and the forecast for the next 5 days.",
    githubLink: "https://github.com/Cinderbeast/server-side-APIs-Weather-Dashboard",
    id: 4
  },
  {
    deployedLink: "https://vbarajas4.github.io/03-HW-Password-Generator/",
    imageIcon: "Password-Generator-SS.png",
    descriptionImage: "Password Generator",
    projectName: "Password Generator",
    projectDescription: "An application that generates a random password for a user based on the criteria selected.",
    githubLink: "https://github.com/Cinderbeast/3-JavaScript-Password-Generator",
    id: 5
  }
 
];

function Portfolio() {
    return (
      <div>
        {projectCard.map((project ) => (
          <Project project = { project } />
        ))}
      </div>
    )
  };
  
  export default Portfolio;