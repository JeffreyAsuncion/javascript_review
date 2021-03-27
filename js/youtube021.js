{
    let content = "Today we'll be talking about string methods and how fun they are";

    
    console.log(content.substring(6, 11)); // start, stop
    console.log(content.substr(6,5)); // start, how many
    console.log(content.slice(6, 5)); // start, how many

    console.log(content.toUpperCase());
    console.log(content.toLowerCase());

    let caps = content.toUpperCase();
    console.log(caps);

    // form validation
    let trimMe = "   I need a trim!    ";
    console.log(trimMe.trim());
    console.log(trimMe.trimLeft());
    console.log(trimMe.trimRight());

    let waiting = "tick tock";
    console.log(waiting.repeat(4));

    console.log(content.split(" ")); // returns a list
    let splitList = content.split(" ");
    console.log(splitList[3]);

    // to use with RegEx
    console.log(content.search('talking'));
    console.log(content.replace('talking', 'walking'));
}