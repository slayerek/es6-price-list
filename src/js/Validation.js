export default class Validation {
        
    constructor(validator) {
        this.validator = validator;
    }
    
    checkForm(Form) {
        
        let formValid = true;
        const arr = [
            { 'alphanumeric' : this.validator.isAlphanumeric },
            { 'float' : this.validator.isFloat }
        ];
        
        for (let input of Form.elements){
            if (input['type'] == 'text') {
                const validAttr = input.getAttribute('data-valid');
                
                for(let elem of arr){
                    if(elem[validAttr] !== undefined){
                        if(!elem[validAttr](input.value)){
                            this.highlight(input,'red-warning');
                            formValid = false;
                            break;
                        }else{
                            this.unhighlight(input,'red-warning');
                        }
                    }
                }
            }    
        }
       
        return formValid;
        
    }
    
    highlight(element,className){
       element.classList.add(className);
    }
    
    unhighlight(element,className){
        element.classList.remove(className);
        return false;
    }
    
}

