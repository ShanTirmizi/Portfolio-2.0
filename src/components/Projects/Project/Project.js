import React from 'react'
import './Project.css'

const Project = ({video, title, description, Site, GitHub}) => {
    return (
        <div className="projects__container">
            <div className='projects__container__pic'>
                <video src={video} autoplay="true" loop controls/>
            </div>
                {/* <img className="projects__container__pic" src='https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png' /> */}
            <div className="projects__container__name">
                <h2>{title}</h2>
            </div>
            <div className="projects__container__info">
                <p>{description}</p>
            </div>
            <div className="projects__container__links">
                <a href={Site}  target="_blank">
                    <p>Live Site</p> 
                </a>
                <a href={GitHub} target="_blank">
                    <p>Source code</p>  
                </a> 
            </div>
        </div>
    )
}

export default Project
