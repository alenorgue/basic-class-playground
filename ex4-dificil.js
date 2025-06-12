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