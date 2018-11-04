import { getKeysProperties } from "./helper";

export const validate = (values, props) => {
    const {initPage} = props
    if(!initPage) return {};

    const keys = getKeysProperties(initPage.components);
    const required = {};
   
    console.log(keys)
    keys.forEach(item => {
        const componentValidate = initPage.components.find(component => component.fieldName == item)
        // console.log("Validate: ", item, componentValidate.validate, values[item])
       if(componentValidate.validate){
            required[item] = !values[item] ? 'Required'  : undefined
       } else {
            required[item] = undefined
       }
    })
    console.log(required)
    return required
}