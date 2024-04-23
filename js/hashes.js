const Hashes = require("jshashes")

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
    var end = performance.end()
    return output


}

const button = $('#submit')

button.click(function() {
    input = $('#input').val();
    $('#MD5').text(`${MD5(input)}`);
    $('#SHA256').text(`${SHA1(input)}`);
    $('#tiger').text(`${input}`);
});