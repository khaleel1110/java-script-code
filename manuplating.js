var countzero = 3;
var countOne = 1;
for (var i = 0; i < 5; i++) {

    var str = " ";


    for (var k = 0; k < 7; k++) {

        if (k < countzero) {
            str = str + ' '
        }
        if (k >= countzero && k < (countzero + countOne)) {
            str = str + '*';
        }
        if (k >= (countzero+countOne)) {
            str = str + ' '
        }


    }

    countOne = countOne + 2;
    countzero = countzero - 1;
    console.log(str);
}