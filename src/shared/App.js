import React from "react";
import { Fragment } from "react";
import {BrowserRouter,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Create from "./pages/Create" ;
import Product from "./pages/Product";
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(__isBrowser__) {
            return (
                <Fragment>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/product" component={Product}/>
                </Fragment>
            )
        }
        if(!__isBrowser__){
            return(
                <Fragment>
                    <NavBar/>
                    <Route exact path="/" render={(props) => <Home {...props} obj={this.props.objs}/>}/>
                    <Route path="/create" render={(props)=><Create {...props} obj={this.props.obj}/>}/>
                    <Route path="/product" render={(props)=><Product {...props} obj={this.props.obj}/>}/>
                </Fragment>
            )
        }
    }
}

export default App;