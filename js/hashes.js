function MD5(input){
    let MD5 = new Hashes.MD5
    let output = MD5.hex(input)
    return output
}

function SHA1(input){
    let SHA1 = new Hashes.SHA1
    let output = SHA1.hex(input)
    return output
}

function SHA256(input){
    let SHA256 = new Hashes.SHA256
    let output = SHA256.hex(input)
    return output
}

function SHA512(input){
    let SHA512 = new Hashes.SHA512
    let output = SHA512.hex(input)
    return output
}


const submitButton = $('#submit')
const avalancheButton = $('#avalanche')
const time = $('#time')

submitButton.click(function() {
    input = $('#input').val();
    $('#MD5').text(`${MD5(input)}`);
    $('#SHA1').text(`${SHA1(input)}`);
    $('#SHA256').text(`${SHA256(input)}`);
    $('#SHA512').text(`${SHA512(input)}`);
    $('.avalanche').css("visibility", "visible");
    
});

avalancheButton.click(function(){
    input = $('#input').val();
    $('#MD5').text(`${MD5(input)}\n${MD5(input+'1')}`);
    $('#SHA1').text(`${SHA1(input)}\n${SHA1(input+'1')}`);
    $('#SHA256').text(`${SHA256(input)}\n${SHA256(input+'1')}`);
    $('#SHA512').text(`${SHA512(input)}\n${SHA512(input+'1')}`);
    
});

time.click(function(){
    $('#time-md5').text(`time: ${testMd5()}ms`)
    $('#time-sha1').text(`time: ${testSha1()}ms`)
    $('#time-sha256').text(`time: ${testSha256()}ms`)
    $('#time-sha512').text(`time: ${testSha512()}ms`)
    $('.timer').css("visibility", "visible");
});


let numOfHashes = 100000

function testMd5(){
    let start = performance.now()
    for(let i = 0; i<numOfHashes;i++){
        MD5(i)
    }
    let end = performance.now()
    return end-start
}

function testSha1(){
    let start = performance.now()
    for(let i = 0; i<numOfHashes;i++){
        SHA1(i)
    }
    let end = performance.now()
    return end-start
}

function testSha256(){
    let start = performance.now()
    for(let i = 0; i<numOfHashes;i++){
        SHA256(i)
    }
    let end = performance.now()
    return end-start
}

function testSha512(){
    let start = performance.now()
    for(let i = 0; i<numOfHashes;i++){
        SHA512(i)
    }
    let end = performance.now()
    return end-start
}