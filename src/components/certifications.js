import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certifications extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                <p>{this.props.startYear}</p>
                </Cell>
                <Cell col={8}>
                <h4 style={{marginTop: '0px'}}>{this.props.certification}</h4>
                </Cell>
            </Grid>
        )
    }
}

export default Certifications;