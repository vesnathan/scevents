import React from 'react';
import './ChatBox.component.css';
import Grid from '@material-ui/core/Grid';

const ChatBox = (props) => (
    <Grid container>
        <Grid item={true}  
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}> 
    `        <div tabIndex   = "0" 
                key        = {props.ID+"-ChatBox-Div"}
                className  = "ChatBoxHolder"     
                style      = { {    backgroundColor: props.ChatBoxBGColor,
                                    color: props.ChatBoxTextColor }} >
                <Grid container>
                    <div    className="ChatBoxHolderHeader"
                            key={props.ID+"-ChatBoxHolderHeader"}>
                        <Grid item={true}  
                            xs={3}
                            sm={2}
                            md={6}
                            lg={3}
                            xl={3}> 
                            <div className="ChatBoxIconHolder">
                                <img    key={props.ID + "-icon"}
                                        alt={props.ID + ' icon'}
                                        src={props.ChatBoxIcon} /> 
                            </div>
                        </Grid> 
                        <Grid item={true}  
                            xs={9}
                            sm={10}
                            md={6}
                            lg={9}
                            xl={9}> 
                            <div    className="ChatBoxHolderHeaderText"
                                    key={props.ID+"-ChatBoxHolderHeaderText"}>
                                <span>CHAT</span>
                            </div>
                        </Grid> 
                    </div>     
                </Grid>  
            </div>
        </Grid> 
    </Grid>    
);

export default ChatBox;