import React from 'react'
import "./Terminal.scss"

const Test = () => {
    return (
        <div>
            <main id="container">
                
                
                <div id="terminal">
                       
                    <section id="terminal__bar">          
                    <div id="bar__buttons">            
                        <button className="bar__button" id="bar__button--exit">&#10005;</button>            
                        <button className="bar__button">&#9472;</button>                
                        <button className="bar__button">&#9723;</button>          
                    </div>          
                    <p id="bar__user">ajlloyd@ubuntu: ~</p>        
                    </section>        
                            
                    <section id="terminal__body">
                    

                    {/*<div id="terminal__prompt">       
                        <span id="terminal__prompt--bling"> * Professional Frontend design </span>                      
                    </div>
                    <div id="terminal__prompt">       
                        <span id="terminal__prompt--bling"> * Fullstack React App development </span>                      
                    </div>
                    <div id="terminal__prompt">       
                        <span id="terminal__prompt--bling"> * API building in NodeJS </span>                      
                    </div>
                    <div id="terminal__prompt">       
                        <span id="terminal__prompt--bling"> * Python development </span>                      
                    </div>*/}
                               

                    <div id="terminal__prompt">            
                        <span id="terminal__prompt--user">ajlloyd@ubuntu:</span>            
                        <span id="terminal__prompt--location">~</span>            
                        <span id="terminal__prompt--bling">$ your new project awaits </span>
                                 
                        <span id="terminal__prompt--cursor"></span>          
                    </div>        
                    </section>      
                </div>    
            </main>
        </div>

    )
}

export default Test
