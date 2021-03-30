{
    function fact(x){
        let total = 1;
        for (let i = x; i > 1; i--){
            console.log(total);
            total *= i;
        }
        return total;
    }

    console.log(fact(5));

    document.getElementById("lemons").onclick = () => {console.log("Clicked")};
}