import React from 'react';
import './AgendaMenu.component.css';
import { Link } from "react-router-dom";

const AgendaMenu = (props) => (
    
    <div tabIndex   = "0" 
         key        = { 'AgendaMenu  div' }
         className  = { "AgendaMenu" }  >
        <div className="AgendaMenuItemsHolder">
            <Link       key=            { props.props.tabs[0].ID+"-link" } 
                        to=             { `/events/${props.showId+"/"+props.props.tabs[0].ID}` } 
                        style=          {{ textDecoration: 'none' }}>

                <span   className=      {'menuItem' + (props.props.tabs[0].ID === props.tabActive ? ' menuItemSelected':'')}   
                        onClick=        { () => props.setTabActive(props.props.tabs[0].ID) } >
                                        {props.props.tabs[0].label}
                                        </span>
                                        </Link> 

            <Link       key=            { props.props.tabs[1].ID+"-link" } 
                        to=             { `/events/${props.showId+"/"+props.props.tabs[1].ID}` } 
                        style=          {{ textDecoration: 'none' }}>

                <span   className=      {'menuItem' + (props.props.tabs[1].ID === props.tabActive ? ' menuItemSelected':'')}
                        onClick=        { () => props.setTabActive(props.props.tabs[1].ID) }>
                                        {props.props.tabs[1].label}
                                        </span>
                                        </Link>     
        </div>     
    </div>
);

export default AgendaMenu;