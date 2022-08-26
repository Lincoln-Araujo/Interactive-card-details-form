import React from "react";
import './Card.css';

export default props =>  {
    return (
        <div className="container">

            

                <div 
                    className="card" 
                    id="front-card" 
                    alt="front-card"
                    >

                    <div className="flag">
                        <div className="flag-image1"></div> 
                        <div className="flag-image2"></div>   
                    </div> 

                    <div className="card-number">
                        <span className="text">0000 0000 0000 0000</span>
                    </div>   

                    <div className="card-info">
                        <div className="card-info-name">
                            <span className="text small">Lincoln Araujo</span>
                        </div>

                        <div className="card-info-date">
                            <span className="text small">00/00</span>
                        </div>
                    </div>
                </div>

                <div 
                    className="card" 
                    id="back-card" 
                    alt="back-card">

                    <div className="security-number">
                        <span className="text small">000</span>
                    </div>

                </div>    

            
        </div>
    )
}