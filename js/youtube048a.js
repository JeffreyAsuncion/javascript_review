{
    let myDate = new Date();
    let time = Date.now();

    console.log(myDate);
    console.log(time); // # of milli seconds


    let start = Date.now();

    let x = 0;
    for(let i=0; i < 100000000; i++){
        x = x + i;
    }

    let end = Date.now();

    let total = end - start;
    console.log("Total took : " + total + "ms");
}