export default function validate(values) {
    let error = {}

    if(values.title === ""){
        error.title = "Title is required";
    }else{
        error.title = "";
    }

    if(values.quantity === ""){
        error.quantity = "Quantity is required";
    }else{
        error.quantity = "";
    }

    if(values.price === ""){
        error.price = "Price is required";
    }else{
        error.price = "";
    }

    if(values.image === ""){
        error.image = "Image is required";
    }else{
        error.image = "";
    }

    return error;

}