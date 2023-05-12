import weathericon from "../img/project_icons/weathericon.png";
import tictactoeicon from "../img/project_icons/tictactoeicon.png";
import alarmclockicon from "../img/project_icons/alarmclockicon.png";
import brainreadericon from "../img/project_icons/brainreadericon.png";
import todolisticon from "../img/project_icons/todolisticon.png";
import restauranticon from "../img/project_icons/restauranticon.png";
import budgeticon from "../img/project_icons/budgeticon.png";
import sqlheroicon from "../img/project_icons/sqlheroicon.png";
import djangojamsicon from "../img/project_icons/djangoJamsIcon.png";
import wildsteppe from "../img/project_icons/wildsteppe.png";

export default function Projects() {
  let projects = [
    {
      title: "Weather App",
      week: "One",
      stack: "Javascript, API",
      about:
        "What's the weather? Check out my project using javascript calling an API to get your weather!",
      siteLink: "https://mkrs90.github.io/weather-app/",
      repoLink: "https://github.com/mkrs90/weather-app",
      imgscr: weathericon,
      imgalt: "Weather App",
    },
    {
      title: "Tic-Tac-Toe Game",
      week: "two",
      stack: "Javascript",
      about:
        "Up for a game of Tic-Tak-Toe? Check out my project using only javascript and play a childhood classic game!",
      siteLink: "https://mkrs90.github.io/tic-tac-toe/",
      repoLink: "https://github.com/mkrs90/tic-tac-toe",
      imgscr: tictactoeicon,
      imgalt: "Tic-tac-toe App",
    },
    {
      title: "Mind Reader Game",
      week: 'three',
      stack: "Javascript",
      about:
        "This app can read your mind. Check it out and see if you can beat it.",
      siteLink: "https://mkrs90.github.io/mind-reader/",
      repoLink: "https://github.com/mkrs90/mind-reader",
      imgscr: brainreadericon,
      imgalt: "Mind Reader Game",
    },
    {
      title: "Alarm Clock",
      week: "four",
      stack: "Javascript",
      about:
        "Did I forget something? If only I had used this alarm clock to remind me to write something nifty here!",
      siteLink: "https://mkrs90.github.io/alarm-clock/",
      repoLink: "https://github.com/mkrs90/alarm-clock",
      imgscr: alarmclockicon,
      imgalt: "Alarm Clock App",
    },
    {
      title: "To Do List App",
      week: "five",
      stack: "React, Javascript",
      about:
        "Things to do? Get them organize and prioritized with this to do list app.",
      siteLink: "/",
      repoLink: "https://github.com/mkrs90/to-do-list",
      imgscr: todolisticon,
      imgalt: "To Do List App",
    },
    {
      title: "React Restaurant",
      week: "six",
      stack: "React, Javascript, CSS, API",
      about: "Feeling hungry? Check out the menu at Happy Escape Eatery a project focusing on react!",
      siteLink: "https://mkrs90.github.io/react-restaurant/",
      repoLink: "https://github.com/mkrs90/react-restaurant",
      imgscr: restauranticon,
      imgalt: "Restaurant Icon",
    },
    {
      title: "Python Budget",
      week: "seven",
      stack: "Python",
      about: "Track your spending and get your budget under control with this python budget program",
      siteLink: "https://github.com/mkrs90/budget-app",
      repoLink: "https://github.com/mkrs90/budget-app",
      imgscr: budgeticon,
      imgalt: "Budget Icon",
    },
    {
      title: "SQL Heroes",
      week: "eight",
      stack: "Python, SQL",
      about: "View, Create, Update, and Eliminate Sidekicks through this fun python/sql terminal program.",
      siteLink: "https://github.com/mkrs90/sql_heros",
      repoLink: "https://github.com/mkrs90/sql_heros",
      imgscr: sqlheroicon,
      imgalt: "sql heroes Icon",
    },
    {
      title: "Django Jams",
      week: "nine & ten",
      stack: "Python, Django",
      about: "Create your own playlists and add/remove your favorite songs!",
      siteLink: "https://github.com/mkrs90/django-jams",
      repoLink: "https://github.com/mkrs90/django-jams",
      imgscr: djangojamsicon,
      imgalt: "django jams icon",
    },
    {
      title: "WildSteppe",
      week: "Capstone Project",
      stack: "Full Stack",
      about:
        "Let's get wild! Find your favorite trails and leave comments about what you loved. See a map and photos as well as all the cool things you can do there!",
      siteLink: "https://wildsteppe-95857.web.app/",
      repoLink: "https://github.com/mkrs90/wildsteppe-frontend",
      imgscr: wildsteppe,
      imgalt: "WildSteppe Icon",
    },
  ];

  return (
    <div id="projectPage" className="container-fluid text-center">
      <div id="projectHeader">Projects</div>
      <div className="row justify-content-evenly">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export const ProjectCard = ({ project }) => {
  return (
    <div
      className="col-4 card m-4 mt-5"
      id="project_card"
      style={{ width: "18rem" }}
    >
      <img src={project.imgscr} className="card-img-top" alt={project.imgalt} />
      <div className="card-body text-center">
        <h5 className="card-title">{project.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{project.stack}</h6>
        <p className="card-text">{project.about}</p>
      </div>
      <div className="row card-footer customer-card text-center">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.siteLink}
          id="basic_button"
          className="align-self-end btn btn-primary btn-block my-1"
        >
          SEE THE SITE!
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.repoLink}
          id="basic_button"
          className="align-self-end btn btn-primary btn-block my-1"
        >
          SEE THE REPO!
        </a>
      </div>
    </div>
  );
};

// return (
//     <div id="projectPage" className="container-fluid text-center">
//         <div id="projectHeader">Projects</div>
//         <div className="row justify-content-evenly">

//             <div className="col-4 card m-4" id="project_card" style={{ width: "18rem"}}>
//                 <img src={weathericon} className="card-img-top" alt="Weather App" />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">Weather App</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">Javascript, APIs</h6>
//                     <p className="card-text">What's the weather? Check out my project using javascript calling an API to get your weather!</p>
//                 </div>
//                 <div className="row card-footer customer-card text-center">
//                     <a href="https://mkrs90.github.io/weather-app/" className="align-self-end btn btn-primary btn-block my-1">SEE THE SITE!</a>
//                     <a href="https://mkrs90.github.io/weather-app/" className="align-self-end btn btn-primary btn-block my-1">SEE THE REPO!</a>
//                 </div>
//             </div>

//             <div className="col-4 card m-4" id="project_card" style={{ width: "18rem" }}>
//                 <img src={tictactoeicon} className="card-img-top" alt="tic-tac-toe app" />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">Tic-Tak-Toe Game</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">Javascript</h6>
//                     <p className="card-text">Up for a game of Tic-Tak-Toe? Check out my project using only javascript and play a childhood classic game!</p>
//                 </div>
//                 <div className="row card-footer customer-card text-center">
//                     <a href="https://mkrs90.github.io/tic-tac-toe/" className="align-self-end btn btn-primary btn-block my-1">SEE THE SITE!</a>
//                     <a href="/" className="align-self-end btn btn-primary btn-block my-1">SEE THE REPO!</a>
//                 </div>
//             </div>

//             <div id="project_card" className="col-4 card m-4" style={{ width: "18rem" }}>
//                 <img src={brainreadericon} className="card-img-top" alt="Mind Reader app" />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">Mind Reader Game</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">Subheader</h6>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//                 <div className="row card-footer text-center">
//                     <a href="/" className="btn btn-primary btn-block my-1">SEE THE SITE!</a>
//                     <a href="/" className="btn btn-primary btn-block my-1">SEE THE REPO!</a>
//                 </div>
//             </div>

//             <div id="project_card" className="col-4 card m-4" style={{ width: "18rem" }}>
//                 <img src={alarmclockicon} className="card-img-top" alt="Alarm Clock app" />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">Alarm Clock</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">Subheader</h6>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <div className="row card-footer text-center">
//                         <a href="/" className="btn btn-primary btn-block my-1">SEE THE SITE!</a>
//                         <a href="/" className="btn btn-primary btn-block my-1">SEE THE REPO!</a>
//                     </div>
//                 </div>
//             </div>

//             <div id="to_do_list_app" className="col-4 card m-4" style={{ width: "18rem" }}>
//                 <img src={todolisticon} className="card-img-top" alt="To Do List app" />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">To-Do List App</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">React, Javascript</h6>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <div className="row card-footer text-center">
//                         <a href="/" className="btn btn-primary btn-block my-1">SEE THE SITE!</a>
//                         <a href="/" className="btn btn-primary btn-block my-1">SEE THE REPO!</a>
//                     </div>
//                 </div>
//             </div>

//             <div id="react_restaurant" className="card col-4 m-4" style={{ width: "18rem" }}>
//                 <img src={restauranticon} className="card-img-top" alt="Restaurant App" />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">React Restaurant</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">React, Javascript, CSS, API</h6>
//                     <p className="card-text">Feeling hungry? Check out the menu at Happy Escape Eatery a project focusing on react!</p>
//                     <div className="row card-footer text-center">
//                         <a href="https://mkrs90.github.io/react-restaurant/" className="align-self-end btn btn-primary btn-block my-1">SEE THE SITE!</a>
//                         <a href="https://github.com/mkrs90/react-restaurant" className="align-self-end btn btn-primary btn-block my-1">SEE THE REPO!</a>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
// )
