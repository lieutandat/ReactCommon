export const getInitValues = (components) => {
    if(!components) return {};
    else {
        const initialize = {};
        components.forEach(item => {
            initialize[item.fieldName] = item.defaultValue;
        })
        return initialize
    }
}

export const getKeysProperties = (components) => {
    if(!components) return [];
    else {
        const keys = [];
        components.forEach(item => {
            keys.push(item.fieldName)
        })
        return keys;
    }
}

