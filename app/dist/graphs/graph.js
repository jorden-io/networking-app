export const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};
const depthFirst = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let n of graph[current]) {
            stack.push(n);
        }
    }
};
//depthFirst(graph, "a");
const obj = {
    n: "hey",
    m: "dude",
    o: "jorb",
};
//let N = "n";
//console.log(obj[N]);
for (let i in obj) {
    console.log(obj[i]);
}
const recDepthFirst = (graph, source) => {
    console.log(source);
    for (let n of graph[source]) {
        recDepthFirst(graph, n);
    }
};
//recDepthFirst(graph, "a");
