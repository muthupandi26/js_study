var value = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then((json) => {
    let value2 = json;
    return value2;
} )

console.log(value);