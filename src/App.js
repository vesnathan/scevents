import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Navbar, Container } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import ReactPlayer from "react-player";
import PlenarySession from './components/PlenarySession/PlenarySession.component.jsx';
import NextEventsList from './components/NextEventsList/NextEventsList.component.jsx';
import AddEvent from './components/AddEvent/AddEvent.component.jsx';
import ChatBox from './components/ChatBox/ChatBox.component.jsx';
import BreakTime from './components/BreakTime/BreakTime.component.jsx';
import SponsorBanner from './components/SponsorBanner/SponsorBanner.component.jsx';
import AgendaMenu from './components/AgendaMenu/AgendaMenu.component.jsx';
import ConcurrentSession from './components/ConcurrentSession/ConcurrentSession.component.jsx';
import ConcurrentHeader from './components/ConcurrentHeader/ConcurrentHeader.component.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { Link } from "react-router-dom";


//const PAGE_DATA_URL = 'http://localhost:3000/events/dataAPI.html';
//const ONLINE_PATH = "/";
const PAGE_DATA_URL = process.env.PUBLIC_URL+'/dataAPI.php';
const ONLINE_PATH = "/events/";


var div1 = []; // Sponsor Banner
var div2 = []; // Agenda Menu
var div3 = []; // ScrollerContent
var div4 = [];  
var div5 = []; // right side top
var div6 = []; // right side bottom
var videoPlayers = []; // right side bottom

function populateDivArray(displayDiv,component,index, dataRow) {
    if (index === 0) {
        div1 = [];
        div2 = []; 
        div3 = []; 
        div4 = []; 
        div5 = []; 
        div6 = []; 
        videoPlayers = [];
    }
    switch (displayDiv) {
        case "1": 
            div1.push(component);
            if (dataRow.VideoURL !== undefined && dataRow.VideoURL !== null) {
                videoPlayers.push({"ID":dataRow.ID, "URL": dataRow.VideoURL});
            }
            break;
        case "2": 
            div2.push(component);
            if (dataRow.VideoURL !== undefined && dataRow.VideoURL !== null) {
                videoPlayers.push({"ID":dataRow.ID, "URL": dataRow.VideoURL});
            }
            break;
        case "3": 
            if (div3[dataRow.AgendaTabID] === undefined || div3[dataRow.AgendaTabID] === null || div3[dataRow.AgendaTabID].length === 0) {
                div3[dataRow.AgendaTabID] = [];
                div3[dataRow.AgendaTabID].push(component);
            }
            else {
                div3[dataRow.AgendaTabID].push(component);
            }
            if (dataRow.VideoURL !== undefined && dataRow.VideoURL !== null) {
                videoPlayers.push({"ID":dataRow.ID, "URL": dataRow.VideoURL});
            }
            break;
        case "4": 
            div4.push(component);
            if (dataRow.VideoURL !== undefined && dataRow.VideoURL !== null) {
                videoPlayers.push({"ID":dataRow.ID, "URL": dataRow.VideoURL});
            }
            break;
        case "5": 
            div5.push(component);
            if (dataRow.VideoURL !== undefined && dataRow.VideoURL !== null) {
                videoPlayers.push({"ID":dataRow.ID, "URL": dataRow.VideoURL});
            }
            break;
        case "6": 
            div6.push(component);
            if (dataRow.VideoURL !== undefined && dataRow.VideoURL !== null) {
                videoPlayers.push({"ID":dataRow.ID, "URL": dataRow.VideoURL});
            }
            break;
        default:
            break;
    }

}


const theme = createTheme({
    palette: {
        primary: {
            main: '#00FF00',
            light: '#00FF00',
            dark: '#00FF00',
        },
        secondary: {
            main: '#FF0000',
            light: '#FF0000',
            dark: '#FF0000',
        }
    },
    overrides: {
        MuiPickersToolbar: {
          toolbar: {
            backgroundColor: lightBlue.A200,
          },
        },
        MuiPickersCalendarHeader: {
          switchHeader: {
            // backgroundColor: lightBlue.A200,
            // color: "white",
          },
        },
        MuiPickersDay: {
          day: {
            color: lightBlue.A700,
          },
          daySelected: {
            backgroundColor: lightBlue["400"],
          },
          dayDisabled: {
            color: lightBlue["100"],
          },
          current: {
            color: lightBlue["900"],
          },
        },
        MuiPickersModal: {
          dialogAction: {
            color: lightBlue["400"],
          },
        },
      },
    

});

