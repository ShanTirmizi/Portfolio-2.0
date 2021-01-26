import React from 'react';
import './Profile.css';
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";


const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__container1">
                <div className="profile__container1__pic">
                    <img />
                </div>
                <div className="profile__container1__name">
                    <h2>Shan Tirmizi</h2>
                </div>
                <div className="profile__container1__link">
                    <a href="https://github.com/ShanTirmizi" target="_blank">
                        <FaGithub className="profile__container1__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/shan-tirmizi-7b3114159/" target="_blank">
                        <GrLinkedin className="profile__container1__icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/shan-tirmizi-7b3114159/" target="_blank">
                        <MdContactMail className="profile__container1__icon" />
                    </a>
                </div>
            </div>
            <div className="profile__container2">
                <div className="profile__container2__bio">
                </div>
                <div className="profile__container2__skills">
                </div>
            </div>
            <div className="profile__container3">
                <div className="profile__container3__pic"></div>
                <div className="profile__container3__info">Name</div>
                    <button>Click me</button>
            </div>
        </div>
    )
}

export default Profile
