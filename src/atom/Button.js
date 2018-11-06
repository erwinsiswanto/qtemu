import React from 'react';
import Button from '@material-ui/core/Button';

/*class Button extends React.Component {
    render() {
        const {label} = this.props;

        return (
            <button className="button" {...this.props}>{label}</button>
        )
    }
}*/

//stateless component
const myButton = (props) => {
    const label = props.label;

    return(
        <Button variant="contained" color="primary">{label}</Button>
    )
};

export default myButton;