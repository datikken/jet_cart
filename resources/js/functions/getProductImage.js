import {checkFileExist} from "./checkIfFileExists";

function getProductImage(prdct) {
    if(!prdct) return 'Product undefined';

    let images;

    let params = JSON.parse(prdct.params);
    let category = params.brend;
    let photo = prdct.photo;

    let small = `product_images/${category}/SMALL/${photo}.png`;
    let big = `product_images/${category}/BIG/${photo}.png`;

    if(checkFileExist(small)) {
        images.small = small;
    }

    if(checkFileExist(big)) {
        images.big = big;
    }

    return images;
}

export {getProductImage};
