/**
 * Mi propia estructura de datos 
 */

class LimitedSet {
    constructor(limit) {
        this.limit = limit;
        this.elements = new Set();
    }

    add(elem) {
if (this.elements.size < this.limit) {
            this.elements.add(elem);
        }
    }

    values() { 
        return [...this.elements];

    }

    size() {
        return this.elements.size;
    }

    removeElement(elem) {
        this.elements.delete(elem);
        if (this.elements.size === 0) {
            console.log("No hay elementos en el conjunto.");
        }
    }
}

const l = new LimitedSet(3);
console.log(l.size()); // 0
l.add("a");
l.add("b");
l.add("c");
l.add("d"); // Ignorado
console.log(l.size()); // 3
console.log(l.values()); // ["a", "b", "c"]
l.removeElement("b");
console.log(l.values()); // ["a", "c"]
l.add("gato");
console.log(l.values()); // ["a", "c", "gato"]

/**
 * Mi propia estructura de datos 
 */

class LimitedArray {
    constructor(limit) {
        this.limit = limit;
        this.elements = new Array();
    }

    add(elem) {
if (this.elements.length < this.limit && !this.elements.includes(elem)) {
            this.elements.push(elem);
        }
    }

    values() { 
        return [...this.elements];
    }

    size() {
        return this.elements.length;
    }

    removeElement(elem) {
        this.elements = this.elements.filter(e => e !== elem);
        if (this.elements.length === 0) {
            console.log("No hay elementos en el array.");
        }
    }
}

const la = new LimitedArray(3);
console.log(la.size()); // 0
la.add("a");
la.add("b");
la.add("c");
la.add("d"); // Ignorado
console.log(la.size()); // 3
console.log(la.values()); // ["a", "b", "c"]
la.removeElement("b");
console.log(la.values()); // ["a", "c"]
la.add("gato");
console.log(la.values()); // ["a", "c", "gato"]