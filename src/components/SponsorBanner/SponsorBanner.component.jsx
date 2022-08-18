import React from 'react';
import './SponsorBanner.component.css';

import Grid from '@material-ui/core/Grid';

import sponsorLogo1 from "../../images/sponsorLogos/1.png";
import sponsorLogo2 from "../../images/sponsorLogos/2.png";
import sponsorLogo3 from "../../images/sponsorLogos/3.png";



const SponsorBanner = (props) => (

    <div tabIndex   = "0" 
         key        = { 'SponsorBanner  div' }
         className  = { "SponsorBanner" }  >

<Grid container>
    <Grid item={true} xs={4}> 
    <div className="sponsorTag">SPONSORS</div>
<img src={sponsorLogo1} alt={""}/>


        
    </Grid> 
    <Grid item={true} xs={4}> 
    <img src={sponsorLogo2} alt={""}/>

        
    </Grid> 
    <Grid item={true} xs={4}> 
<img src={sponsorLogo3} alt={""}/>

        
    </Grid> 
</Grid>    

    </div>

);

export default SponsorBanner;