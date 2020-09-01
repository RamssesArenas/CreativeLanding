import React, {useState} from 'react';
import logo from '../assets/images/logo.png';
import pepsi001 from '../assets/images/pepsi001.png';
import pepsi002 from '../assets/images/pepsi002.png';
import pepsi003 from '../assets/images/pepsi003.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import './Home.css'
import {css} from 'emotion';

const Home = () =>{

    const [background, setBackground] = useState ('#0062BE');


    const setStyle = (background)=> {
        setBackground(background);
    }

    const blue = require('../assets/images/pepsi001.png')
    const white = require('../assets/images/pepsi002.png')
    const black = require('../assets/images/pepsi003.png')
    const canPepsi = { blue,white, black }

    
    const [selected, setSelected] = useState(canPepsi.blue)


    const card = css`
        .colorBack{
        background-color: ${background};
    }

    }
    `;
 
    
    return (
        <div className={card}>
            <section className="colorBack">
                <header>
                    <a href="/">
                        <img src={logo} alt="logo" className="logo"/>
                    </a>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">What´s New</a></li>
                        <li><a href="/">Newsletter</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </header>
                <div className="content"> 
                    <div className="textBox">
                        <h2>That's What<br/><span>I like</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.</p>
                        <a href="/">View all Products</a>
                    </div>
                    <div className="imgBox">
                        <img src={selected} alt="Pesi1" className="pepsi"/>
                    </div>
                </div>
                <ul className="thumb">
                    <li><img onClick={()=> setStyle("#0062be")} src={pepsi001} alt="Pesi1" /></li>
                    <li><img onClick={()=> setSelected(canPepsi.blue)} src={pepsi001} alt="Pesi1" /></li>
                    <li><img onClick={()=> setStyle("#e60c2c")} src={pepsi002} alt="Pesi2" /></li>
                    <li><img onClick={()=> setSelected(canPepsi.white)} src={pepsi002} alt="Pesi1" /></li>
                    <li><img onClick={()=> setStyle("#1e1e1e")} src={pepsi003} alt="Pesi3" /></li>
                    <li><img onClick={()=> setSelected(canPepsi.black)} src={pepsi003} alt="Pesi1" /></li>
                </ul>
                <ul className="sci">
                    <li><a href="/"><img  src={facebook} alt="facebook" /></a></li>
                    <li><a href="/"><img src={twitter} alt="twitter" /></a></li>
                    <li><a href="/"><img src={instagram} alt="instagram" /></a></li>
                </ul>
            </section>
        </div>
    )
}

export default Home;