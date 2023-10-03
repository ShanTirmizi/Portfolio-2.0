import React from 'react';
import './Projects.css';
// import Bounce from 'react-reveal/Bounce';
import {ProjectData} from '../Projects/ProjectData'
import Project from './Project/Project'


const Projects = () => {
    return (
        <>
            <h1 id='NavProjects' className='projects__heading'>Projects</h1>
            <div className='fullpage'>
                <div className='d-flex flex-wrap justify-content-evenly'>
                    {
                        ProjectData.map((data, index) => {
                            const { title, video, Site, GitHub, description } = data
                            return  <Project key={index} title={title} video={video} Site={Site} GitHub={GitHub} description={description} />

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Projects
