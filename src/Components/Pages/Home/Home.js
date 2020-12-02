import React, { Component } from 'react';
import Search from "../../Search/Search";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RecentCard from '../../Recent/Recent';
import Hidden from '@material-ui/core/Hidden';
import Results from '../../Results/Results';
import API from '../../../utils/API';
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Transition, animated } from 'react-spring/renderprops';
import Hero from '../../Hero/Hero';



const theme = createMuiTheme({
    palette: {
        background: {
            default: '#005254',
        },
            primary: {
              light: '#806673',
              main: '#614051',
              dark: '#432c38',
              contrastText: '#fff',
            },
            secondary: {
              light: '#578c5a',
              main: '#166732',
              dark: '#204e22',
              contrastText: '#fff',
            },
          },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});

const useStyles = makeStyles((theme) => ({

    app: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
        background: '#cac5b9',
        
    },
}));
class Home extends Component {
    state = {
        plants: [],
        searchValue: "",
        submittedSearch: "",
        seachedPlants: [],
        toggleHero: true,
        visitedHero: false,
        isMyPlant: false,
    };

    // Function to setState if the site has been visited so that Hero Image hides
    componentDidMount() {
        const isVisited = localStorage.getItem("isVisited")
        if (isVisited === "true") {
            this.setState({toggleHero: false})
            this.setState({visitedHero: true})
        }

        // API call to load featured Plants when page loads
        API.getFeaturedPlants()
            .then(result => {
                const featuredPlants = result.data.map(element => { return element.plantInfo[0] })
                this.setState({ plants: featuredPlants })
            })
    }

    // Handle Input Change for the search bars
    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    // On Submit set the state for the desired search state and that state that the site has been visited
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            submittedSearch: this.state.searchValue,
            toggleHero: false
        })
        localStorage.setItem("isVisited", true)
        
    }

    // To remove a plant from the My Plants array
    removePLant = id => {
        const plants = this.state.plants.filter(plant => plant.id !== id);
        this.setState({ plants })
    };

    // Toggle to hide Hero Image
    toggle = e => {this.setState({ toggleHero: false })
        localStorage.setItem("isVisited", true)}

    render() {
        const classes = useStyles;
        return (
                <React.Fragment>
                    <CssBaseline /> 
                    <MuiThemeProvider theme={theme}>
                    <div className={classes.app}  style={{background:'#005254'}}>
                        <Grid container >
                           
                           {/* Animated Hero */}
                            <Grid item mx="auto" display="flex" style={{ width: '100%', height: '100%' }}>
                                <Transition
                                    native
                                    items={this.state.toggleHero}
                                    from={{ opacity: 1 }}
                                    enter={{ opacity: 1 }}
                                    leave={{ opacity: 0 }}
                                >{show => show && (props => (
                                    <animated.div style={props}>
                                        <Hero
                                            toggle={this.toggle}
                                            visitedHero={this.state.visitedHero}
                                            handleFormSubmit={this.handleFormSubmit}
                                            handleInputChange={this.handleInputChange} 
                                            state={this.state}
                                        />
                                    </animated.div>
                                ))}
                                </Transition>
                            </Grid>
                            <Grid container justify='center'>

                                 {/*Featured Plants only visible on nonmobile views  */}
                                <Hidden only={["xs", "sm"]}>
                                    <Grid item md={3} mx="auto" p={1} m={1} style={{ height: '85vh', width: '35%', margin: '2%' }}>
                                        <Paper className={classes.paper} style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#cac5b9' }}>
                                            <Typography variant='h4' component= 'h1' style={{ margin: "0em", padding: "25px", textAlign: 'center' }}>
                                                Featured Plants
                                            </Typography>
                                            <Grid item style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
                                                {this.state.plants.map(plant => (
                                                    <RecentCard
                                                        _id={plant._id}
                                                        key={plant.slug}
                                                        slug={plant.slug}
                                                        common_name={plant.common_name}
                                                        image_url={plant.image_url}
                                                        isMyPlant= {false}
                                                    />
                                                ))}
                                            </Grid>
                                        </Paper>

                                    </Grid>
                                </Hidden>

                                {/* Search Results */}
                                <Grid item md mx="auto" style={{height: '85vh', width: 'auto', margin: '2%' }}>
                                    <Paper className={classes.paper} style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#cac5b9' }}>
                                        <Search handleFormSubmit={this.handleFormSubmit}
                                            handleInputChange={this.handleInputChange} state={this.state} />
                                        {/* <h2 style={{margin: "0em", padding: "1em"}}>Search Results</h2> */}
                                        <Results submittedSearch={this.state.submittedSearch} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    </MuiThemeProvider>
                </React.Fragment>
        )
    }

}

export default Home;
