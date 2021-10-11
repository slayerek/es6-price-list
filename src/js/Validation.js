export default class Validation {
        
    constructor(validator) {
        this.validator = validator;
    }
    
    
    
    checkForm(Form) {
        
        let formValid = true;
        
        for (let input of Array.from(Form.elements)){
            if (input['type'] == 'text') {
                const validAttr = input.getAttribute('data-valid');
                
                if('alphanumeric' == validAttr){
                    if(!this.validator.isAlphanumeric(input.value)){
                        this.highlight(input);
                        formValid = false;
                        break;
                    }else{
                        this.unhighlight(input);
                    } 
                }else if('float' == validAttr){
                    if(!this.validator.isAlphanumeric(input.value)){
                        this.highlight(input);
                        formValid = false;
                        break;
                    }else{
                        this.unhighlight(input);
                    }
                }      
                        
            }
        }
       
        return formValid;
        
    }
    
    highlight(element){
       element.classList.add('red-warning');
    }
    
    unhighlight(element){
        element.classList.remove('red-warning');
        return false;
    }
    
}

