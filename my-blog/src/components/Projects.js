import weatherImage from "../img/WeatherAppScreenShot.png";
import ticTakToeImage from "../img/TicTacToeScreenShot.png";

function Projects() {
    const projectsObj = [
        {
            appName: "",
            appImg: "",
            appStack: "",
            appDescription: "",
            

        }
    ]


    return (
        <div id="projectPage" className="container">
            <div id="projectHeader">Projects</div>
            <div className="row">

                <div className="card m-5" id="weather_app" style={{width: "18rem"}}>
                    <img src={weatherImage} className="card-img-top" alt="Weather App Screen" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Weather App</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Javascript, APIs</h6>
                        <p className="card-text">What's the weather? Check out my project using javascript calling an API to get your weather!</p>   
                    </div>
                    <div className="card-footer text-center">
                        <a href="https://mkrs90.github.io/weather-app/" className="btn btn-primary btn-block">Check It Out!</a>
                    </div>
                </div>

                <div className="card m-5" id="tik_tak_toe_app" style={{width: "18rem"}}>
                    <img src={ticTakToeImage} className="card-img-top" alt="Tic-tak-toe App Screen" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Tic-Tak-Toe Game</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Javascript</h6>
                        <p className="card-text">Up for a game of Tic-Tak-Toe? Check out my project using only javascript and play a childhood classic game!</p>
                        <a href="https://mkrs90.github.io/tic-tac-toe/" className="btn btn-primary">Check It Out!</a>
                    </div>
                </div>

                <div id="mind_reader_app" className="card m-5" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Mind Reader Game</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Subheader</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Check It Out!</a>
                    </div>
                </div>

                <div id="alarm_clock_app" className="card m-5" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Alarm Clock</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Subheader</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Check It Out!</a>
                    </div>
                </div>

                <div id="to_do_list_app" className="card m-5" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">To-Do List App</h5>
                        <h6 class="card-subtitle mb-2 text-muted">React, Javascript</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Check It Out!</a>
                    </div>
                </div>

                <div className="card m-5" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Subheader</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Check It Out!</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;

