import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                 <div className="skills">
                     <h4>Java  •  Spring  •  Hibernate  •  JPA  •  JavaScript  •  ReactJS  •  MVC  •  HTML  •  CSS  •  TDD  •  Agile(Scrum)  •  Object Oriented Programming (OOP)  •  JSON  •  Restful APIs  •  Relational Databases  •  Source Control/Git  •  SQL</h4>
                 </div> 
                </Cell>
            </Grid>

        )
    }
}

export default Skills;