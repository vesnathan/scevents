import React from 'react';
import './ConcurrentHeader.component.css';

import      Grid            from '@material-ui/core/Grid';

import      Hidden          from '@material-ui/core/Hidden';


const ConcurrentHeader = (props) => (
  
    
    <div tabIndex   = "0" 
         key        = { props.props.ID +'-div' }
         className  = { "ConcurrentHeader" }   
         style      = { {   backgroundColor: props.props.ConcurrentHeaderBGColor,
                            color: props.props.ConcurrentHeaderTextColor }} >


        <Grid container>
            <Hidden xsDown>
                <Grid item={true}   
                                                            xs=                   { false } 
                                                            sm=                   { 3 } 
                                                            md=                   { 2 } 
                                                            lg=                   { 2 } 
                                                            xl=                   { 1 } >

                    <div className="ConcurrentHeaderIconHolder">
                        <img    key  = { props.props.ID+"-icon" }
                                alt   = { props.props.ID +' icon' } 
                                src   = { props.props.ConcurrentHeaderIcon } />
                    </div>
                </Grid>
            </Hidden>
            <Grid item={true}   
                                                        xs=                   { 12 } 
                                                        sm=                   { 9 } 
                                                        md=                   { 10 } 
                                                        lg=                   { 10 } 
                                                        xl=                   { 11 } >
                <div className="ConcurrentHeaderTextHolder">
                    <p      key         = { props.props.ID +'-header' } 
                            className   = "ConcurrentHeaderText">
                                        { props.props.ConcurrentHeaderText }</p>
                                        <br/>
                    <p      key         = { props.props.ID +'-info' }  
                            className   = "ConcurrentHeaderInfo">
                                        {new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(+props.props.ConcurrentHeaderStart).getTime())+" - "+
                                        new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(+props.props.ConcurrentHeaderEnd).getTime())
                                        }
                                    </p>
                </div>
            </Grid>
        </Grid>
    </div>

);

export default ConcurrentHeader;


