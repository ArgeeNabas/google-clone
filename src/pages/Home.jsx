import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';


function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__left">
                    <Link to='/about'><span className='link__noCursor'>About</span></Link>
                    <Link to='/store'><span className='link__noCursor'>Store</span></Link>
                </div>
                <div className="home__header__right">
                    <Link to='/gmail'><span className='link__noCursor'>Gmail</span></Link>
                    <Link to='/images'><span className='link__noCursor'>Images</span></Link>
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>
            </div>
            <div className="home__body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt=""/>
                <div className="home__input--container">
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home