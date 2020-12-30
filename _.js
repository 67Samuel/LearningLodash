const _ = {};
_['clamp'] = (number, lower, upper) => {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
}

_['inRange'] = (number, start, end=null) => {
    if (end === null) {
        end = start;
        start = 0;
    }
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    if (number < start || number >= end) {
        return false;
    }
    return true;
}

_['words'] = string => {
    const words = string.split(' ');
    return words;
}

_['pad'] = (string, length) => {
    if (string.length >= length) {
        return string;
    }
    const diff = length - string.length;
    const space = ' ';
    if (diff%2===0) {
        string = space.repeat((diff/2)) + string + space.repeat((diff/2));
    } else {
        string = space.repeat(((diff-1)/2)) + string + space.repeat(((diff+1)/2));
    }
    return string;
}

_['has'] = (obj, key) => {
    if (obj[key]) {
        return true;
    }
    return false;
}

_['invert'] = obj => {
    for (const item of Object.entries(obj)) {
        delete obj[item[0]];
        obj[item[1]] = item[0];
    }
    return obj;
}

_['findKey'] = (obj, pred) => {
    for (const item of Object.entries(obj)) {
        if (pred(item[1])) {
            return item[0];
        }
    }
    return undefined;
}

_['drop'] = (arr, num=1) => {
    arr.splice(0, num);
    return arr;
}

_['dropWhile'] = (arr, pred) => {
    for (const [index, ele] of arr.entries()) {
        arr.shift();
        if (!pred(ele, index, arr)) {
            return arr;
        }
    }
}

_['chunk'] = (arr, size=1) => {
    if (Array.isArray(arr) || arr.length) {
        const chunks = [];
        while (arr.length) {
            let chunk = [];
            while (chunk.length < size && arr.length) {
                chunk.push(arr.shift());
            }
            chunks.push(chunk);
        }
        return chunks;
    }
}


