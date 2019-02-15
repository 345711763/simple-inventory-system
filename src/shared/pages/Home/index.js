import React from "react";
import {Fragment} from "react";
import ProductTable from "../../components/productTable";
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        if (__isBrowser__) {
            return (
                <Fragment>
                    <ProductTable data={window.__INITIALDATA__}/>
                </Fragment>)


        }else{
            return (
                <Fragment>
                    <ProductTable data={this.props.objs}/>
                </Fragment>)
        }
    }
}


export default Home;