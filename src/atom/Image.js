import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const Image = (props, classes) => {
    return (
        <Avatar alt="Image" src={props.src} className={classes.avatar} {...props} />
    )
};

export default Image;