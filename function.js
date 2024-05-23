function newElement(type, propertys, parent) {
    let id = null;
    let className = null;
    let type1 = null;
    if (type.indexOf("#") !== -1 && type.indexOf(".") !== -1) {
        if (type.indexOf("#") < type.indexOf(".")) {
            type1 = type.slice(0, type.indexOf("#"));
            id = type.slice(type.indexOf("#") + 1, type.indexOf("."));
            className = type.slice(type.indexOf(".") + 1);
        } else {
            type1 = type.slice(0, type.indexOf("."));
            className = type.slice(type.indexOf(".") + 1, type.indexOf("#"));
            id = type.slice(type.indexOf("#") + 1);
        }
    } else if (type.indexOf("#") !== -1 && type.indexOf(".") == -1) {
        type1 = type.slice(0, type.indexOf("#"));
        id = type.slice(type.indexOf("#") + 1);
    } else if (type.indexOf("#") == -1 && type.indexOf(".") !== -1) {
        type1 = type.slice(0, type.indexOf("."));
        className = type.slice(type.indexOf(".") + 1);
    };
    let result = null;
    if (type1 !== null) result = document.createElement(type1);
    else result = document.createElement(type);
    for (let name in propertys) {
        if (propertys.hasOwnProperty(name)) {
            result[name] = propertys[name];
        };
    }
    if (id !== null) result.id = id;
    if (className !== null) className.split("/").forEach((classn) => {
        result.classList.add(classn);
    });
    if (parent !== false) parent.appendChild(result);
    return result;
}
