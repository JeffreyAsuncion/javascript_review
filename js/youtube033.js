{
    let myString = "cSearch c c this c  string c baby";
    let chartoSearch = 'c'
    for (i=0; i<myString.length; i++){
        if(myString[i] === 'a' || myString[i] === 'e' ||
        myString[i] === 'i' || myString[i] === 'o' ||
        myString[i] === 'u'){
            continue;
        }
        console.log(myString[i]);
    }
}