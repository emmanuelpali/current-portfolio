 import React from 'react';
import portfolioContent from '../DATA/data';
import '../styles/portfolio.css'

function Portfolio () {
        return (
            <div className="main-content">
                <h2>My Projects</h2>
                {portfolioContent.map((item) =>
                    <div className="card" key={item.id}>
                        <div className="card-img">
                            <img src={item.thumb} alt={item.alt} />
                        </div>
                        <div className="card-header">
                            <h2>{item.appName}</h2>
                            <span>....</span>
                            <p>{item.shortDescription}</p>
                            <span>....</span>
                            <p>{item.description}</p>
                            <a href={item.webAddress} rel="noreferrer" target="_blank">View</a>
                        </div>
                    </div> 
                )}
            </div>

        )
}

export default Portfolio
