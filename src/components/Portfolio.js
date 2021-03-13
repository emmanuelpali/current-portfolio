import React, {useState} from 'react';
import portfolioContent from '../DATA/data';
import '../styles/portfolio.css'

function Portfolio () {
    const [state, setState] = useState(true)
        return (
            <div className="main-content">
                <h2>My Projects</h2>
                {portfolioContent.map((item) =>
                state === true ? 
                    <div className="card" key={item.id}>
                        <div className="card-img">
                            <img src={item.thumb} alt={item.alt} />
                        </div>
                        <div className="card-header">
                            <h3>{item.appName}</h3>
                            <span>....</span>
                            <p>{item.shortDescription}</p>
                            <button className="projects-view" onClick={() => setState(false)}>More...</button>
                        </div>
                    </div> : 
                    <div className="card" key={item.id}>
                        <div className="card-img">
                            <img src={item.thumb} alt={item.alt} />
                        </div>
                        <div className="card-header">
                            <h2>{item.appName}</h2>
                            <span>....</span>
                            <p>{item.shortDescription}</p>
                            <span>....</span>
                            <a href={item.webAddress} rel="noreferrer" target="_blank">Live Site</a>
                            <p>{item.description}</p>
                            <button className="projects-view" onClick={() => setState(true)}>--Less</button>
                        </div>
                    </div> 
                )}
            </div>

        )
}

export default Portfolio
