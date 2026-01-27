function chickenEgg(counter){
    if(counter >= 5){
        console.log("base case reached ");
        return;
    }
    console.log(`call number:${counter}`);
    chickenEgg(counter+1);


}
chickenEgg(0);
