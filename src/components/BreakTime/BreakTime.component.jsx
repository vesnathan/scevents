import React from 'react';
import './BreakTime.component.css';

import      Grid            from '@material-ui/core/Grid';

import      Hidden          from '@material-ui/core/Hidden';


const ConcurrentHeader = (props) => (
  
    
    <div tabIndex   = "0" 
         key        = { props.props.ID +'-div' }
         className  = { "BreakTime" }   
         style      = { {   backgroundColor: props.props.BreakTimeBGColor,
                            color: props.props.BreakTimeTextColor }} >


        <Grid container>
            <Hidden xsDown>
                <Grid item={true}   
                                                            xs=                   { false } 
                                                            sm=                   { 3 } 
                                                            md=                   { 2 } 
                                                            lg=                   { 2 } 
                                                            xl=                   { 1 } >

                    <div className="BreakTimeIconHolder">
                        <img    key  = { props.props.ID+"-icon" }
                                alt   = { props.props.ID +' icon' } 
                                src   = { props.props.BreakTimeIcon } />
                    </div>
                </Grid>
            </Hidden>
            <Grid item={true}   
                                                        xs=                   { 12 } 
                                                        sm=                   { 9 } 
                                                        md=                   { 10 } 
                                                        lg=                   { 10 } 
                                                        xl=                   { 11 } >
                <div className="BreakTimeTextHolder">
                    <p      key         = { props.props.ID +'-header' } 
                            className   = "BreakTimeText">
                                        { props.props.BreakTimeText }</p>
                                        <br/>
                    <p      key         = { props.props.ID +'-info' }  
                            className   = "BreakTimeInfo">
                                        {new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(+props.props.BreakTimeStart).getTime())+" - "+
                                        new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(+props.props.BreakTimeEnd).getTime())
                                        }
                                    </p>
                </div>
            </Grid>
        </Grid>
    </div>

);

export default ConcurrentHeader;


