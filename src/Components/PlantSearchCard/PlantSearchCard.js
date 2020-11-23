import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Hidden } from "@material-ui/core";
import TokenExpiry from '../../utils/TokenExpiry';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link as RouterLink } from "react-router-dom";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Eco from '@material-ui/icons/Eco'



const useStyles = makeStyles({

    media: {
        height: 250,
    },
});



//A simple card that displays possible results to choose from either our database or trefle API results.
export default function PlantSearchCard(props) {

    const classes = useStyles();
    const trefleToken = TokenExpiry.getLocalExpiry("trefleToken")
    const [favorite, setFavorite] = useState(false);

    function makeFavorite() {

        if (!favorite) {
            setFavorite(true);
            props.addFavorite(props.data.slug, props.data._id, localStorage.getItem("id"), trefleToken)
        }

    }


    useEffect(() => {
        if (props.data.favorite) setFavorite(true)
    }, [])

    if ("data" in props) {

        return (
            <React.Fragment>
                <Box p={1} flexShrink={1} boxShadow={3} style={{ margin: "0.83em", background: 'white' }}>
                    <Card className={classes.root} variant="outlined" style={{ margin: "1vh" }}>
                        <CardMedia
                            className={classes.media}
                            image={props.data.image_url}
                            title={"Identifying image of " + props.data.common_name}
                        />
                        <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {props.inDatabase ? <Typography gutterBottom variant="h5" component="h2">
                                    {props.data.common_name}
                                    <Eco color='secondary' gutterBottom />
                                </Typography> : <Typography gutterBottom variant="h5" component="h2">
                                        {props.data.common_name}
                                    </Typography>}
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <i>{props.data.scientific_name}</i>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                className={classes.button1}
                                variant="contained"
                                size="small" color="primary"
                                endIcon={favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                onClick={makeFavorite}
                            ><Hidden only="xs">
                                    Save
                        </Hidden>
                            </Button>
                            {props.inDatabase ? <Button
                                className={classes.button}
                                size="small"
                                color="primary"
                                component={RouterLink}
                                to={"/plant/" + props.data.slug}
                                endIcon={<MoreHorizIcon />}
                            >
                                <Hidden only="xs">
                                    Learn More
                                </Hidden>
                            </Button> : <Button
                                className={classes.button}
                                size="small"
                                color="primary"
                                onClick={() => props.newPlantInDatabase(props.data.slug, trefleToken)}
                                endIcon={<MoreHorizIcon />}
                            >
                                <Hidden only="xs">
                                    Learn More
                                </Hidden>
                            </Button>}
                        </CardActions>
                    </Card>
                </Box>
            </React.Fragment>
        )
    }
    else return (
        <div></div>
    )
}


