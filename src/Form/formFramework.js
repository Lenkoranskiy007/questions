export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null) {
    if(!validation) {
        return true
    }
    let isValid = true
    if(validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid

}

export function validateForm(formControl) {
    let isFormValid = true
    for(let control in formControl) {
        isFormValid = formControl[control].valid && isFormValid
    }

    return isFormValid
}