
import React from 'react'
import MenuList from '../MenuList'
import projectsjson from './projects.json'

const Projects = () =>(
    <div>
        <div className="page" id="p2">
            <div className="icon fa fa-keyboard-o"><span className="title"></span>
                <div className="hint">
                    <MenuList mlist={projectsjson}></MenuList>
                </div>
            </div>

        </div>  
    </div>
)

export default Projects