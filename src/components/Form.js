import React from 'react';
import TextField from '@material-ui/core/TextField';

const Form = props  => {
    return (
        <form>
            <TextField 
            id="outlined-secondary" 
            label="Wpisz miasto" 
            variant="outlined"
            value={props.value} 
            onChange={props.change}
            />
        </form>
    )
}

export default Form;