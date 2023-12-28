const solution = (myString, pat) => {
    let count = 0;
    while(myString.search(pat) >= 0) {
        count++;
        myString = myString.substring(myString.search(pat)+1, myString.length)
    }
     
    return count
} 
