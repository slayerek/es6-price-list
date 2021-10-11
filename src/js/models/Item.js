import  * as Helpers  from "../helpers.js";

export default class Item {

    getItems() {
        let items = localStorage.getItem('items');

        if (items != null) {
            return this.convertToObject(items);
        }

        return null;
    }
    
    convertToCorrectFormat(item){
        return item.replace(/,/gi, ".");
    }//replacing comma by dot

    addItem(uid,item,itemPrice) {
        let items = [];

        if (this.getItems() != null) {
            items = this.getItems();
        }

        items.push({id: uid, name: item, price: Helpers.replaceComma(itemPrice) });
        this.saveItem('items', items);

    }
    
    removeItem(id,items){
        const elemIndex = items.findIndex( (currElem,index) => {
            return id == currElem['id'];
        });  
        
        if(elemIndex > -1){
            items.splice(elemIndex, 1);
            this.saveItem('items', items);
        }
        
    }
    
    editItem(id,items,item,itemPrice){
        const elemIndex = items.findIndex( (currElem,index) => {
            return id == currElem['id'];
        });  
        
        if(elemIndex > -1){
            items.splice(elemIndex, 1,{id: id, name: item, price: Helpers.replaceComma(itemPrice)});
            this.saveItem('items', items);
        }
        
    }

    saveItem(name, items) {
        localStorage.setItem(name, this.convertToJson(items));
    }

    convertToJson(items) {
        return JSON.stringify(items);
    }

    convertToObject(string) {
        return JSON.parse(string);
    }

    sumOfItems(items) {
        let sum = 0;
        if (items != null) {
            items.forEach(function (item, index) {
                sum += Helpers.convertToFloatNumber(item['price']);
            });
        }
        
        return sum.toFixed(2);
    }

}


