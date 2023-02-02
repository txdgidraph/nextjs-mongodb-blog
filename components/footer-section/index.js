import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Facebook,
  Twitter,
  YouTube,
  LinkedIn,
  Instagram,
  Pinterest,
} from "@material-ui/icons";

const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: "#0a192b",
    color: "white",
    padding: "30px 0",
    marginTop: "2em",
  },
  footer_grid_container: {
    margin: "0 5em 0 5em",
  },
  heading: {
    fontWeight: "bold",
    paddingBottom: "5px",
  },
});

const FooterComponent = () => {
  const footer_classes = useStyles();

  return (
    <div className="footerContainer">
      <Grid
        container
        spacing={3}
        className="footer_grid_container"
      >
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" className="footer_heading">
            About
          </Typography>
          <Typography variant="body1">Cybermatta</Typography>
          <Typography variant="body1">Staff</Typography>
          <Typography variant="body1">Contact Us</Typography>
          <Typography variant="body1">Advertise</Typography>
          <Typography variant="body1">Newsletters</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" className="footer_heading">
            Legal
          </Typography>
          <Typography variant="body1">Terms of Service</Typography>
          <Typography variant="body1">Privacy Policy</Typography>
          <Typography variant="body1">Code of Conduct</Typography>
          <Typography variant="body1">About Our Ads</Typography>
          <Typography variant="body1">Newsletters</Typography>
          <Typography variant="body1">Site Map</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" className="footer_heading">
            Navigation
          </Typography>
          <Typography variant="body1">Tech News</Typography>
          <Typography variant="body1">Startups</Typography>
          <Typography variant="body1">Events</Typography>
          <Typography variant="body1">Gadgets & Appliances</Typography>
          <Typography variant="body1">Tech Bros</Typography>
          <Typography variant="body1">Women in Tech</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" className="footer_heading">
            Social Media
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Facebook />
            <Twitter />
            <YouTube />
            <Instagram />
            <LinkedIn />
            <Pinterest />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterComponent;
