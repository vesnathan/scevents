import React from 'react';
import './PlenarySession.component.css';

import      Grid            from '@material-ui/core/Grid';
import      Button          from '@mui/material/Button';

import { Link } from "react-router-dom";


import      Hidden          from '@material-ui/core/Hidden';

const PlenarySession = (props) => (

    
    <div tabIndex   = "0"
            key        = { props.props.ID +'-div' } 
            className  = { "PlenarySession" }    
            style      = { {  backgroundColor: props.props.PlenarySessionBGColor,
                             color: props.props.PlenarySessionTextColor,
                             borderRadius:
                             ((!props.agendaItem)? "5px 5px 0px 0px":"5px 5px 5px 5px"),
                             marginBottom: ((!props.agendaItem)?"0px":"10px") }} >
        <Grid container>
            <Hidden xsDown>
                <Grid item={true}  
                                                            xs=                   { false } 
                                                            sm=                   { 3 } 
                                                            md=                   { 2 } 
                                                            lg=                   { 2 } 
                                                            xl=                   { 1 } >
                    <div className="PlenarySessionIconHolder">
                        <img    key  = { props.props.ID +'-icon' }
                                alt   = { props.props.ID +' icon' } 
                                src   = { props.props.PlenarySessionIcon } />
                    </div>
                </Grid>
            </Hidden>
            <Grid item={true}  
                                                        xs=                   { 12 } 
                                                        sm=                   { 9 } 
                                                        md=                   { 10 } 
                                                        lg=                   { 8 } 
                                                        xl=                   { 9 } >
                <div className="PlenarySessionTextHolder">
                    <p   key    = { props.props.ID +'-text' } 
                        className = "PlenarySessionHeader">
                                { props.props.PlenarySessionHeader }</p>
                                <br/>
                    <p   key    = { props.props.ID +'-info' }  
                        className = {'PlenarySessionInfo' + (!props.agendaItem ? ' hidden':'')}>
                                { props.props.PlenarySessionInfo+""+
                                new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(+props.props.PlenarySessionStart).getTime())+" - "+
                                new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(+props.props.PlenarySessionEnd).getTime())
                                
                                }</p>
                </div>
            </Grid>
            <Grid item={true}  
                                                        xs=                   { false } 
                                                        sm=                   { false } 
                                                        md=                   { false } 
                                                        lg=                   { 2 } 
                                                        xl=                   { 2 } >
                <Hidden mdDown>
                    <div className={'PlenarySessionButtonHolder' + (!props.agendaItem ? ' hidden':'')}>
                        <Link   key=                  { props.props.ID+"-link" } 
                                to=                   { '/events/'+props.showId+"/"+props.props.ID}  >
                            <Button  
                                key={props.props.ID+"-button"}
                                style={{
                                    backgroundColor: props.props.PlenarySessionButtonBGColor,
                                }}
                                onClick=        { () => props.setAgendaVisible(false) } >
                                    {'VIEW'}</Button>
                        </Link>
                    </div>
                </Hidden>
            </Grid>
        </Grid>
    </div>

);

export default PlenarySession;


