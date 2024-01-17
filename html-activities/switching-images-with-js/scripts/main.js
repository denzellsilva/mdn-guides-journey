const myImage = document.querySelector("img");

function next() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/June_odd-eyed-cat_cropped.jpg") {
        myImage.setAttribute("src", "images/cat.jpg");
    }
    else if (mySrc === "images/cat.jpg") {
        myImage.setAttribute("src", "images/dogs-licensable.jpg");
    }
    else if (mySrc === "images/dogs-licensable.jpg") {
        myImage.setAttribute("src", "images/golden-retrievers.jpg");
    }
    else {
        myImage.setAttribute("src", "images/June_odd-eyed-cat_cropped.jpg");
    };
    return mySrc;
};

function prev() {
    let pic;
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/June_odd-eyed-cat_cropped.jpg") {
        pic = "images/golden-retrievers.jpg";
    }
    else if (mySrc === "images/golden-retrievers.jpg") {
        pic = "images/dogs-licensable.jpg";
    }
    else if (mySrc === "images/dogs-licensable.jpg") {
        pic = "images/cat.jpg";
    }
    else {
        pic = "images/June_odd-eyed-cat_cropped.jpg";
    };
    myImage.setAttribute("src", pic);
};