import { elements } from '../views/base.js';

export const createItemList = (items) => {
    let itemsUl = elements.items;
    
    items.forEach(function (item, index) {
        itemsUl.insertAdjacentHTML('afterbegin', createItem(item['name'],item['price'],item['id']));
    });
    
}

export const clearHTML = (element,value = '') => { 
    let htmlVal = '';
    if(value !== '') htmlVal = value;
    return element.innerHTML = htmlVal;
}

const createItem = (itemName,itemPrice,index) => {
    return `
        <li>
            <input type="text" value="${itemName}" class="edit-item-name" data-id="${index}">
            <input type="text" value="${itemPrice}" class="edit-item-price" data-id="${index}">
            <span class="remove-item" data-id="${index}">
            X
            </span>
            <span class="accept-edit-item" data-id="${index}">
            </span>
        </li>
    `;
}

export const createItemsSum = (sum) => {
    clearHTML(elements.sumOfItems);
    elements.sumOfItems.insertAdjacentHTML('afterbegin', sum);
}

