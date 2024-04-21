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
    var binary = ""
    for (var i = 0; i < input.length; i++) { // To binary
        binary += input[i].charCodeAt(0).toString(2) + " ";  
    }
    var binaryLength = binary.length.toString(2) // Length of input in binary for padding
    binary = binary.match(/.{1,448}/g) // Into 512 bit chunks
    for(var i = 0; i<binary.length; i++){ // Each block is 448 + 64 bits for size of input
        var lengthOfPadding =  512-448+binary[i].length
        if(binary[i].length < 448){
            binary[i]+=1
         }
         while(binary[i].length<lengthOfPadding){
            binary[i]+=0
         }
         binary[i] += binaryLength
    }


       const M = []
     for(var i = 0; i<binary.length; i++){
        M[i] = binary[i].match(/.{1,16}/g)// 512 into 32 16 bit chunks
     }
     
         
        //Shifting values for each round
        const S1 = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22]
        const S2 = [5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20]
        const S3 = [4,11,16,13,4,11,16,13,4,11,16,13,4,11,16,13]
        const S4 = [6,10,15,12,6,10,15,12,6,10,15,12,6,10,15,12]
        
        A = 0x01234567
        B = 0x89abcdef
        C = 0xfedcba98
        D = 0x76543210

        const output = []
        for(var i = 0; i<M.length; i++){
            for(var j = 0; j<32; j++){
            
              const GInput = roundF(A,B,C,D,M[i][j],S1)
              const HInput = roundG(GInput[0],GInput[1],GInput[2],GInput[3],M[i][j],S2)
              const IInput = roundH(HInput[0],HInput[1],HInput[2],HInput[3],M[i][j],S3)
              output = roundI(IInput[0],IInput[1],IInput[2],IInput[3],M[i][j],S4)
              A = output[0]
              B = output[1]
              C = output[2]
              D = output[3]
            }
        
        } 
        console.log(finalOutPut = output[0] + output[1] + output[2] + output[3])
}

function roundF(A,B,C,D,M,S){
    
    for(var i = 0; i<16; i++){
    var F = MD5F(B,C,D)
    var mod1 = (A+F) % 100000000
    var mod2 = (M[i] + mod1) % 100000000
    var mod3 = (Math.abs(Math.sin(i+1))*2^32 + mod2) % 100000000
    shift = mod3 << S[i]
    mod4 = (B + shift) % 100000000
    A = D
    B = mod4
    C = B
    D = C
    }
    return [A,B,C,D]
}

function roundG(A,B,C,D,M,S){
    
    for(var i = 0; i<16; i++){
    var F = MD5G(B,C,D)
    var mod1 = (A+F) % 100000000
    var mod2 = (M[i] + mod1) % 100000000
    var mod3 = (Math.abs(Math.sin((i+15)+1))*2^32 + mod2) % 100000000
    shift = mod3 << S[i]
    mod4 = (B + shift) % 100000000
    A = D
    B = mod4
    C = B
    D = C
    }
    return [A,B,C,D]
}
function roundH(A,B,C,D,M,S){
    
    for(var i = 0; i<16; i++){
    var F = MD5H(B,C,D)
    var mod1 = (A+F) % 100000000
    var mod2 = (M[i] + mod1) % 100000000
    var mod3 = (Math.abs(Math.sin((i+31)+1))*2^32 + mod2) % 100000000
    shift = mod3 << S[i]
    mod4 = (B + shift) % 100000000
    A = D
    B = mod4
    C = B
    D = C
    }
    return [A,B,C,D]
}
function roundI(A,B,C,D,M,S){
    
    for(var i = 0; i<16; i++){
    var F = MD5I(B,C,D)
    var mod1 = (A+F) % 100000000
    var mod2 = (M[i] + mod1) % 100000000
    var mod3 = (Math.abs(Math.sin((i+47)+1))*2^32 + mod2) % 100000000
    shift = mod3 << S[i]
    mod4 = (B + shift) % 100000000
    A = D
    B = mod4
    C = B
    D = C
    }
    return [A,B,C,D]
}