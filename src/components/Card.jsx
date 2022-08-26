import React, { useState } from "react";
import './Card.css';

export default props =>  {

    const [number, setNumber] = useState("0000 0000 0000 0000 ");

    const [name, setName] = useState("YOUR NAME ");

    const [month, setMonth] = useState("MM");

    const [year, setYear] = useState("YY");

    const [cvc, setCvc] = useState("000");

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
                        <span className="text">{number}</span>
                    </div>   

                    <div className="card-info">
                        <div className="card-info-name">
                            <span className="text small">{name}</span>
                        </div>

                        <div className="card-info-date">
                            <span className="text small">{month}/{year}</span>
                        </div>
                    </div>
                </div>

                <div 
                    className="card" 
                    id="back-card" 
                    alt="back-card">

                    <div className="security-number">
                        <span className="text small">{cvc}</span>
                    </div>

                </div>    

            </div>

            <div className="form">
                <div className="form-content">
                    
                    <div className="form-control">
                        <h3 className="title">cardholder name</h3>
                        <input type="text" onChange={e => setName(e.target.value)} placeholder="e.g. Lincoln Araujo" />
                    </div>

                    
                    <div className="form-control">
                        <h3 className="title">card number</h3>
                        <input type="text" maxLength="19" onChange={e => setNumber(e.target.value)} placeholder="1234 5678 9123 0000" />
                    </div>

                    <div className="form-group">
                        
                        <div className="form-control">
                            <h3 className="title">exp. date (mm/yy)</h3>
                            <div className="form-date">
                                <input type="text" maxLength="2" onChange={e => setMonth(e.target.value)} id='month' placeholder="MM" />
                                <input type="text" maxLength="2" onChange={e => setYear(e.target.value)} id='year' placeholder="YY" />
                            </div>                            
                        </div>
                        
                        <div className="form-control">
                            <h3 className="title">cvc</h3>
                            <input type="text" maxLength="3" onChange={e => setCvc(e.target.value)} placeholder="e.g. 123" />
                        </div>
                    </div>                   

                    <div className="btn text">
                        Confirm
                    </div>

                </div>

            </div>
        </>
        
    )
}