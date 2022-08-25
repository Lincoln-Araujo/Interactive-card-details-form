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
                        <div className="flag-image"></div>    
                    </div> 

                    <div className="card-number">
                        <span className="text">5448 84378 8434 9434</span>
                    </div>   

                    <div className="card-info">
                        <div className="card-info-name">
                            <span className="title">Name</span>
                            <span className="text small">Lincoln Araujo</span>
                        </div>

                        <div className="card-info-date">
                            <span className="title">Validate</span>
                            <span className="text small">07/21</span>
                        </div>
                    </div>
                </div>

                <div 
                    className="card" 
                    id="back-card" 
                    alt="back-card">

                </div>    

            
        </div>
    )
}