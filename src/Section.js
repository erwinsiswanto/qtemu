import React from 'react'
import Paper from '@material-ui/core/Paper';

class Section extends React.Component {
    render() {
        const {title, children, see} = this.props;

        return(
            <Paper>
                <div className="myContainer">
                        <span style={{width: "100%"}}>
                            <h3 style={{display: "inline-block", margin: "0px"}}>{title}</h3>
                            <span style={{float: "right", display: "inline-block", marginRight: "1%"}}>{see ? "See All" : ""}</span>
                        </span>

                    <div className="myRow" {...this.props}>
                        {children}
                    </div>
                </div>
            </Paper>
        )
    }
}

export default Section;