import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Simon Vargas</h2>
                    <img src= {require("../assets/IMG_1.jpg")} alt="idPhoto" className="idPhoto" style={{height: '250px'}}/>
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsume is skfjldk fljslkjfl sljflsd  slfjd. lsjflsdkjf sljfd sljf sldjf s. slfjlsdj.s flskdjfls. slfjlskdfjlskdjflskdjfls lskdfjls sldjflsdjf s.</p>
                    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (614)843-1443
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                sjvargas01@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                <a href="https://www.linkedin.com/in/simon-vargas/" rel="noopener noreferrer" target="_blank">Message me in LinkedIn</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-twitter" aria-hidden="true"/>
                                <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">Twitter: @sjvargas01</a>
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                 






                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Contact;