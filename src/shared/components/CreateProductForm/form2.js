import React from 'react';

function Form2(props){
        return (
            <form>
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
                <div className="file-uploader">
                    <input onChange={e=>props.onImagesUploadChangeHandler(e)} type="file" accept="image/*" multiple/>
                </div>
                <button onClick={props.onSubmitHandler} className="btn btn-primary">Save and Exit</button>
                { props.stage === 2 ? null:  <button onClick={props.onBackHandler} className="btn btn-primary">Back</button>
                }
                <button onClick={props.onNextHandler}  className="btn btn-primary"> Next Page</button>
            </form>
        )
}
export default Form2;