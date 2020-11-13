import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import PlantSearchCard from '../PlantSearchCard/PlantSearchCard';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from "@material-ui/core";


// import PlantSearchCard from '../PlantSearchCard/PlantSearchCard';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "green"
  }
}));


export default function Results() {
    const [plantsInDatabase, setPlantsInDatabase] = useState([])
    const [plantsInTrefle, setPlantsInTrefle] = useState([])
    useEffect(() => {
        API.getDatabasePlants("rosemary")
            .then(result => {
                console.log(result.data)
                (Array.isArray(result)) ? setPlantsInDatabase(result.data): setPlantsInDatabase("No plants found")
                
            }).catch(err => console.log(err));

        API.getToken().then(result => {
            console.log(result.data);


            API.getSearchedPlants("rosemary", result.data.token)
                .then(result => {
                    console.log(result.data)
                    setPlantsInTrefle(result.data)
                }).catch(err => console.log(err));
        }, err => console.log(err))


    }, [])

  const classes = useStyles();


    return (
        <div className={classes.root}>
          <Box display="flex" flexDirection="row" flexWrap="wrap" alignContent="flex-start" p={1} m={1}>
          <Box p={1} flexShrink={1}>
            {/* Section with plants already in our database */}
            {console.log(plantsInDatabase)}
            {plantsInDatabase.length===0 ? "no plants found":"plants found"}
            {plantsInDatabase.map(element => {
                
                return <PlantSearchCard data={element} key={element.scientific_name} />
            })}
            {plantsInTrefle.map(element => {
                return <PlantSearchCard data={element} key={element.scientific_name} />
            })}
            </Box>
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" alignContent="flex-start" p={1} m={1}>

            {/* Button for more plants */}
            <Box p={1}flexShrink={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<MoreHorizIcon />}
              ><Hidden only ="xs">
                MORE
                </Hidden>
            </Button>
            </Box>
            {/* Upon button being clicked, button for more plants does an api call  */}
            {/* next and back buttons to get more results from trefle */}
            <Box p={1}flexShrink={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<ArrowBackIcon />}
              ><Hidden only="xs">
                LEFT
                </Hidden>
            </Button>
            </Box>
            <Box p={1}flexShrink={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<ArrowForwardIcon />}
              ><Hidden only="xs">
                RIGHT
                </Hidden>
            </Button>
            </Box>
            </Box>
        </div>
    )
}
