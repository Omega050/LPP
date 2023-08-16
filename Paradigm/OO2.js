class Animal {
    constructor(name) {
      this.name = name;
    }
  
    emiteSom() {
      return "O animal faz um som genérico.";
    }
  }
  
  class Cachorro extends Animal {
    emiteSom() {
      return "O cachorro late: Woof woof!";
    }
  }
  
  class Gato extends Animal {
    emiteSom() {
      return "O gato mia: Meow meow!";
    }
  }
  
  function somDoAnimal(animal) {
    console.log(animal.name + ": " + animal.emiteSom());
  }
  
  const animal = new Animal("Animal Genérico");
  const cachorro = new Cachorro("Rex");
  const gato = new Gato("Whiskers");
  
  // Chamando a função de emissão de sons com diferentes tipos de animais
  somDoAnimal(animal);
  somDoAnimal(cachorro);
  somDoAnimal(gato);
  
