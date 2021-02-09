import React from 'react'
import Covid from '../../assets/Covid-Tracker.mp4'
import Architect from '../../assets/Architect-Portfolio.webm'
import GitHubUser from '../../assets/Github-User-Search.mp4'
import Crypto from '../../assets/Crypto-Tracker-Video.mp4'
import Tesla from '../../assets/Tesla-Mockup.mp4'
import Smart from '../../assets/Smart-home.webm'
import Book from '../../assets/book-exchange.webm'
import Ecom from '../../assets/ecommerce.mp4'

export const ProjectData = [
    {
        title: 'Covid Tracker',
        video: Covid,
        Site: 'https://shan-covid-tracker.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Covid-19-Tracker',
        description: 'A Covid Tracker Built using React. The app shows the amount of cases, recovered & deaths on a map created using Leaflet js. Below that are list of countries shown in a table view from highest infections to lowest accompanied by three charts.'
    },
    {
        title: 'E-commerce',
        video: Ecom,
        Site: 'https://shan-ecommerce.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Fullstack-Ecommerce',
        description: 'A Mobile first E-commerce website built using React. This app contains search functionality, the ability to sort items by category and price. The user can login using Auth0 and checkout out with stripe.'
    },
    {
        title: 'GitHub User Search',
        video: GitHubUser,
        Site: 'https://shan-github-search.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/GitHub-User-Search',
        description: 'A GitHub Search app built using React. The app allows you to search GitHub users and gives you their personal information fetched from the GitHub api accompanied by four charts. '
    },
    {
        title: 'Crypto Tracker',
        video: Crypto,
        Site: 'https://shan-crypto-tracker.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Crypto-Price-Tracker',
        description: 'A colorful Crypto Tracker built using React it shows the top 100 crypto currencies displayed in a list form. The Coin page containing further information about the currency.'
    },
    {
        title: 'Smart Home Management',
        video: Smart,
        Site: 'http://www.smart-home-ems.com/',
        GitHub: 'https://github.com/andreeaionescu97/rails-smart-home-ems',
        description: 'A Smart Home Energy Management system built using Ruby on Rails. This web app tracks the energy usage from different devices and plots the data on stylish charts build using am charts. The user can also added different homes'

    },
    {
        title: 'Book Exchange',
        video: Book,
        Site: 'https://airbnb-andreeaionescu97.herokuapp.com/',
        GitHub: 'https://github.com/andreeaionescu97/rails-textbook-exchange',
        description: 'An ebay like book exchange built using Ruby on Rails where users can lend their used books and other users on the website can rent them for a specified period of time. The users can also rate the book and accept or decline a rent request.'

    },
    {
        title: 'Architect Portfolio',
        video: Architect,
        Site: 'https://shan-architect-portfolio.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Architect-Portfolio',
        description: 'An Architect Portfolio built using React. This portfolio contains parallax which gives it a 3d effect. This coupled with a smooth scroll effect gives it a modern look. The project section contains flip cards.'
    },
    {
        title: 'Tesla Mockup',
        video: Tesla,
        Site: 'https://shan-tesla-mockup.herokuapp.com/',
        GitHub: 'https://github.com/ShanTirmizi/Tesla-Mockup',
        description: 'A simple Tesla Mock-up built using React. This is designed to look like the homepage of Tesla.com.'
    }

]
