import React from 'react';
import Text from './../atom/Text';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends React.Component {
    render() {
        const props = this.props;

        return (
            <div className="myRow" style={{backgroundColor: "grey", minHeight: "50px"}}>
                <div>
                    <h1 style={{margin: "0px", paddingLeft: "1%", display: "inline-block"}}><Text styled={{variant:"h4"}}>{props.app.pageTitle}</Text></h1>
                    <Link to="/">
                        <MenuItem style={{display: "inline", marginLeft: "3%"}}>Home</MenuItem>
                    </Link>

                    <Link to="/about">
                        <MenuItem style={{display: "inline"}}>About</MenuItem>
                    </Link>

                    <MenuItem style={{float: "right"}}>Login</MenuItem>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app, //state.app = variable yg ada di file store.js
    }
};

//export default Navbar;
export default connect(mapStateToProps)(Navbar);