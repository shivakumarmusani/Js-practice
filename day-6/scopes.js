let globalVariable = "I am global";

function testFunction() {
    let functionVariable = "I am in function";
    console.log(globalVariable);      // Can access global
    console.log(functionVariable);    // Can access its own
}

if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    console.log(blockVariable);       // Works here
}
// console.log(blockVariable);        // Will cause error
// console.log(notActuallyBlocked);     // Works! (but avoid this)