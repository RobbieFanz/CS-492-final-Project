function MD5F(K,L,M){
    return (K & L) | (~K & M)
}

function MD5G(K,L,M) {
    return (K & L) | (L & ~M)
}

function MD5H(K,L,M){
    return K ^ L ^ M
}

function MD5I(K,L,M){
    return L ^ (K | ~M)
}

function MD5(input){
    var output = ""
    for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
        
        
    }
    if(output.length > 512){
        Math.ceil(output.length)
    }

}