import React from "react";
import ShowDetailForm from "../../components/ShowDetailForm";
import axios from "axios";
class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        if(__isBrowser__ === true){
            if(window.__INITIALDATA__ !== null){
                this.state ={
                    _id:window.__INITIALDATA__._id,
                    status:window.__INITIALDATA__.status,
                    clientCode:window.__INITIALDATA__.clientCode,
                    title:window.__INITIALDATA__.title,
                    brand:window.__INITIALDATA__.brand,
                    modelNumber:window.__INITIALDATA__.modelNumber,
                    dimensions:window.__INITIALDATA__.dimensions,
                    weight:window.__INITIALDATA__.weight,
                    quantity:window.__INITIALDATA__.quantity,
                    category:window.__INITIALDATA__.category,
                    location:window.__INITIALDATA__.location,
                    description:window.__INITIALDATA__.description,
                    photos:window.__INITIALDATA__.photos,
                    listedPrice:window.__INITIALDATA__.listedPrice,
                    sellingPrice:window.__INITIALDATA__.sellingPrice,
                    reserve:window.__INITIALDATA__.reserve,
                    SKU:window.__INITIALDATA__.SKU,
                    paymentMethod:window.__INITIALDATA__.paymentMethod,
                    transactionDetails:window.__INITIALDATA__.transactionDetails,
                    amountReceived: window.__INITIALDATA__.amountReceived,
                    images:window.__INITIALDATA__.images
                }
            }

        }
        //在服务器，组件初始信息通过this.props.obj得到
        if(__isBrowser__ === false){
            if(this.props.obj !== null){
                this.state ={
                    _id:this.props.obj._id,
                    status:this.props.obj.status,
                    clientCode:this.props.obj.clientCode,
                    title:this.props.obj.title,
                    brand:this.props.obj.brand,
                    modelNumber:this.props.obj.modelNumber,
                    dimensions:this.props.obj.dimensions,
                    weight:this.props.obj.weight,
                    quantity:this.props.obj.quantity,
                    category:this.props.obj.category,
                    location:this.props.obj.location,
                    description:this.props.obj.description,
                    photos:this.props.obj.photos,
                    listedPrice:this.props.obj.listedPrice,
                    sellingPrice:this.props.obj.sellingPrice,
                    reserve:this.props.obj.reserve,
                    SKU:this.props.obj.SKU,
                    paymentMethod:this.props.obj.paymentMethod,
                    transactionDetails:this.props.obj.transactionDetails,
                    amountReceived:this.props.obj.amountReceived,
                    images:this.props.obj.images
                }
            }
        }

    }
    onClientCodeChangeHandler(e){
        console.log("clientCode Changed");
        this.setState({
            clientCode:e.target.value
        })
    }
    onTitleChangeHandler(e){
        console.log("title changed");
        this.setState({
            title:e.target.value
        })
    }
    onBrandChangeHandler(e){
        console.log("bd changed");
        this.setState({
            brand:e.target.value
        })
    }
    onModelNumberChangeHandler(e){
        console.log("mn changed");
        this.setState({
            modelNumber:e.target.value
        })
    }
    onDimensionsChangeHandler(e){
        console.log("dm changed");
        this.setState({
            dimensions:e.target.value
        })
    }
    onWeightChangeHandler(e){
        console.log("wt changed");
        this.setState({
            weight:e.target.value
        })
    }
    onQuantityChangeHandler(e){
        console.log("qt changed");
        this.setState({
            quantity:e.target.value
        })
    }
    onCategoryChangeHandler(e){
        console.log("ca changed");

        this.setState({
            category:e.target.value
        })
    }
    onDescriptionChangeHandler(e){
        this.setState({
            description: e.target.value
        })
    }
    onLocationChangeHandler(e){
        this.setState({
            location: e.target.value
        })
    }
    onListedPriceChangeHandler(e){
        this.setState({
            listedPrice: e.target.value
        })
    }
    onSellingPriceChangeHandler(e){
        this.setState({
            sellingPrice:e.target.value
        })
    }
    onReserveChangeHandler(e){
        this.setState({
            reserve:e.target.value
        })
    }
    onImagesChangeHandler(e){

    }
    onPaymentMethodChangeHandler(e){
        console.log(e.target.value);
        this.setState({
            paymentMethod:e.target.value
        })
    }
    onTransactionDetailsChangeHandler(e){
        this.setState({
            transactionDetails: e.target.value
        })
    }
    onAmountReceivedChangeHandler(e){
        this.setState({
            amountReceived:e.target.value
        })
    }
    onStatusChangeHandler(e){
        this.setState({
            status : e.target.value
        })
    }

    onSubmitHandler(e){
        e.preventDefault();
        console.log("更新前数据"+this.state.status);
        axios.put(`/update/${this.state._id}`,{
            _id:this.state._id,
            status:this.state.status,
            clientCode:this.state.clientCode,
            title:this.state.title,
            brand:this.state.brand,
            modelNumber:this.state.modelNumber,
            dimensions:this.state.dimensions,
            weight:this.state.weight,
            quantity:this.state.quantity,
            category:this.state.category,
            location:this.state.location,
            description:this.state.description,
            photos:this.state.photos,
            listedPrice:this.state.listedPrice,
            sellingPrice:this.state.sellingPrice,
            reserve:this.state.reserve,
            SKU:this.state.SKU,
            paymentMethod:this.state.paymentMethod,
            transactionDetails:this.state.transactionDetails,
            amountReceived:this.state.amountReceived,
            images:this.state.images
        }).then(function(){
            window.alert("update finished");
        }).catch(error=>{
            console.log(error);
            window.alert("update failed");}
            )
    }
    render(){
        return (
            <ShowDetailForm {...this.state}
                            onStatusChangeHandler={this.onStatusChangeHandler.bind(this)}
                            onClientCodeChangeHandler={this.onClientCodeChangeHandler.bind(this)}
                            onTitleChangeHandler={this.onTitleChangeHandler.bind(this)}
                            onBrandChangeHandler={this.onBrandChangeHandler.bind(this)}
                            onModelNumberChangeHandler={this.onModelNumberChangeHandler.bind(this)}
                            onWeightChangeHandler={this.onWeightChangeHandler.bind(this)}
                            onQuantityChangeHandler={this.onQuantityChangeHandler.bind(this)}
                            onCategoryChangeHandler={this.onCategoryChangeHandler.bind(this)}
                            onDimensionsChangeHandler={this.onDimensionsChangeHandler.bind(this)}
                            onDescriptionChangeHandler={this.onDescriptionChangeHandler.bind(this)}
                            onLocationChangeHandler={this.onLocationChangeHandler.bind(this)}
                            onImagesChangeHandler={this.onImagesChangeHandler.bind(this)}
                            onListedPriceChangeHandler={this.onListedPriceChangeHandler.bind(this)}
                            onSellingPriceChangeHandler={this.onSellingPriceChangeHandler.bind(this)}
                            onReserveChangeHandler={this.onReserveChangeHandler.bind(this)}
                            onPaymentMethodChangeHandler={this.onPaymentMethodChangeHandler.bind(this)}
                            onTransactionDetailsChangeHandler={this.onTransactionDetailsChangeHandler.bind(this)}
                            onAmountReceivedChangeHandler={this.onAmountReceivedChangeHandler.bind(this)}
                            onSubmitHandler={this.onSubmitHandler.bind(this)}
            />
        )
    }
}

export default ProductDetails;