function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    } finally {
        console.log("Execution completed.");
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error: Division by zero is not allowed. Execution completed.