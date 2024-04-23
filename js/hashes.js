function MD5(input){
    var start = performance.now()
    var MD5 = new Hashes.MD5
    var output = MD5.hex(input)
    var end = performance.now()

    return [output,end-start] 
}