import React from 'react';
import Typography from '@material-ui/core/Typography';

/*class Text extends React.Component {

    render() {
        const {label} = this.props;

        return (
            <span>{label}</span>
        );
    }
}*/

//stateless component
const Text = (props) => {
    const {children, styled} = props;

    return (
        <Typography {...styled}>{children}</Typography>
    );
}

export default Text