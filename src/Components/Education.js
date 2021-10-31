import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
               
                <Cell col={8}>
                <h4 style={{marginTop: '0px'}}>{this.props.course} - Present</h4>
                    <p>{this.props.institute}</p>
                    <h4 style={{marginTop: '0px'}}>{this.props.degreeName} 2014-2018</h4>
                    <p>{this.props.schoolName}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Education;