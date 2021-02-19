import React from 'react'
import Covid from '../../assets/Covid-Tracker.mp4'
import Architect from '../../assets/Architect-Portfolio.webm'
import GitHubUser from '../../assets/Github-User-Search.mp4'
import Crypto from '../../assets/Crypto-Tracker-Video.mp4'
import Tesla from '../../assets/Tesla-Mockup.mp4'
import Smart from '../../assets/Smart-home.webm'
import Book from '../../assets/book-exchange.webm'
import Ecom from '../../assets/ecommerce.mp4'
import Insta from '../../assets/Instagram.webm'

export const ProjectData = [
    {
        title: 'Instagram Clone',
        video: Insta,
        Site: 'https://shan-instagram.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Social-Media',
        description: "An Instagram clone created using React & Firebase. This apps lets users to login using firebase authentication. The users can post their pictures with a title on the app. Users can also view posts from other users. Moreover, users can comment on these posts as well."
    },
    {
        title: 'Covid Tracker',
        video: Covid,
        Site: 'https://shan-covid-tracker.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Covid-19-Tracker',
        description: 'A Covid Tracker created using React. The app shows the number of cases, recovered & deaths on a map created using Leaflet js and on charts created using Chart js. The app also shows the list of countries in a table from the highest infections to the lowest. The data is fetched from the disease.sh API.'
    },
    {
        title: 'E-commerce',
        video: Ecom,
        Site: 'https://shan-ecommerce.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Fullstack-Ecommerce',
        description: 'A Mobile-first E-commerce website created using React. This app contains search functionality, the ability to sort items by category and price. The user can log in using Auth0 and checkout out with stripe.'
    },
    {
        title: 'GitHub User Search',
        video: GitHubUser,
        Site: 'https://shan-github-search.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/GitHub-User-Search',
        description: 'A GitHub Search app created using React. The app allows you to search GitHub users and gives you their information fetched from the GitHub API accompanied by four charts.'
    },
    {
        title: 'Crypto Tracker',
        video: Crypto,
        Site: 'https://shan-crypto-tracker.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Crypto-Price-Tracker',
        description: 'A colourful Crypto Tracker built using React. It shows the top 100 cryptocurrencies displayed in a list form on the home page and the Coin page containing further information about each currency. The data is fetched from the Coingecko API.'
    },
    {
        title: 'Smart Home Management',
        video: Smart,
        Site: 'http://www.smart-home-ems.com/',
        GitHub: 'https://github.com/andreeaionescu97/rails-smart-home-ems',
        description: "A Smart Home Energy Management system created using Ruby on Rails. This web app tracks the energy usage of different devices and then plots the data on stylish charts build using AM charts. The user can also add multiple homes. This apps also has user authentication built-in."

    },
    {
        title: 'Book Exchange',
        video: Book,
        Site: 'https://airbnb-andreeaionescu97.herokuapp.com/',
        GitHub: 'https://github.com/andreeaionescu97/rails-textbook-exchange',
        description: "An eBay like book exchange created using Ruby on Rails where users can lend their used books and other users on the website can rent them for a specified period. The users can also rate the book and accept or decline a rent request. This apps also has user authentication built-in."

    },
    {
        title: 'Architect Portfolio',
        video: Architect,
        Site: 'https://shan-architect-portfolio.netlify.app/',
        GitHub: 'https://github.com/ShanTirmizi/Architect-Portfolio',
        description: 'An Architect Portfolio created using React. This portfolio contains parallax which gives it a 3d effect. This coupled with a smooth scroll effect gives it a modern look.'
    },
    {
        title: 'Tesla Mockup',
        video: Tesla,
        Site: 'https://shan-tesla-mockup.herokuapp.com/',
        GitHub: 'https://github.com/ShanTirmizi/Tesla-Mockup',
        description: "A simple Tesla Mock-up created using React. This is designed to look like the homepage of Tesla.com."
    }

]
