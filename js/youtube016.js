{
    let x = 5;
    let y = '10';
    let yInt = Number.parseInt(y);
    // parseInt drop everything after the decimal
    let w = Number.parseInt("54.6");
    let wFloat = Number.parseFloat("10.9999")
    console.log(x + y);
    console.log(x + yInt);
    console.log(w);
    console.log(wFloat);
}