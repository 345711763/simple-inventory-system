import React from "react";
import Form1 from "../../components/CreateProductForm/index";
import Form2 from "../../components/CreateProductForm/form2";
import Form3 from "../../components/CreateProductForm/form3";
import axios from "axios" ;
class Create extends React.Component{
    constructor(props){
        super(props);
        console.log("this.props.obj等于"+this.props.obj);
        console.log("__isBrowser = " +__isBrowser__)
        //当在浏览器渲染，首先同步从服务器发来的window.__INITIALDATA__初始数据
        if(__isBrowser__ === true){
            if(window.__INITIALDATA__ === null){
                this.state ={
                    _id:null,
                    clientCode:null,
                    title:null,
                    brand:null,
                    modelNumber:null,
                    dimensions:null,
                    weight:null,
                    quantity:null,
                    category:null,
                    location:null,
                    description:null,
                    photos:null,
                    listedPrice:null,
                    sellingPrice:null,
                    reserve:null,
                    images:[],
                    imagesUpload:[],
                    SKU:null,
                    page:1
                }
            }
            if(window.__INITIALDATA__ !== null){
                this.state ={
                    _id:window.__INITIALDATA__._id,
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
                    page:window.__INITIALDATA__.stage,
                    SKU:window.__INITIALDATA__.SKU,
                    images:window.__INITIALDATA__.images,
                    imagesUpload:[]
                }
            }

        }
        //在服务器，组件初始信息通过this.props.obj得到
        if(__isBrowser__ === false){
            if(this.props.obj === null){
                this.state ={
                    _id:null,
                    clientCode:null,
                    title:null,
                    brand:null,
                    modelNumber:null,
                    dimensions:null,
                    weight:null,
                    quantity:null,
                    category:null,
                    location:null,
                    description:null,
                    photos:null,
                    listedPrice:null,
                    sellingPrice:null,
                    reserve:null,
                    page:1,
                    images:[],
                    imagesUpload:[],
                    SKU:null,
                }
            }
            if(this.props.obj !== null){
                this.state ={
                    _id:this.props.obj._id,
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
                    page:this.props.obj.stage,
                    images:this.props.obj.images,
                    imagesUpload:[],
                    SKU:this.props.obj.SKU
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

    onNextHandler(){
        let state = this.state;
        this.setState({
            page:state.page+1
        })
    }
    onBackHandler(){
        let state = this.state;
        this.setState({
            page:state.page-1
        })
    }
    onSubmitHandler(e){
        e.preventDefault();
        let fd = new FormData();
        fd.append("_id",JSON.stringify(this.state._id));
        fd.append("clientCode",JSON.stringify(this.state.clientCode));
        fd.append("title",JSON.stringify(this.state.title));
        fd.append("brand",JSON.stringify(this.state.brand));
        fd.append("modelNumber",JSON.stringify(this.state.modelNumber));
        fd.append("dimensions",JSON.stringify(this.state.dimensions));
        fd.append("weight",JSON.stringify(this.state.weight));
        fd.append("quantity",JSON.stringify(this.state.quantity));
        fd.append("category",JSON.stringify(this.state.category));
        fd.append("location",JSON.stringify(this.state.location));
        fd.append("description",JSON.stringify(this.state.description));
        fd.append("photos",JSON.stringify(this.state.photos));
        fd.append("listedPrice",JSON.stringify(this.state.listedPrice));
        fd.append("sellingPrice",JSON.stringify(this.state.sellingPrice));
        fd.append("reserve",JSON.stringify(this.state.reserve));
        fd.append("SKU",JSON.stringify(this.state.SKU));
        fd.append("images",JSON.stringify(this.state.images));
        let newStage = this.state.page + 1;
        fd.append("stage",JSON.stringify(newStage));
        let imagesUpload = this.state.imagesUpload;
        for (let i = 0; i < imagesUpload.length; i++) {
            fd.append("imagesUpload", imagesUpload[i]);
        }
        console.log("客户端imagesUpload是"+imagesUpload);
        // {
        //
        //     title: this.state.title,
        //         brand: this.state.brand,
        //     modelNumber: this.state.modelNumber,
        //     dimensions: this.state.dimensions,
        //     weight: this.state.weight,
        //     quantity: this.state.quantity,
        //     category: this.state.category,
        //     location:this.state.location,
        //     description:this.state.description,
        //     photos:this.state.photos,
        //     listedPrice:this.state.listedPrice,
        //     sellingPrice:this.state.sellingPrice,
        //     reserve:this.state.reserve,
        //     stage:this.state.page+1,
        //     images:this.state.images
        // }
        axios.post("/create",fd).then(res=>{
                window.alert("Data Saved");
                window.location.href = "/";
            }).catch(function (error) {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
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
    onImagesUploadChangeHandler(e){
        console.log("新图片载入");
        console.log(e.target.value);
        console.log(e.target.files);
        this.setState({
            imagesUpload:e.target.files
        })
    }
    render() {
        let stage;
        if(__isBrowser__ === true){
            if(window.__INITIALDATA__ !== null){
                stage = window.__INITIALDATA__.stage
            }else{
                stage = null
            }
        }
        if(__isBrowser__ === false){
            if(this.props.obj !==null){
                stage = this.props.obj.stage
            }else{
                stage = null;
            }
        }
     //根据this.state.page 来渲染不同的form
        if(this.state.page === 1){
            return <Form1
                clientCode={this.state.clientCode}
                title={this.state.title}
                brand={this.state.brand}
                modelNumber={this.state.modelNumber}
                dimensions={this.state.dimensions}
                weight={this.state.weight}
                quantity={this.state.quantity}
                category={this.state.category}
                onClientCodeChangeHandler={this.onClientCodeChangeHandler.bind(this)}
                onTitleChangeHandler={this.onTitleChangeHandler.bind(this)}
                onBrandChangeHandler={this.onBrandChangeHandler.bind(this)}
                onModelNumberChangeHandler={this.onModelNumberChangeHandler.bind(this)}
                onWeightChangeHandler={this.onWeightChangeHandler.bind(this)}
                onQuantityChangeHandler={this.onQuantityChangeHandler.bind(this)}
                onCategoryChangeHandler={this.onCategoryChangeHandler.bind(this)}
                onDimensionsChangeHandler={this.onDimensionsChangeHandler.bind(this)}
                onNextHandler={this.onNextHandler.bind(this)}
                onSubmitHandler={this.onSubmitHandler.bind(this)}

            />;
        }
        if(this.state.page ===2 ){
            return <Form2
                description={this.state.description}
                location={this.state.location}
                imagesUpload={this.state.imagesUpload}
                onDescriptionChangeHandler={this.onDescriptionChangeHandler.bind(this)}
                onLocationChangeHandler={this.onLocationChangeHandler.bind(this)}
                onImagesUploadChangeHandler={this.onImagesUploadChangeHandler.bind(this)}
                onNextHandler={this.onNextHandler.bind(this)}
                onBackHandler={this.onBackHandler.bind(this)}
                onSubmitHandler={this.onSubmitHandler.bind(this)}
                stage={stage}
            />
        }
        if(this.state.page ===3){
            return <Form3
                listedPrice={this.state.listedPrice}
                sellingPrice={this.state.sellingPrice}
                reserve={this.state.reserve}
                onListedPriceChangeHandler={this.onListedPriceChangeHandler.bind(this)}
                onSellingPriceChangeHandler={this.onSellingPriceChangeHandler.bind(this)}
                onReserveChangeHandler={this.onReserveChangeHandler.bind(this)}
                onSubmitHandler={this.onSubmitHandler.bind(this)}
                onBackHandler={this.onBackHandler.bind(this)}
                stage={stage}
            />
        }
    }
}

export default Create;