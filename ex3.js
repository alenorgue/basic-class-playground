class Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        this.name = name;
        this.attackPower = attackPower;
        this.intelligence = intelligence;
        this.hitPoints = hitPoints;
        this.level = 0; // COMPLETAR
    }

    // Método para subir de nivel
    levelUp() {
       this.level += 1;
         this.attackPower += 1; // Aumenta el poder de ataque en 1
            this.intelligence += 1; // Aumenta la inteligencia en 1
        this.hitPoints += 1; // Aumenta los puntos de vida en 1
    }

    // Método para recibir daño
    receiveDamage(damage) {
        this.hitPoints -= damage; // Resta el daño a los puntos de vida
        if (this.hitPoints < 0) {
            this.hitPoints = 0; // Asegura que los puntos de vida no sean negativos
        }
        return this.hitPoints; // Devuelve los puntos de vida restantes
    }

    // Método para verificar si el personaje está vivo
    isAlive() {
       if (this.hitPoints > 0) {
            return true; 
        }
        return false;
    }
}
// Creación de una instancia de Character para probar la clase
const hero = new Character("Aragon", 5, 12, 10);

// Mostrar las propiedades del personaje
console.log(`Nombre: ${hero.name}`);           // Nombre: Aragon
console.log(`Poder de ataque: ${hero.attackPower}`); // Poder de ataque: 5
console.log(`Inteligencia: ${hero.intelligence}`);   // Inteligencia: 12
console.log(`Puntos de vida: ${hero.hitPoints}`);   // Puntos de vida: 10
console.log(`Nivel: ${hero.level}`);           // Nivel: 0

// El personaje sube de nivel 
hero.levelUp();
console.log(`Nivel: ${hero.level}`);           // Nivel: 1 (Recuerda que todas sus estádisticas aumentan en 1)
console.log(`Poder de ataque: ${hero.attackPower}`);     // Poder de ataque: 6

// El personaje se pone a luchar contra un goblin
const goblin = new Character("Gollum", 2, 1, 6);
hero.receiveDamage(goblin.attackPower);

console.log(`Puntos de vida: ${hero.hitPoints}`);   // Puntos de vida: 9
console.log(`Sigue con vida nuestro héore? ${hero.isAlive()}`); // true

// Ahora el heroe va a atacar al goblin
goblin.receiveDamage(hero.attackPower);
console.log(`Sigue con vida el goblin? ${goblin.isAlive()}`); // false