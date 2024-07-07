function findContentChildren (g, s) {
    let contentChildren = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let i = 0; i < s.length; i++) {
        for (let child = contentChildren; child < g.length; child++) {
            if (s[i] >= g[child]) {
                contentChildren++;
                break;
            }
        }
    }

    return contentChildren;
}

function findContentChildren_optimized(g, s) {
    let contentChildren = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let j = 0, i = 0; j < s.length && i < g.length; j++) {
        if (s[j] >= g[i]) {
            contentChildren++;
            i++;
        }
    }

    return contentChildren;
}

console.log(findContentChildren_optimized([1,2,3], [1,1])); //1
console.log(findContentChildren_optimized([1,2], [1,2,3])); //2
console.log(findContentChildren_optimized([1], [1,2,3])); //1
console.log(findContentChildren_optimized([1], [])); //0
console.log(findContentChildren_optimized([10,9,8,7], [5,6,7,8])); //2