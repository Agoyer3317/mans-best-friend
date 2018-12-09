import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    withStyles
} from '@material-ui/core';
import React from 'react';
import reptile from '../assets/images/reptile.jpg';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
};

function CardsDashboard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={reptile} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

const Component = withStyles(styles)(CardsDashboard);
export { Component as CardsDashboard };
