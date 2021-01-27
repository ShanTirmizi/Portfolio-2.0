import React, { useState } from 'react';
import './Profile.css';
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='profile' id='NavBio'>
            <div className="profile__container1">
                <div className="profile__container1__pic">
                    <img src='https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png' />
                </div>
                <div className="profile__container1__name">
                    <h2>Shan Tirmizi</h2>
                    <p>Email: tirmizishahnawaz@gmail.com</p>
                </div>
                <div className="profile__container1__link">
                    <a href="https://github.com/ShanTirmizi" target="_blank">
                        <FaGithub className="profile__container1__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/shan-tirmizi-7b3114159/" target="_blank">
                        <GrLinkedin className="profile__container1__icon" />
                    </a>
                    <div >
                        {
                        isOpen &&
                        <div className='profile__container1__link__info'>
                            <div className='profile__container1__link__cancel'>
                                <h3>Contact info</h3>
                                <AiOutlineClose onClick={() => setIsOpen(false)} />
                            </div>
                            <p>Phone: 07481444772</p>
                            <p>Email: Tirmizishahnawaz@gmail.com</p>
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
                            <p>React</p>
                            <FaReact />
                        </div>
                        <div>
                            <p>React</p>
                            <FaReact />
                        </div>
                        <div>
                            <p>React</p>
                            <FaReact />
                        </div>
                        <div>
                            <p>React</p>
                            <FaReact />
                        </div>
                        <div>
                            <p>React</p>
                            <FaReact />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__container3">
                <img src='https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png' className="profile__container3__pic" />
                <div className="profile__container3__info">
                    <h3>The Wolf of Wall Street</h3>
                    <p>8.5 IMDB</p>
                </div>
                    <button>Click me</button>
            </div>
        </div>
    )
}

export default Profile
