function stripProperty (obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return obj;
    } else {
        return obj;
    }
}

console.log(stripProperty({foo: 2, bar: 3, baz: 3}, "mem"));