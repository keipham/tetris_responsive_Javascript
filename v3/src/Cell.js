export default class Cell {
    constructor(value, className) {
        this.value = value;
        this.frozenValue = value + 10;
        this.className = className;
    }

    getValue() {
        return this.value;
    }

    getFrozenValue() {
        return this.frozenValue;
    }
    
    getClassName() {
        return this.className;
    }

    getHtmlTag() {
        return `<div class='cell ${this.className}'></div>`
    }
}