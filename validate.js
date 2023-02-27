function validate(data, rules) {
    /**
    * Имя типа у аргумента. Обычно с прописной буквы, кроме undefined и null.
    * Для примитивных типов подставляется имя типа-обертки.
    * @param {*} arg Произвольное значение объекта или примитивного типа, для которого нужно определить имя типа.
    */
    function getType(arg) {
        let proto, constr;
        return (arg === undefined) ? "undefined" :
            (arg === null) ? "null" :
                (!(proto = Object.getPrototypeOf(arg)) || !(constr = proto.constructor)) ? "Object" : constr.name;
    }
    let funcs = {
        // Для required значение true обязательно, чтобы с помощью false отключать
        required(value, param) {
            return !param || (value != null);
        },
        isString(value, param) {
            let type = getType(value);
            return param == (type === "String");
        },
        isNumber(value, param) {
            let type = getType(value);
            return param == (type === "Number" && !isNaN(value));
        },
        isBoolean(value, param) {
            let type = getType(value);
            return param == (type === "Boolean");
        },
        minLength(value, param) {
            let type = getType(value);
            return type === "String" && value.length >= param;
        },
        maxLength(value, param) {
            let type = getType(value);
            return type === "String" && value.length <= param;
        },
        min(value, param) {
            let type = getType(value);
            return type === "Number" && value >= param;
        },
        max(value, param) {
            let type = getType(value);
            return type === "Number" && value <= param;
        },
        isEmail(value, param) {
            let type = getType(value);
            
           
            return param == (type === "String") && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        }
    };
    let errors = [], result = true;
    // required пользуется наивысшим приоритетом
    for (let key in rules)
        for (let innerKey in rules[key])
            if (innerKey === "required" && !funcs[innerKey](data[key], rules[key][innerKey]))
                errors.push({ field: key, value: data[key], rule: innerKey });
    for (let key in rules) {
        let value = data[key]; // Если поле пустое, то ничего не проверять
        if (value == null)
            continue;
        for (let innerKey in rules[key]) // Убрал ограничение по единственной ошибке
            if (!funcs[innerKey](value, rules[key][innerKey])) //  && !errors.find(e => e.field === key))
                errors.push({ field: key, value: value, rule: innerKey });
    }
    if (errors.length)
        result = false;
    return { result, errors };
}
 
module.exports = validate;

