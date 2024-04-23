function MD5(input){
    var start = performance.now()
    var MD5 = new Hashes.MD5
    var output = MD5.hex(input)
    var end = performance.now()

    return output
}



const button = $('#submit')

button.click(function() {
    input = $('#input').val();
    $('#MD5').text(`${MD5(input)}`);
    $('#SHA256').text(`${input}`);
    $('#tiger').text(`${input}`);
});