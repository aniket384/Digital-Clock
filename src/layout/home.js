import React, {Component } from 'react'
import './home.css';
import Clock from './clock'

export const home = () => {
    return (
        <div>
            
            <body>
                <div class="top-bar-agile">
                    
                    
                </div>
                <div class="content-w3">
                   <Clock />
                    
                </div>
                <div class="footer-w3ls">
                    <p> &copy; 2021 Digital Clock. All Rights Reserved | Design by <a href="https://armwebinfo.co.in">Aniket Mishra</a></p>
                </div>
            </body>
        </div>
    )
}

export default home;
