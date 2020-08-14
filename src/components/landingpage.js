import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src= {require("../assets/IMG_1.jpg")} alt="idPhoto" className="idPhoto" />

                    <div className="banner-text">
                        <h1>Software Developer</h1>                 
                        <hr/>

                        <p>Java | Spring | Hibernate | JPA | JavaScript | MVC | HTML/CSS | TDD | Agile(Scrum) | OOP | JSON | Restful APIs | Git | SQL</p>
                    <div className="social-links">
                   
                        {/* Github */}
                        <a href="https://github.com/simonjv01" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>

                        {/* LindkedIn */}
                        <a href="https://www.linkedin.com/in/simon-vargas/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                         {/* Twitter */}
                         <a href="https://twitter.com/sjvargas01" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square"  aria-hidden="true" />
                        </a>
                    </div>
                    </div>
                </Cell>
            </Grid>
              
            </div>
        )
    }
}

export default Landing;