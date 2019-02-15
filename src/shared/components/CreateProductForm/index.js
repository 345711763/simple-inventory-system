import React from "react";
import {Fragment} from "react";
import {withRouter} from "react-router-dom";
function CreateProductForm(props){
            return (
                <Fragment>
                    <form>
                        <div className="form-group">
                            <label htmlFor="clientCode">Client Code</label>
                            <input  onChange={e=>props.onClientCodeChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Client Code" id="clientCode" value={props.clientCode}/>
                            {/*{this.state.clientCode.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={e=>props.onTitleChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Title" id="title" value={props.title}/>
                            {/*{this.state.title.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.title.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <input  onChange={e=>props.onBrandChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Brand" id="brand" value={props.brand}/>
                            {/*{this.state.brand.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.brand.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="model-number">Model Number</label>
                            <input  onChange={e=>props.onModelNumberChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Model Number" id="model-number" value={props.modelNumber}/>
                            {/*{this.state.modelNumber.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.modelNumber.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="dimensions">Dimensions</label>
                            <input  onChange={e=>props.onDimensionsChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Dimensions" id="dimensions" value={props.dimensions}/>
                            {/*{this.state.dimensions.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.dimensions.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input  onChange={e=>props.onWeightChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Weight" id="weight" value={props.weight}/>
                            {/*{this.state.weight.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.weight.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input  onChange={e=>props.onQuantityChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Quantity" id="quantity" value={props.quantity}/>
                            {/*{this.state.quantity.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.quantity.errorMsg}</small>}*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input onChange={e=>props.onCategoryChangeHandler(e)} type="text" className="form-control"
                                   placeholder="Enter Category" id="category" value={props.category}/>
                            {/*{this.state.category.valid === true ? null :*/}
                                {/*<small className="form-text text-danger">{this.state.category.errorMsg}</small>}*/}
                        </div>
                        <button onClick={props.onSubmitHandler} className="btn btn-primary">Save and Exit</button>
                        <button onClick={props.onNextHandler}  className="btn btn-primary"> Next Page</button>
                    </form>
                </Fragment>
            )
}

export default withRouter(CreateProductForm);