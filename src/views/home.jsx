import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//basic concepts
import JSXDemo from '../components/basic-concepts/jsx-demo';
import StatePropsDemo from '../components/basic-concepts/state-props/StatesPropsDemo';
import EventHandling from '../components/basic-concepts/EventHandling';

//Life cycle event
import LifeCycleEvents from '../components/life-cycle-event/LifeCycleEvent';

// Advanced concepts
import ProductFilterableTable from '../components/advanced-concepts/code-splitting/ProductFilterableTable';
import ThoughtOfTheDay from '../components/advanced-concepts/hight-order-component/ThoughOfTheDayDialog';
import MessageBoard from '../components/advanced-concepts/error-boundary/MessageBoard';

// Redux
import ProductFilterableTableRedux from '../components/Redux/ProductFilterableTable';


function Home(){
    return (
        <React.Fragment>
             <Router>
                <div style={styles.renderPage} >
                   <b>Basic Concepts</b> 
                    <ul>
                        <li>
                        <Link to="/JSX">JSX Demo</Link>
                        </li>
                        <li>
                        <Link to="/statesprops">States & Props</Link>
                        </li>
                        <li>
                        <Link to="/eventhandling">Event Handling</Link>
                        </li>
                    </ul>

                    <b>Life Cycle Events</b>
                    <ul>
                        <li>
                        <Link to="/lifecycleevent">Demo</Link>
                        </li>                                            
                    </ul>

                    <b>Advanced Concepts</b>
                    <ul>
                        <li>
                        <Link to="/codesplitting">Code-Splitting</Link>
                        </li>     
                        <li>
                        <Link to="/highordercomponents">High-Order Components</Link>
                        </li>
                        <li>
                        <Link to="/errorboundary">Error Boundary</Link>
                        </li>                                               
                    </ul>

                    <b>Redux</b>
                    <ul>
                        <li>
                        <Link to="/redux">Redux Demo</Link>
                        </li>                                            
                    </ul>


                </div>
                <div style={styles.displayPage}>
                    <Switch>
                        
                        {/* Basic concepts */}
                        <Route path="/JSX">
                            <JSXDemo />
                        </Route>
                        <Route path="/statesprops">
                            <StatePropsDemo />
                        </Route>
                        <Route path="/eventhandling">
                            <EventHandling />
                        </Route>


                         {/* Life Cylcel Event */}
                         <Route path="/lifecycleevent">
                            <LifeCycleEvents />
                        </Route>


                        {/* Advanced Concepts */}
                        <Route path="/codesplitting">
                            <ProductFilterableTable />
                        </Route>
                        <Route path="/highordercomponents">
                            <ThoughtOfTheDay />
                        </Route>
                        <Route path="/errorboundary">
                            <MessageBoard />
                        </Route>

                         {/* Redux */}
                         <Route path="/redux">
                            <ProductFilterableTableRedux />
                        </Route>

                    </Switch>
                </div>
            
            </Router>
        </React.Fragment>
    );
}

const styles ={
    renderPage :{
        display: 'inline-table',
        width : '20%', 
        borderRight: ' 1px solid #000', 
        height: '800px', 
        textAlign: 'center' 
    },
    displayPage:{
        display: 'inline-grid',
        width: '80%'
    }
}

export  default  Home;