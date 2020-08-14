import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* All projects */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.logolynx.com/images/logolynx/e8/e8174068fec1e943287da125df0eff98.png) center / cover'}}></CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                {/* Project 2 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://spring.io/images/OG-Spring.png) center / cover'}}></CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                {/* Project 3 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '185px', background: 'url(https://www.freepnglogos.com/uploads/javascript-png/logo-html5-js-css3-png-transparent-logo-4.png) center / cover'}}></CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                {/* Project 4 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}></CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
               </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="java-page">
                    {/* Project 1 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.logolynx.com/images/logolynx/e8/e8174068fec1e943287da125df0eff98.png) center / cover'}}>Java Project #1</CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                </div>
            )}
            else if(this.state.activeTab === 2) {
            return (
                <div className="spring-page">
                    {/* Project 2 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://spring.io/images/OG-Spring.png) center / cover'}}>Spring Project #2</CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div className="javascript-page">
                     {/* Project 3 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '185px', background: 'url(https://www.freepnglogos.com/uploads/javascript-png/logo-html5-js-css3-png-transparent-logo-4.png) center / cover'}}>JavaScript Project #3</CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div className="react-page">
                                    {/* Project 4 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>ReactJS Project #4</CardTitle>
                   <CardText>
                       Pet Shelter is an application created with Java.
                   </CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>
               </Card>
                </div>
            )
        }

    }


    render() {
        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>All</Tab>
                <Tab>Java</Tab>
                <Tab>Spring</Tab>
                <Tab>JS/HTML/CSS</Tab>
                <Tab>ReactJS</Tab>
              </Tabs> 

              
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                  
         
            </div>
        )
    }
}

export default Projects;