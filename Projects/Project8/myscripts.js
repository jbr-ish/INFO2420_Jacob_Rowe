PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
    PrintButton1.src = "../../Img_and_Res/Native_Cooking/Print1.png"
    PrintButton2.src = "../../Img_and_Res/Native_Cooking/Print2.png"
    logo1.src = "../../Img_and_Res/Native_Cooking/NativeCookingLogo1.png"
    logo2.src = "../../Img_and_Res/Native_Cooking/NativeCookingLogo2.png"
}
var imgArray = new Array(
    'GreenJello3Lg.jpg',
    'ChefLg.jpg',
    'SaladLg.jpg',
    'IceCreamLg.jpg'
);
var titleArray = new Array(
    'Green Jello',
    'Culinary Touch',
    'Salad Lover',
    'I Scream for Ice Cream'	
);	
var imgPath = "../../Img_and_Res/Native_Cooking/Large/";
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');
    var newImg;
    var textTitle;
    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;
    textTitle=titleArray[imgID];
    textDiv.innerHTML = textTitle;
}		
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
}
function moveImage(img_name, img_src){
    document[img_name].src=img_src;
}	