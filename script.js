const mystatus = Object.freeze({
    INFO:Symbol("info"), ERROR:Symbol("error")
})

function log(message, status) {

    switch (status) {
        case mystatus.INFO:
            console.log("Info:" + message);
            break;

        case mystatus.ERROR:
            console.log("error:" + message);
            break;
        default:
            throw "Error"
            break;
    }

}
console.log(log("hello",mystatus.INFO));


