function renameColor(col) {
    let newColor = '';

    switch(col) {
        case undefined: newColor = 'blackCol'
            break;
        case 'Черный': newColor = 'blackCol'
            break;
        case 'Трехцветный': newColor = 'tripleCol'
            break;
        case 'Голубой': newColor = 'blueCol'
            break;
        case 'Пурпурный': newColor = 'purpleCol'
            break;
        case 'Желтый': newColor = 'yellowCol'
            break;
        default: 'blackCol'
            break;
    }

    return newColor;
}

export {renameColor};
