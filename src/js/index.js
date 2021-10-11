//import css from "../css/style.css";
import scss from "../scss/style.scss";

import { elements } from "./views/base.js";
import  Item  from "./models/Item.js";
import * as ItemView  from "./views/ItemView.js";
import  * as Helpers  from "./helpers.js";
import  Validation  from "./Validation.js";

import ShortUniqueId from 'short-unique-id';
import validator from 'validator';


const state = {};//global state main controller
let sum = 0;


window.onload = (evt) => {
    state.item = new Item();
    if (state.item.getItems() !== null) {
        ItemView.clearHTML(elements.items);
        ItemView.createItemList(state.item.getItems());
        sum = state.item.sumOfItems(state.item.getItems());
        ItemView.clearHTML(elements.sumOfItems, 0);
        ItemView.createItemsSum(sum);
    }
}


const ob = new Validation(validator);


elements.add_item.addEventListener('click', (evt) => {

    const add_item_btn = evt.target;
    const item = elements.item;
    const itemPrice = elements.itemPrice;
    
    if (add_item_btn.matches('.add-item')) {
        if( ob.checkForm(elements.form_items) ){
            Helpers.addRemoveClass(itemPrice,'red-warning',false);
            Helpers.addRemoveClass(item,'red-warning',false);

            const uid = new ShortUniqueId({dictionary: 'number'});
            state.item.addItem(uid(),item['value'], itemPrice['value']);

            ItemView.clearHTML(elements.items);
            ItemView.createItemList(state.item.getItems());
            sum = state.item.sumOfItems(state.item.getItems());
            ItemView.clearHTML(elements.sumOfItems, 0);
            ItemView.createItemsSum(sum);
        }
    } 

});

elements.items.addEventListener('click', (evt) => {
    
    if(evt.target.matches('.remove-item')){
        const id = parseInt(evt.target.getAttribute('data-id'));
        state.item.removeItem(id,state.item.getItems());
        
        ItemView.clearHTML(elements.items);
        ItemView.createItemList(state.item.getItems());
        sum = state.item.sumOfItems(state.item.getItems());
        ItemView.clearHTML(elements.sumOfItems, 0);
        ItemView.createItemsSum(sum);
    }
    
    if(evt.target.matches('.edit-item-name')){
        const spanRemoveItem = evt.target.nextElementSibling.nextElementSibling;
        spanRemoveItem.style.display = 'none';
        const spanEditAcceptItem = spanRemoveItem.nextElementSibling;
        spanEditAcceptItem.style.display = 'inline';
    }
    
    if(evt.target.matches('.edit-item-price')){
        const spanRemoveItem = evt.target.nextElementSibling;
        spanRemoveItem.style.display = 'none';
        const spanEditAcceptItem = spanRemoveItem.nextElementSibling;
        spanEditAcceptItem.style.display = 'inline';
    }
    
    if(evt.target.matches('.accept-edit-item')){
        evt.target.style.display = 'none';
        const itemName = evt.target.previousElementSibling.previousElementSibling.previousElementSibling.value.trim();
        const itemPrice = evt.target.previousElementSibling.previousElementSibling.value.trim();
        const id = parseInt(evt.target.getAttribute('data-id'));
        
        state.item.editItem(id,state.item.getItems(),itemName,itemPrice);
        sum = state.item.sumOfItems(state.item.getItems());
        ItemView.clearHTML(elements.sumOfItems, 0);
        ItemView.createItemsSum(sum);
        
        const spanRemoveItem = evt.target.previousElementSibling;
        setTimeout(()=>{
            spanRemoveItem.style.display = 'inline';
        },1000);
    }
    
    elements.form_items.reset();
});

