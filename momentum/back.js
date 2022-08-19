document.body.style.background = "url('assets/img/bg7.jpg')";
var i = 0;
var k= 0;

function next(){
var img = ["url('assets/img/bg8.jpg')", "url('assets/img/bg6.jpg')","url('assets/img/bg7.jpg')","url('assets/img/bg.jpg')","url('assets/img/bg8.jpg')","url('assets/img/bg2.jpg')"];
    document.body.style.background = img[i];
    i++;
    if( i >= img.length) {
        i = 0;
    }
}
var img2 = ["url('assets/img/bg8.jpg')", "url('assets/img/bg.jpg')","url('assets/img/bg6.jpg')","url('assets/img/bg8.jpg')","url('assets/img/bg2.jpg')","url('assets/img/bg7.jpg')"];
function prev(){
    document.body.style.background = img2[k];
    k++;
    if( k >= img2.length) {
        k = 0;
    }
}
