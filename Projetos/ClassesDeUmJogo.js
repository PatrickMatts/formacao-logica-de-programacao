// Objetivo: Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
// - nome, idade e tipo (ex: guerreiro, mago, monge, ninja)

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - Exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - Onde o {tipo} deve ser concatenando o tipo que está na propriedade da classe e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// Ao final deve se exibir uma mensagem:
// - "o {tipo} atacou usando {ataque}"

// RESOLUÇÃO

// Code for the Hero class
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.level = age;
        this.type = type;
    }
    
    Attack() { 
        let attack;
        if (this.type === 'Warrior') {
            attack = 'Sword';
        } else if (this.type === 'Mage') {
            attack = 'Magic';
        } else if (this.type === 'Monk') {
            attack = 'Martial arts';
        } else if (this.type === 'Ninja') {
            attack = 'Shuriken';
        }
      
        console.log(`The ${this.type} is attacking with ${attack}`);
    }
}

let warrior = new Hero('Aragorn', 87, 'Warrior');
warrior.Attack();

// output: The Warrior is attacking with Sword
