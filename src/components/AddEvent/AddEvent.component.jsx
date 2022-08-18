import React from 'react';
import './AddEvent.component.css';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import      Button          from '@mui/material/Button';




function AddEvent(props) {
    return (
        
        
        <div
            key="AddEventHolder div"
            className="AddEventHolder"
            style={{
                backgroundColor: props.props.AddEventBGColor,
                color: props.props.AddEventTextColor
            }}>
            <Grid container>


                <div className="AddEventHeader">
                    <Grid item={true} 
                        xs={3}
                        sm={2}
                        md={6}
                        lg={3}
                        xl={3}>
                        <div className="AddEventHolderIconHolder">
                            <img key={props.props.ID + "-icon"}
                                alt={props.props.ID + ' icon'}
                                src={props.props.AddEventListIcon} />
                        </div>
                    </Grid>
                    <Grid item={true} 
                        xs={9}
                        sm={10}
                        md={6}
                        lg={9}
                        xl={9}>
                        <div className="AddEventHolderHeaderText">
                            <span>ADD DISCUSSION</span>
                        </div>
                    </Grid>
                </div>
                <Grid item={true} xs={12}> <br />
                    <div className="AddEventHolderBodyText">
                        <TextField
                            variant="filled"
                            color="primary"
                            fullWidth
                            label="Title" /><br /><br />
                        <TextField
                            variant="filled"
                            color="primary"
                            fullWidth
                            label="Zoom Link" /><br /><br />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker
                                label="Date and Time"
                                inputVariant="filled"
                                variant="modal"
                                style={{    width: '100%' }} />
                                <br /><br />
                        </MuiPickersUtilsProvider>
                        <Button style={{
                            backgroundColor: props.props.AddEventButtonBG
                        }}>
                            {'ADD'}
                        </Button>
                    </div>
                </Grid>



            </Grid>
        </div>
        
       
    );
}

export default AddEvent;

/* <props.AddEventIcon size={32}/> */