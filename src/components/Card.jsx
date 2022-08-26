import React from "react";
import './Card.css';

export default props =>  {
    return (

        <>
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

            <div className="form">
                <div className="form-content">
                    
                    <div className="form-control">
                        <h3 className="title">cardholder name</h3>
                        <input type="text" placeholder="e.g. Lincoln Araujo" />
                    </div>

                    
                    <div className="form-control">
                        <h3 className="title">card number</h3>
                        <input type="text" placeholder="1234 5678 9123 0000" />
                    </div>

                    <div className="form-group">
                        
                        <div className="form-control">
                            <h3 className="title">exp. date (mm/yy)</h3>
                            <div className="form-date">
                                <input type="text" id='month' placeholder="MM" />
                                <input type="text" id='year' placeholder="YY" />
                            </div>                            
                        </div>

                        
                        <div className="form-control">
                            <h3 className="title">cvc</h3>
                            <input type="text" placeholder="e.g. 123" />
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
        
    )
}