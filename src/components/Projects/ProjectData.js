import React from 'react'
import Covid from '../../assets/Covid-Tracker.mp4'
import Architect from '../../assets/Architect-Portfolio.webm'
import GitHubUser from '../../assets/Github-User-Search.mp4'
import Crypto from '../../assets/Crypto-Tracker-Video.mp4'
import Tesla from '../../assets/Tesla-Mockup.mp4'
import Smart from '../../assets/Smart-home.webm'

export const ProjectData = [
    {
        title: 'Covid Tracker',
        video: Covid,
        Site: 'https://shan-covid-19-tracker.herokuapp.com/',
        GitHub: 'https://github.com/ShanTirmizi/Covid-19-Tracker',
        description: 'A Covid Tracker Build with React. The app shows the amount of cases, recovered & deaths on a map created with Leaflet js. Below that are list of countries shown in a table view from highest infections to lowest accompanied by three charts.'
    },
    {
        title: 'Architect Portfolio',
        video: Architect,
        Site: 'https://shan-architect-portfolio.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Architect-Portfolio',
        description: 'An Architect Portfolio build with React. This portfolio contains parallax which gives it a 3d effect. This coupled with a smooth scroll effect gives it a modern look. The project section contains flip card.'
    },
    {
        title: 'GitHub User Search',
        video: GitHubUser,
        Site: 'https://shan-github-search.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/GitHub-User-Search',
        description: 'A GitHub Search app build With React. The app allows you to search GitHub users and gives you their personal information fetched from the GitHub api accompanied by four charts. '
    },
    {
        title: 'Crypto Tracker',
        video: Crypto,
        Site: 'https://shan-crypto-tracker.herokuapp.com/',
        GitHub: 'https://github.com/ShanTirmizi/Crypto-Price-Tracker',
        description: 'A colorful Crypto Tracker build with React it shows the top 100 crypto currency displayed in a lost form. The Coin page containing further information about the currency.'
    },
    {
        title: 'Smart Home Management',
        video: Smart,
        Site: 'http://www.smart-home-ems.com/',
        GitHub: 'https://github.com/andreeaionescu97/rails-smart-home-ems',
        description: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        title: 'Tesla Mockup',
        video: Tesla,
        Site: 'https://shan-tesla-mockup.herokuapp.com/',
        GitHub: 'https://github.com/ShanTirmizi/Tesla-Mockup',
        description: 'A simple Tesla Mock-up build with React. This is design to look likes Tesla.com from the navbar to the each individual page is design to look like Tesla.com'
    }

]
