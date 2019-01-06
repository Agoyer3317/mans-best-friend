import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import reptile from '../../assets/images/reptile.jpg';
import { Link } from 'react-router-dom';

const styles = {
    card: {},
    media: {
        height: 140
    }
};

// ⭐ In the dashboard, pass the pet's ID to this component
// ⭐ Import the Link component from react-router-dom (see: NavigationBar.jsx)
// ⭐ Link TO "/pet/<pet-id>"
// <Link to="<path>">TEXT</Link>

/**
 * @augments {React.Component<{classes: any, name: string, id: number}, {}>}
 */
class DashboardCard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={reptile} title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <Link to={`/pet/${this.props.id}`}>{this.props.name}</Link>
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                            all continents except Antarctica
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
}

const Component = withStyles(styles)(DashboardCard);
export { Component as DashboardCard };
