import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../../utils/API";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RecentCard from "../../Recent/Recent";
import "../MyPlant/MyPlant.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Location from "../../Location/Location";
import Interests from "../../Interests/Interests";
import Skills from "../../Skills/Skills";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#005254",
    },
    primary: {
      light: '#806673',
      main: '#614051',
      dark: '#432c38',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c88f76',
      main: '#bb7354',
      dark: '#82503a',
      contrastText: '#fff',
    },
    action: {
      disabled: {
        light: '#c88f76',
        main: '#bb7354',
        dark: '#82503a',
        contrastText: '#fff',
      },
    },
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default class profile extends Component {
  state = {
    id: "",
    user: "",
    plants: [],
    location: "",
    skills: [],
    interests: [],
  };

  componentDidMount() {
    const userID = localStorage.getItem("id");

    if (userID === null) {
      this.props.history.push("/");
    } else if (userID != null) {
      API.getUser(userID).then((result) => {
        this.setState({
          user: result.data,
          plants: result.data.myPlants,
          id: result.data._id,
        });
      });
    }
  }

  render() {
    const classes = useStyles;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <Container>
              {/* Page Header (Profile Page name) */}
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h3"}
                    fontWeight="bold"
                    component="h3"
                    align="center"
                    style={{
                      color: "#a9a9a9",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    {this.state.user.username}'s Profile
                  </Typography>
                </Grid>
{/* Rendering of My Garden image to profile page */}
                <Typography style={{ color: "#a9a9a9", margin: "2%" }}>
                  <h2>My Garden:</h2>
                </Typography>
                {/* Location/Skills/Interests rendered */}
                <Grid item>
                  <Grid container justify="space-evenly">
                    <Grid item xs={12} lg={8}>
                      <img
                        alt=""
                        src={this.state.user.myGardenImg}
                        style={{ background: "#cac5b9" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      style={{ background: "#cac5b9" }}
                    >
                      <Typography style={{ margin: "2%" }}>
                      <h3>City, State, and/or Country:</h3>
                      <p>{this.state.user.location}</p>
                      {/* Button to open location modal */}
                      <Location id={this.state.id} />

                      <h3>Gardening Interests: </h3>
                      <p>{this.state.user.interests}</p>
                      {/* Button to open Interests Modal */}
                      <Interests id={this.state.id} />

                      <h3>Gardening Skills:</h3>
                      <p>{this.state.user.skills}</p>
                      {/* Button to open Skills modal */}
                      <Skills id={this.state.id} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
{/* Rendering of my plants to profile page */}
                <Grid item>
                  <Typography style={{ color: "#a9a9a9", margin: "2%" }}>
                    <h2>My Plants:</h2>
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    {this.state.plants.map((plant) => (
                      <Grid item xs key={plant.slug}>
                        <RecentCard
                          _id={plant._id}
                          key={plant.slug}
                          common_name={plant.common_name}
                          slug={plant.slug}
                          image_url={plant.image_url}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
