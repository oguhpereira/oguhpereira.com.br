import React from 'react'

/*  */
const MenuList = ({mlist}) => (
    <div>
        {console.log(mlist)}
        { mlist.map((list) => (
            <div>
                <h3 className="titleDate">{list.year}</h3>
                <ul className="menu-list">
                    {
                        list.projects.map(item => (
                            <li className="item-list"><a href={item.link}>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>
            ))
        }
    </div>
)

export default MenuList 