import React from 'react';
import './Projects.css';
import Bounce from 'react-reveal/Bounce';


const Projects = () => {
    return (
        <div className='projects' id='NavProjects'>
            <Bounce left>
                <div className="projects__container">
                    <div className='projects__container__pic'>
                        <video src='Covid-Tracker.mp4' autoplay="true" loop controls/>
                    </div>
                        {/* <img className="projects__container__pic" src='https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png' /> */}
                    <div className="projects__container__name">
                        <h2>Covid Tracker</h2>
                    </div>
                    <div className="projects__container__info">
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="projects__container__links">
                        <a href='https://shan-covid-19-tracker.herokuapp.com/'  target="_blank">
                            <p>Live Site</p> 
                        </a>
                        <a href='https://github.com/ShanTirmizi/Covid-19-Tracker' target="_blank">
                            <p>Source code</p>  
                        </a> 
                    </div>
                </div>
            </Bounce>
            <Bounce top>
                <div className="projects__container">
                    <div className='projects__container__pic'>
                        <video src='Crypto-Tracker-Video.mp4' autoplay="true" loop controls />
                    </div>
                        {/* <img className="projects__container__pic" src='https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png' /> */}
                    <div className="projects__container__name">
                        <h2>Crypto Tracker</h2>
                    </div>
                    <div className="projects__container__info">
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p> 
                    </div>
                    <div className="projects__container__links">
                        <a href='https://shan-crypto-tracker.herokuapp.com' target="_blank">
                            <p>Live Site</p>
                        </a>
                        <a href='https://github.com/ShanTirmizi/Crypto-Price-Tracker' target="_blank">
                            <p>Source code</p> 
                        </a>
                         
                    </div>
                </div>
            </Bounce>
            <Bounce right>
                <div className="projects__container">
                    <div className="projects__container__pic">
                    {/* <img className="projects__container__pic" src='https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png' /> */}
                        <video src='Github-User-Search.mp4' autoplay="true" loop controls/>
                    </div>
                    <div className="projects__container__name">
                        <h2>GitHub User Search</h2>
                    </div>
                    <div className="projects__container__info">
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="projects__container__links">
                        <a href='https://shan-github-user.herokuapp.com' target="_blank">
                            <p>Live Site</p> 
                        </a>
                        <a href='https://github.com/ShanTirmizi/GitHub-Search' target="_blank">
                            <p>Source code</p>
                        </a>
                          
                    </div>
                </div>
            </Bounce>
            {/* <Bounce left>
                <div className="projects__container">
                    <div className='projects__container__pic'></div>    
                    <div className="projects__container__name">
                        <h2>Projects 1</h2>
                    </div>
                    <div className="projects__container__info">
                        <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="projects__container__links">
                        <p>Live Site</p>   
                        <p>Source code</p>  
                    </div>
                </div>
            </Bounce>
            <Bounce bottom>
                <div className="projects__container">
                    <div className='projects__container__pic'></div>
                    <div className="projects__container__name">
                        <h2>Projects 1</h2>
                    </div>
                    <div className="projects__container__info">
                        <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="projects__container__links">
                        <p>Live Site</p>   
                        <p>Source code</p>  
                    </div>
                </div>
            </Bounce>
            <Bounce right>
                <div className="projects__container">
                    <div className='projects__container__pic'>
                    </div>
                    <div className="projects__container__name">
                        <h2>Projects 1</h2>
                    </div>
                    <div className="projects__container__info">
                        <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="projects__container__links">
                        <p>Live Site</p>   
                        <p>Source code</p>  
                    </div>
                </div>
            </Bounce> */}

        </div>
    )
}

export default Projects
