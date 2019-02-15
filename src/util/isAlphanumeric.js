function isAlphanumeric(param){
    return param.match(/^[A-Za-z0-9]+$/g) !== null;

}

export default isAlphanumeric;