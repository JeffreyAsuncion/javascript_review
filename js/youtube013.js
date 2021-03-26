{
    let x = 5;
    x = 5.5;
    y = 9007199254740992;
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.isSafeInteger(y));

    let babies = 9007199254740991;
    console.log(Math.pow(babies, 200))
    console.log(1/0); // doesnot raise error
}