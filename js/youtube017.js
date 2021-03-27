{
    var input = prompt("Put in a number >>> ");

    console.log("Decimal    : ", input);
    console.log("Binary     : ", Number.parseInt(input,2));
    console.log("Octal      : ", Number.parseInt(input, 8));
    console.log("Hex        : ", Number.parseInt(input, 16));

    var input2 = Number(prompt("Put in a number >>> "));

    console.log(input2 + " in decimal to decimal: ", input2);
    console.log(input2, 'in decimal to binary   : ', input2.toString(2));
    console.log(input2, 'in decimal to octal    : ', input2.toString(8));
    console.log(input2, 'in decimal to hex      : ', input2.toString(16));

}