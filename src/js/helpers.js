
export const addRemoveClass = (element,className = 'red-warning',add = true) => {
    if(add){
        element.classList.add(className);
    }else{
        element.classList.remove(className);
    }
    
}

export const replaceComma = (item) => {
    return item.replace(/,/gi, ".");
}

export const convertToFloatNumber = (item,decimal) => {
    return parseFloat(item);
}

export const highlightField = (fieldName,fieldType='') => {
    switch(fieldType) {
        case 'x':
            // code block
            break;
        default:
            addRemoveClass(fieldName)
    }
}



