{
    let myDate = Date.parse('12 Jan 1995 00:15:54 GMT');
    console.log(myDate);

    let myDate2 = new Date('12 Jan 1995 00:15:54 GMT');
    console.log(myDate2);

    let myDate3 = new Date('2012, 10, 12');
    console.log(myDate3.getFullYear());
    console.log(myDate3.getMonth());
    console.log(myDate3.getDate());
    console.log(myDate3.getTimezoneOffset()/60); // difference from UTC

}