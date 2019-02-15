import React from 'react';

function Form3(props){
        return (
            <form>
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

                <button onClick={props.onSubmitHandler} className="btn btn-primary">Save and Exit</button>
                {props.stage === 3 ? null : <button onClick={props.onBackHandler} className="btn btn-primary">Back</button>}

            </form>
        )
}
export default Form3;