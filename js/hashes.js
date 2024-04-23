function MD5(input){
    var start = performance.now()
    var MD5 = new Hashes.MD5//error on this line
    var output = MD5.hex(input)
    var end = performance.now()

    return [output,end-start] 
}



const button = $('#submit')

button.click(function() {
    input = $('#input').val();
    $('#MD5').text(`${input}`);
    $('#SHA256').text(`${input}`);
    $('#tiger').text(`${input}`);
});