function createId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}

function App() {
    const [post, setPost] = useState(null);
    const [tabActive, setTabActive] = useState("ImyftecmJE");
    const [agendaVisible, setAgendaVisible] = useState(true);
    
    function setAgendaVisibleFunction(value){
        setAgendaVisible(value);
    } 
    function setTabActiveFunction(value){
        setTabActive(value);
    }
    function onDuration(duration) {
        console.log('onDuration A', duration);
    }
    async function getPageData() {
        const response = await axios.get(PAGE_DATA_URL);
        setPost(response.data);
    }
    useEffect(() => {
        getPageData();
    }, []);
    if (!post) { return "WAITING"; }
    return (
        <ThemeProvider theme={theme}>
            <Router > 
                <Route path={"/events/"+post.showId}>
                    {
                        post.dataRows.map((dataRow,index) =>                        
                            (dataRow.rowType === "SponsorBanner" &&
                                populateDivArray(dataRow.displayDiv,<SponsorBanner key={dataRow.ID} props={dataRow} />, index, dataRow)   
                            )
                            ||  (dataRow.rowType === "AgendaMenu" && 
                                populateDivArray(dataRow.displayDiv,<AgendaMenu key={dataRow.ID} props={dataRow}  showId={post.showId} tabActive={tabActive} setTabActive={setTabActiveFunction}/>, index, dataRow)   
                            )
                            ||  (dataRow.rowType === "BreakTime" && 
                                populateDivArray(dataRow.displayDiv,<BreakTime key={dataRow.ID} props={dataRow}  showId={post.showId} />, index, dataRow)   
                            )
                            ||  (dataRow.rowType === "PlenarySession" && 
                                populateDivArray(dataRow.displayDiv,<PlenarySession key={dataRow.ID} props={dataRow} agendaItem={true} showId={post.showId} setAgendaVisible={setAgendaVisibleFunction}/>, index, dataRow)   
                            )
                            ||  (dataRow.rowType === "ConcurrentHeader" &&
                                populateDivArray(dataRow.displayDiv,<ConcurrentHeader key={dataRow.ID} props={dataRow} />, index, dataRow)   
                            )
                            ||  (dataRow.rowType === "ConcurrentSession" &&  
                                populateDivArray(dataRow.displayDiv,<ConcurrentSession key={dataRow.ID} props={dataRow} agendaItem={true} showId={post.showId} setAgendaVisible={setAgendaVisibleFunction}/>, index, dataRow)
                            )  
                            ||  (dataRow.rowType === "NextEventsList" && 
                                populateDivArray(dataRow.displayDiv,<NextEventsList key={dataRow.ID} props={dataRow} />, index, dataRow)    
                            ) 
                            ||  (dataRow.rowType === "AddEvent" && 
                                populateDivArray(dataRow.displayDiv,<AddEvent key={dataRow.ID} props={dataRow} />, index, dataRow)    
                            )
                            ||  (dataRow.rowType === "ChatBox" && 
                                populateDivArray(dataRow.displayDiv,<ChatBox key={dataRow.ID} props={dataRow} />, index, dataRow) 
                            )
                        )
                    } 
                    
                    <div    key="pageWrapper"
                            className="pageWrapper"
                            style={{ backgroundImage: 'url('+post.showBG+')' }}>
                        <Navbar   fixed="top" style={{ backgroundColor: post.navBarBGColor }}>
                        <Link       key=            { post.showId+"-link" } 
                                    to=             { `/events/${post.showId+"/"+tabActive}` } 
                                    style=          {{ textDecoration: 'none' }}>
                            <span key="AgendaLink" 
                            className="agendaLink"
                            onClick=        { () => setAgendaVisible(true) }>AGENDA</span>
                            </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Container><span className="showName">{post.showName}</span></Container>
                        </Navbar>
                        <div    className="mainContainer"
                                key="mainContainer">
                                    
                            <Grid container>
                                <Grid item={true} 
                                                    xs=                   { 12 } 
                                                    sm=                   { 12 } 
                                                    md=                   { 8 } 
                                                    lg=                   { 8 } 
                                                    xl=                   { 8 } >

                                    <div className="leftSide"> 
                                        <Grid   item=                 { true } 
                                                xs=                   { 12 } 
                                                sm=                   { 12 } 
                                                md=                   { 12 } 
                                                lg=                   { 12 } 
                                                xl=                   { 12 } 
                                                key=                  { 'G1' } >
                                            <div key="div1" id="div1">{div1}</div>
                                        </Grid>
                                        {
                                            videoPlayers.map((videoPlayer,index) =>
                                                <Route path={"/events/"+post.showId+"/"+videoPlayer.ID}>

                                                    {
                                                        post.dataRows.filter(dataRow => dataRow.ID === videoPlayer.ID).map(item => (

                                                            (item.rowType === "PlenarySession" && 
                                                                <PlenarySession key={item.ID} props={item} agendaItem={false} />  
                                                            )
                                                            ||  (item.rowType === "ConcurrentSession" &&
                                                                <ConcurrentSession key={item.ID} props={item} agendaItem={false} />
                                                            )
        
                                                        ))
                                                    }

                                                    <div    key={videoPlayer.ID+'-playerWrapper'}
                                                            className='playerWrapper'>
                                                            <ReactPlayer
                                                                url={videoPlayer.URL} 
                                                                playing 
                                                                controls 
                                                                width = '100%'
                                                                onDuration={onDuration}
                                                            />
                                                            
                                                    </div>
                                                    
                                                    

                                                </Route>
                                            )                                          
                                        } 


                                        
                                            <Grid   item=                 { true } 
                                                    xs=                   { 12 } 
                                                    sm=                   { 12 } 
                                                    md=                   { 12 } 
                                                    lg=                   { 12 } 
                                                    xl=                   { 12 } 
                                                    key=                  { 'G1' } >

                                                {(agendaVisible)?<div key="div2" id="div2">{div2}</div>:''}
                                            
                                            </Grid>
                                        
                                            <Grid   item=                 { true } 
                                                    xs=                   { 12 } 
                                                    sm=                   { 12 } 
                                                    md=                   { 12 } 
                                                    lg=                   { 12 } 
                                                    xl=                   { 12 } 
                                                    key=                  { 'G2' } >

                                            {    
                                                <div    className="scrollerContainer"
                                                        key="scrollerContainer">
                                                    <div    className="scrollerContent"
                                                            key="scrollerContent"> 
                                                        <div    key="div3" 
                                                                id="div3">
                                                            {
                                                                post.dataRows.filter(dataRow => dataRow.rowType === "AgendaMenu").map(item => (
                                                                    item.tabs.map(tab => (
                                                                        <Route path={"/events/"+post.showId+"/"+tab.ID}>
                                                                            {div3[tab.ID]}
                                                                        </Route>
                                                                    ))
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            </Grid>
                                       
                                    </div>
                                </Grid>
                                <Grid item={true} 
                                                    xs=                   { 12 } 
                                                    sm=                   { 12 } 
                                                    md=                   { 4 } 
                                                    lg=                   { 4 } 
                                                    xl=                   { 4 } > 
                                    
                                    <div    className="rightSide"
                                            key="rightSide">
                                        
                                        {(agendaVisible)?<Route path={'/events/'+post.showId}><div key="div5" id="div5">{div5}</div><div key="div6" id="div6">{div6}</div></Route>:''}
                                        
                                        {
                                            videoPlayers.map((videoPlayer,index) =>
                                                <Route path={"/events/"+post.showId+"/"+videoPlayer.ID}>
                                                    <ChatBox    key={videoPlayer.ID+"-ChatBox"}
                                                                ID={videoPlayer.ID}
                                                                ChatBoxBGColor={post.ChatBoxBGColor}
                                                                ChatBoxTextColor={post.ChatBoxTextColor}
                                                                ChatBoxIcon={post.ChatBoxIcon} />
                                                </Route>
                                            )                                          
                                        }
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Route>
            </Router>
        </ThemeProvider>
    );
}
export default App;
