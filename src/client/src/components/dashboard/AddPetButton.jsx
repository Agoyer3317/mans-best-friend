import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import axios from 'axios';

const styles = (theme) => ({
    fab: {
        margin: theme.spacing.unit
    }
});

function AddPetButton(props) {
    function addPet() {
        axios
            .post('/api/pets', { owner_id: 1, species_id: 1, sub_species_id: 1, breed_id: 1, name: 'cat' })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    const { classes } = props;
    return (
        <div>
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={addPet}>
                <AddIcon />
            </Fab>
        </div>
    );
}

const Component = withStyles(styles)(AddPetButton);
export { Component as AddPetButton };
