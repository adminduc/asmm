var img = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];
auto00();
function auto00(){
    nhay = setInterval(slide__next, 3200);
}
var i = 0;
function slide__next(){
    i++;
    if(i>img.length - 1){
        i = 0;
    }
    document.getElementById("image__slide").src = "Image/Banner/" + img[i];
}
function slide__pre(){
    i--;
    if(i<0){
        i = img.length - 1;
    }
    document.getElementById("image__slide").src = "Image/Banner/" + img[i];
}
click__next();
function click__next(){
    document.getElementById("nextt").addEventListener('click' , slide__next);
}
click__pre();
function click__pre(){
    document.getElementById("pre").addEventListener('click' , slide__pre);
}