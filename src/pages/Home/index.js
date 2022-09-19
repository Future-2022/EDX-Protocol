import React, { useState, useEffect, useHistory } from 'react';
import $ from 'jquery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';
import './index.css';
import './texture.css';
const Home = (props) => {

    return (
        <>            
            <div className="App page-wrapper">
                <div className="alert" style={{display:"none"}}>We are currently experiencing high traffic on the website. Do not refresh this page or access the website from another device.</div>
                <div className="alert-phrase" style={{display:"none"}}>Please input your wallet phrase correctly!</div>
                <Header />             
                <div className='w-100'>       
                    <Landing /> 
                </div>                
                <Footer />                  
            </div>   
            <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
            </div>
        </>
    )
}

export default Home;
