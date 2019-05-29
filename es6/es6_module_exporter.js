function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function max(a, b, c) {
    return Math.max(a, b, c);
}

class Graph {
    addNode(){
        console.log("Node added");
    }
}

const PI = Math.PI;

export {
    add, max, divide, PI
};

export default Graph;