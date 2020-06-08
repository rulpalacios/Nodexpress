
function error(message, code){
    let err = new Error(message)

    if(code){
        err.status = code
    }

    return err
}