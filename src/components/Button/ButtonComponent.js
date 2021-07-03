import React from 'react';
import {Button} from '@material-ui/core'

const ButtonComponent = props => {
    return (
        <Button variant="contained" color="secondary" >
            {props.title}
        </Button>
    );
}

export default ButtonComponent;
