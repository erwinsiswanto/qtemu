import React from 'react';
import Text from './../atom/Text';
import {connect} from 'react-redux'

class Index extends React.Component{
    render() {
        const props = this.props;

        return (
            <div>
                <div className="myRow">
                    <div className="myContainer">
                        <hr/>
                    </div>
                </div>

                <div className="myRow">
                    <div className="myContainer" style={{textAlign:"center"}}>
                        <Text>Copyright {props.app.pageTitle} {props.app.copyrightYear}</Text>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        app: state.app //state.app = variable yg ada di file store.js
    }
};

export default connect(mapStatetoProps)(Index);