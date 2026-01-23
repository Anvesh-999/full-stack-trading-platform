import React from 'react'

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
               <div className='col-6 p-5'>
                <img src="media/images/largestBroker.svg" alt="Award 1" className="img-fluid" />
               </div>
               <div className='col-6 p-5 mt-5   '>
                <h2>Largest stock broker in India</h2>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                <div className='row'>
                    <div className='col-6'>
                    <ul>
                    <li><p>Futures and options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                    </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Mutual Funds</p></li    >
                    <li><p>Bonds and Govt. Securities</p></li>
                    </ul>
                    </div>
                </div>
                <img src="media/images/pressLogos.png" alt="Award 1" className="img-fluid" />
               </div>
            </div>
        </div>
    );
}

export default Awards;