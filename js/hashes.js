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
    for (var i = 0; i < input.length; i++) { // To binary
        output += input[i].charCodeAt(0).toString(2) + " ";  
    }
     output = output.match(/.{1,512}/g) // Into 512 bit chunks
     
     
     
     M = (output.match(/.{1,16}/g)) // 512 into 32 16 bit chunks
         
     


}