
try {
    
    const undefinedObject = undefined;
    const obj = undefinedObject.property;
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught a TypeError: The property is undefined.");
    } else {
        throw error;
    }
}
