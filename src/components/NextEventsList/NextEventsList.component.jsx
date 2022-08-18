import React from 'react';
import './NextEventsList.component.css';

import Grid from '@material-ui/core/Grid';



const NextEventsList = (props) => (


    <div tabIndex   = "0" 
            key="NextEventsListHolder div" 
            className  ="NextEventsListHolder" 
            style      = { {   backgroundColor: props.props.NextEventsBGColor,
            color: props.props.NextEventsTextColor }} >
        <Grid container>
            <Grid item={true} xs={12}> 
                <Grid container>
                    <div className="NextEventsListHeader">
                        <Grid item={true}               xs=                   { 3 } 
                                                        sm=                   { 2 } 
                                                        md=                   { 6 } 
                                                        lg=                   { 3 } 
                                                        xl=                   { 3 } > 
                            <div className="NextEventsListHolderIconHolder">
                                <img    key  = { props.props.ID+"-icon" }
                                    alt   = { props.props.ID +' icon' } 
                                    src   = { props.props.NextEventsListIcon } />
                            </div>
                        </Grid>
                        <Grid item={true}               xs=                   { 9 } 
                                                        sm=                   { 10 } 
                                                        md=                   { 6 } 
                                                        lg=                   { 9 } 
                                                        xl=                   { 9 } > 
                            <div className="NextEventsListHolderHeaderText">
                                <span>DISCUSSION GROUPS</span>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid> 
        </Grid> 
    </div> 

);

export default NextEventsList;

/*
<props.NextEventsListIcon size={"32"}/>
*/