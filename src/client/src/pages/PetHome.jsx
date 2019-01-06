import Typography from '@material-ui/core/Typography';
import React from 'react';
import axios from 'axios';

// ⭐ Import Axios
// ⭐ Set an initial state (pet = null)
// ⭐ Use componentDidMount to perform an AJAX request to /api/pets/:id
// ⭐ After the request completes, update the pet state
// ⭐ Put the pet's name on the screen

export class PetHome extends React.Component {
    state = {
        pet: null
    };

    async componentDidMount() {
        console.log(this.props);

        try {
            // make the ajax call here
            const { data } = await axios.get(`/api/pets/${this.props.match.params.id}`);

            console.log(data);

            this.setState({ pet: data });
            // update pet in the state
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            this.state.pet && (
                <>
                    <Typography variant="h1">{this.state.pet.name}</Typography>
                </>
            )
        );
    }
}
