function MD5(input){
    var start = performance.now()
    var MD5 = new Hashes.MD5
    var output = MD5.hex(input)
    var end = performance.now()

    return output
}

function SHA1(input){
    var start = performance.now()
    var SHA1 = new Hashes.SHA1
    var output = SHA1.hex(input)
    var end = performance.now()
    return output
}

function SHA256(input){
    var start = performance.now()
    var SHA256 = new Hashes.SHA256
    var output = SHA256.hex(input)
    var end = performance.now()
    return output
}

function SHA512(input){
    var start = performance.now()
    var SHA512 = new Hashes.SHA512
    var output = SHA512.hex(input)
    var end = performance.now()
    return output
}


const submitButton = $('#submit')
const avalancheButton = $('#avalanche')

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

