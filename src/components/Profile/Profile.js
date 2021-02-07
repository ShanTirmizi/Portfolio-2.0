import React, { useEffect, useState } from 'react';
import './Profile.css';
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { SiJavascript, SiCss3, SiRails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import {data} from './data';
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from 'react-scroll';





const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [alert, setAlert] = useState(false)
    const [movie, setMovie] = useState([])

    // let items = ['Yes', 'No', 'Maybe'];

    const randomMovie = () => {
        let item = data[Math.floor(Math.random() * data.length)];
        setMovie(item)
        // console.log(item);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [alert])
    return (
        <>
        <div className='profile' id='NavBio'>
            <div className="profile__container1">
                <div className="profile__container1__pic">
                    <img src='images/Profile.jpeg' />
                </div>
                <div className="profile__container1__name">
                    <h2>Shan Tirmizi</h2>
                    <div className="profile__container1__email"
                                    onClick={() => {
                                    setAlert(true)
                                    navigator.clipboard.writeText('tirmizishahnawaz@gmail.com')
                                }}>
                        <p>Email: tirmizishahnawaz@gmail.com</p>
                        <MdContentCopy className='profile__container1__copy' />
                    </div>
                    
                </div>
                <div className="profile__container1__link">
                    <a href="https://github.com/ShanTirmizi" target="_blank">
                        <FaGithub className="profile__container1__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/shan-tirmizi-7b3114159/" target="_blank">
                        <GrLinkedin className="profile__container1__icon" />
                    </a>
                    <div className="profile__container1__icon__mail" >
                        {
                        isOpen &&
                        <div className='profile__container1__link__info'>
                            <div className='profile__container1__link__cancel'>
                                <h3>Contact info</h3>
                                <AiOutlineClose onClick={() => setIsOpen(false)} />
                            </div>
                            <p>Phone: 07481444772</p>
                            <div className='profile__container1__link__clip' 
                                onClick={() => {
                                    setAlert(true)
                                    navigator.clipboard.writeText('tirmizishahnawaz@gmail.com')
                                }}>
                                <p>Email: Tirmizishahnawaz@gmail.com</p>
                                <MdContentCopy className='profile__container1__copy' />
                            </div>
                            {
                                alert &&
                                <p className='profile__container1__link__msg'>Copied to the clipboard</p>
                            }
                            <p>Location: London</p>
                        </div>
                        }
                        
                        <MdContactMail className="profile__container1__icon" onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </div>
            <div className="profile__container2">
                <div className="profile__container2__bio">
                    <h3>Bio</h3>
                    <p>
                    Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                </div>
                <div className="profile__container2__skills">
                    <h3>Skills</h3>
                    <div className="profile__container2__skills__icons">
                        <div>
                            <p>React</p>
                            <FaReact  />
                        </div>
                        <div>
                            <p>Javascript</p>
                            <SiJavascript />
                        </div>
                        <div>
                            <p>CSS</p>
                            <SiCss3 />
                        </div>
                        <div>
                            <p>Ruby</p>
                            <DiRuby />
                        </div>
                        <div>
                            <p>Rails</p>
                            <SiRails />
                        </div>
                        <div>
                            <p>GitHub</p>
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__container3">
                <img src={movie.image || 'images/netlfix.jpg'} alt='Movie Poster' className='profile__container3__pic' />
                <div className="profile__container3__info">
                    <h3>{movie.name || 'Need something to watch?'}</h3>
                    <p>{movie.rating} IMDB</p>
                </div>
                <button onClick={randomMovie}>Click for Netflix Rec</button>
            </div>
        </div>
        <div className='profile__downarrowdiv'>
            <Link to={'NavProjects'} smooth={true} duration={1000}>
                <BsChevronCompactDown className='profile__downarrow' />
            </Link>
        </div>
        
        </>
    )
}

export default Profile
