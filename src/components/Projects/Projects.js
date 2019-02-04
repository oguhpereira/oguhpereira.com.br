
import React from 'react'
import MenuList from '../MenuList'
import projectsjson from './projects.json'
import icon from "../../static/img/male-technologist.png"

const Projects = () =>(
    <div>
        <div className="page" id="p2">
            <div className="icon fa fa-keyboard-o"><span className="title"></span>
                <div className="hint">
                <img className="icon-compulting" width="120" src={icon} alt="emoji compulting"/>
                    <MenuList mlist={projectsjson}></MenuList>
                </div>
            </div>

        </div>  
    </div>
)

export default Projects