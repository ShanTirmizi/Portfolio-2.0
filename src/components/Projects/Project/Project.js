import React from 'react'
import './Project.css'

const Project = ({video, title, description, Site, GitHub}) => {
    return (
        <div className="projects__container m-3">
            <div className='projects__container__pic'>
                <video src={video} autoplay="true" loop controls muted/>
            </div>
                {/* <img className="projects__container__pic" src='https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png' /> */}
            <div className="projects__container__name text-white p-2">
                <h2>{title}</h2>
            </div>
            <div className="projects__container__info">
                <p className='p-2 text-white mb-0'>{description}</p>
            </div>
            <div className="projects__container__links">
                <a href={Site}  target="_blank" rel="noreferrer" className='text-decoration-none'>
                    <p>Live Site</p> 
                </a>
                <a href={GitHub} target="_blank" rel="noreferrer" className='text-decoration-none'>
                    <p>Source code</p>  
                </a> 
            </div>
        </div>
    )
}

export default Project
