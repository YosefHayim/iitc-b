for (let i = 0; i < 5; i++) {       // Outer loop for rows
    let row = `⬇️${[i]}: `;          // Initialize the row string with the outer loop iteration number
    for (let j = 0; j < 5; j++) {   // Inner loop for columns
        row += `➡️${j} `;        // Append the inner loop iteration number to the row string
    }
    console.log(row);               // Print the completed row string
}
