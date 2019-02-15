import React from "react";
function ShowDetailForm(props){
    console.log("props.images是"+props.images);
    return (
        <form>
            <div className="form-group">
                <label htmlFor="clientCode">Client Code</label>
                <input  onChange={e=>props.onClientCodeChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Client Code" id="clientCode" value={props.clientCode}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            <div>
            <select onChange={e=>props.onStatusChangeHandler(e)}>
                {
                    function(){
                        if(props.status === "Pending List"){
                            return <option value="Pending List" selected>Pending List</option>
                        }else{
                            return <option value="Pending List">Pending List</option>
                        }
                    }()
                }
                {
                    function(){
                        if(props.status ==="Item Available"){
                            return <option value="Item Available" selected>Item Available</option>
                        }else{
                            return <option value="Item Available">Item Available</option>
                        }
                    }()
                }
                {
                    function(){
                        if(props.status === "Item sold"){
                            return  <option value="Item sold" selected>Item sold</option>
                        }else{
                           return  <option value="Item sold">Item sold</option>
                        }
                    }()
                }
                {
                    function () {
                        if (props.status === "Pending Payment") {
                            return <option value="Pending Payment" selected>Pending Payment</option>
                        } else{
                            return <option value="Pending Payment">Pending Payment</option>
                        }
                    }()
                }
                {
                    function(){
                        if(props.status === "Seller Payout Completed"){
                            return <option value="Seller Payout Completed" selected>Seller Payout Completed</option>
                        }else{
                            return <option value="Seller Payout Completed">Seller Payout Completed</option>
                        }
                    }
                }
            </select>
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
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input  onChange={e=>props.onDescriptionChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Description" id="description" value={props.description}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input  onChange={e=>props.onLocationChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Location" id="location" value={props.location}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            <div className="form-group">
                <label htmlFor="listedPrice">Listed Price</label>
                <input  onChange={e=>props.onListedPriceChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter ListedPrice" id="listedPrice" value={props.listedPrice}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            <div className="form-group">
                <label htmlFor="sellingPrice">Selling Price</label>
                <input  onChange={e=>props.onSellingPriceChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Selling Price" id="sellingPrice" value={props.sellingPrice}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            <div className="form-group">
                <label htmlFor="reserve">Reserve</label>
                <input  onChange={e=>props.onReserveChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Reserve" id="reserve" value={props.reserve}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>

            <div className="form-group">
                <label htmlFor="SKU">SKU</label>
                <input  onChange={e=>props.onSKUChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter SKU" id="SKU" value={props.SKU}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>

            <div className="radio">
                <label>
                    { function() {
                        if (props.paymentMethod === "Wiretransfer") {
                            return <input type="radio" name="optionsRadios" id="optionsRadios1" value="Wiretransfer" checked
                                          onChange={(e) => props.onPaymentMethodChangeHandler(e)}/>
                        } else {
                            return (<input type="radio" name="optionsRadios" id="optionsRadios1" value="Wiretransfer"
                                           onChange={(e) => props.onPaymentMethodChangeHandler(e)}/>)
                        }
                    }()
                    }Wiretransfer
                </label>
            </div>
            <div className="radio">
                <label>
                    { function() {
                        if (props.paymentMethod === "Cash") {
                            return <input type="radio" name="optionsRadios" id="optionsRadios2" value="Cash" checked
                                          onChange={(e) => props.onPaymentMethodChangeHandler(e)}/>
                        } else {
                            return (<input type="radio" name="optionsRadios" id="optionsRadios2" value="Cash"
                                           onChange={(e) => props.onPaymentMethodChangeHandler(e)}/>)
                            }
                        }()
                    }Cash

                </label>
            </div>
            <div className="radio">
                <label>
                    {
                        function() {
                            if (props.paymentMethod === "Paypal") {
                                return <input type="radio" name="optionsRadios" id="optionsRadios3" value="Paypal" onChange={(e)=>props.onPaymentMethodChangeHandler(e)}/>
                                    }else return <input type="radio" name="optionsRadios" id="optionsRadios3" value="Paypal" onChange={e=>props.onPaymentMethodChangeHandler(e)}/>
                         }()
                    }Paypal

                </label>
            </div>
            <div className="radio">
                <label>
                    {
                        function() {
                            if (props.paymentMethod === "Cheque") {
                                return <input type="radio" name="optionsRadios" id="optionsRadios4" value="Cheque" onChange={(e)=>props.onPaymentMethodChangeHandler(e)}/>
                            }else return <input type="radio" name="optionsRadios" id="optionsRadios4" value="Cheque" onChange={e=>props.onPaymentMethodChangeHandler(e)}/>
                        }()
                    }Cheque

                </label>
            </div>
            <div className="radio">
                <label>
                    {
                        function() {
                            if (props.paymentMethod === "Credit Card") {
                                return <input type="radio" name="optionsRadios" id="optionsRadios5" value="Credit Card" onChange={(e)=>props.onPaymentMethodChangeHandler(e)}/>
                            }else return <input type="radio" name="optionsRadios" id="optionsRadios5" value="Credit Card" onChange={e=>props.onPaymentMethodChangeHandler(e)}/>
                        }()
                    }Credit Card
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="transactionDetails">Transaction Details</label>
                <input  onChange={e=>props.onTransactionDetailsChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Transaction Details" id="transactionDetails" value={props.transactionDetails}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            <div className="form-group">
                <label htmlFor="amountReceived">Amount Received</label>
                <input  onChange={e=>props.onAmountReceivedChangeHandler(e)} type="text" className="form-control"
                        placeholder="Enter Amount Received" id="amountReceived" value={props.amountReceived}/>
                {/*{this.state.clientCode.valid === true ? null :*/}
                {/*<small className="form-text text-danger">{this.state.clientCode.errorMsg}</small>}*/}
            </div>
            {
                props.images.map(function(url){
                    let indexOfLastBackSlash = url.lastIndexOf("\\");
                    url = "../images/"+url.substring(indexOfLastBackSlash+1,url.length);
                    return <img src={url}/>
                })
            }
            <button onClick={(e)=>props.onSubmitHandler(e)}  className="btn btn-primary"> Submit</button>
        </form>
    )
}

export default ShowDetailForm;