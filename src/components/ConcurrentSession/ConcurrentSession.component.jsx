import React from 'react';
import './ConcurrentSession.component.css';

import      Grid            from '@material-ui/core/Grid';
import      Button          from '@mui/material/Button';

import { Link } from "react-router-dom";
  
import      Hidden          from '@material-ui/core/Hidden';


const ConcurrentSession = (props) => (

    <div tabIndex   = "0" 
        key        = { props.props.ID +'-div' }
        className  = 'ConcurrentSession'   
        style      = { {   backgroundColor: ((!props.agendaItem)?"rgba(255, 255, 255, .5)":props.props.ConcurrentSessionBGColor),
                            color: ((!props.agendaItem)?"rgba(05, 0, 0, .5)":props.props.ConcurrentSessionTextColor),
                            borderRadius:
                            ((props.props.ConcurrentSessionLastOne === "true" || !props.agendaItem)? ((!props.agendaItem)?"5px 5px 0px 0px":"0px 0px 5px 5px"):"0px 0px 0px 0px"),
                            marginTop: ((!props.agendaItem)?"20px":"0px"),
                            marginBottom: ((!props.agendaItem)?"0px":"0px")                    
        } }>        
        
            {((!props.agendaItem)?
            
            <Grid container>
                
                    <Grid item={true}  
                        xs=                   { 2 } 
                        sm=                   { 2 } 
                        md=                   { 2 } 
                        lg=                   { 1 } 
                        xl=                   { 1 } >
                        <div className="ConcurrentSessionIconHolder">
                            <img    key  = { props.props.ID +'-icon' }
                                    alt   = { props.props.ID +' icon' } 
                                    src   = "/events/images/icons/concurrent.png" />
                        </div>

                    </Grid>
            
                    <Grid item={true}  
                        xs=                   { 10 } 
                        sm=                   { 10 } 
                        md=                   { 10 } 
                        lg=                   { 11 } 
                        xl=                   { 11 } >
                        <div>
                            <div className="ConcurrentSessionTextHolder">
                                <p  key    = { props.props.ID +'-text' } 
                                    className = "ConcurrentSessionHeader">
                                    { props.props.ConcurrentSessionText  }</p>
                            </div>
                        </div>
                    </Grid>
            </Grid>
                
            :
            
                <Grid container>
                    <Grid item={true}  
                                                                xs=                   { 12 } 
                                                                sm=                   { 12 } 
                                                                md=                   { 12 } 
                                                                lg=                   { 10 } 
                                                                xl=                   { 10 } >
                        <div className="ConcurrentSessionTextHolder">
                            <p  key    = { props.props.ID +'-text' } 
                                className = "ConcurrentSessionHeader">
                                { props.props.ConcurrentSessionText  }</p>
                               
                        </div>
                    </Grid>
                    <Grid item={true}   
                                                                    xs=                   { false } 
                                                                    sm=                   { false } 
                                                                    md=                   { false } 
                                                                    lg=                   { 2 } 
                                                                    xl=                   { 2 } >
                        
                        <Hidden mdDown>    
                                    <div className={'ConcurrentSessionButtonHolder' + (!props.agendaItem ? ' hidden':'')}>
                                        <Link   key=                  { props.props.ID+"-link" } 
                                                to=                   {  '/events/'+props.showId+"/"+props.props.ID}   >
                                            <Button style={{
                                                        backgroundColor: props.props.ConcurrentSessionButtonBG,
                                                    }}
                                                    onClick=        { () => props.setAgendaVisible(false) }
                                                    >{'VIEW'}</Button>
                                        </Link>
                                    </div>
                        </Hidden>
                    </Grid>
                </Grid>
            
        )}
    </div>
);

export default ConcurrentSession;


