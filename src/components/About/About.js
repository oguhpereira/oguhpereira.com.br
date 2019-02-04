
import React from 'react'

const About = () =>{
    let d = new Date();
    let year = d.getFullYear();
    return(
        <div>
            <div className="page" id="p1">
                <div className="icon"><span className="title">Gustavo Pereira</span>
                    <div className="hint">
                        Mineiro, Brazilian | Developer at {year-2016} years. <br/>
                        Working full time in <a href="https://jmvtechnology.com">JMV Tecnology</a> | CO-Organizador do <a href="http://gdgdivi.github.io">GDG Divinópolis</a>.
                        <br/>
                        <br/>
                        You can find me at:
                        <br/>
                        <ul id="menu-social">
                            <li className="item-list"><span className="fab fa-linkedin"></span> Linkedin</li>
                            <li className="item-list"><span className="fab fa-twitter"></span> Twitter</li>
                            <li className="item-list"><span className="fab fa-instagram"></span> Instagram</li>
                            <li className="item-list"><span className="fab fa-codepen"></span> Codepen</li>
                            <li className="item-list"><span className="fab fa-github"></span> Github</li>
                            <li className="item-list"><span className="fab fa-gitlab"></span> Gitlab</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default About