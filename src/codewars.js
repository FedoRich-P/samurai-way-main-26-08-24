function pigIt(str) {
    const text = /[a-zA-Z]+$/
    return str.split(' ').map(el => {
        return text.test(el) ?
            `${el.slice(1, el.length)}${el.slice(0, 1)}ay` :
            el
    }).join(' ')
}

