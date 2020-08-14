import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Certifications from './certifications';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img src= {require("../assets/IMG_1.jpg")} alt="idPhoto" className="idPhoto"
                        style={{height: '200px'}} />

                        </div>

                        <h2 style={{paddingTop: '2em'}}>Simon Vargas</h2>
                        <h4 style={{color: 'gray'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #0072ff', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <hr style={{borderTop: '3px solid #0072ff', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>3062 Descent Ct., Hilliard, OH 43026</p>
                        <h5>Phone</h5>
                        <p>614-843-1443</p>
                        <h5>Email</h5>
                        <p>sjvargas01@gmail.com</p>
                        <h5>website address</h5>
                        <hr style={{borderTop: '3px solid #0072ff', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="WeCanCodeIt"
                            schoolDegree="Certificate of Software Development"
                        /> 
                               <Education 
                            startYear={2018}
                            endYear={2019}
                            schoolName="The Ohio State University"
                            schoolDegree="Graduate Certificate in Analytics"
                        />       
                         <Education 
                            startYear={2003}
                            endYear={2005}
                            schoolName="Franklin University"
                            schoolDegree="BS in Business Administration"
                        /> 
                         <hr style={{borderTop: '3px solid #0072ff', width: '50%'}}/>

                         <h2>Experience</h2>

                         <Experience
                         startYear={2017}
                         endYear="current"
                         companyName="JPMorgan Chase"
                         jobTitle="QA Associate" 
                         jobDescription1="- QA testing for financial reporting."
                         jobDescription2="- Perform data integrity testing utilizing SQL queries to pull data and validate to system of record."
                         />
                          <Experience
                         startYear={2013}
                         endYear="2017"
                         companyName="Verizon Wireless"
                         jobTitle="Senior Analyst"
                         />
                            <Experience
                         startYear={2012}
                         endYear={2013}
                         companyName="Ashland Inc"
                         jobTitle="Staff IT Auditor II"
                         />
                          <hr style={{borderTop: '3px solid #0072ff', width: '50%'}}/>

                          <h2>Certifications</h2>

                          <Certifications
                          startYear={2012}
                          certification="Certified Information Systems Auditor(CISA) - Inactive"
                          />
                               <Certifications
                          startYear={2009}
                          certification="CompTIA Security+"
                          />

                              <hr style={{borderTop: '3px solid #0072ff', width: '50%'}}/>

                            <h2>Skills</h2>
                          <Skills 
                              skill="Java"
                              progress={55}
                          />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;