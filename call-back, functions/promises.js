
const promise = new Promise( (resolve,reject) => {
    console.log("Async taks execution");
    // throw "err"
    if(true) {
        const person = {
            name : "Muthu"
        };
        resolve(person);
    }
    else {
        // const error1 = {errcode:"1001"};
        reject("error1");
    }
});

promise
.then( (value) => { console.log(value.name); })
.catch( (err) => {console.log( "faileed", err); })
.finally( () => {console.log("I am finaly execute all the times")} )

