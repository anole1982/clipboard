'use strict';

module.exports = navigator.clipboard || {
    readText,
    writeText,
};

function readText() {
    return Promise.reject();
}

async function writeText(value) {
    const el = document.createElement('textarea');
    
    el.value = value;
    
    document.body.appendChild(el);
    el.select();
    
    const is = document.execCommand('copy');
    document.body.removeChild(el);
    
    if (is)
        return;
    
    return Promise.reject();
}

