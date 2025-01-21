// Orientação: Crie um código para armazenar o máximo de informações possível dos pokemon da imagem e ao final, para cada um, exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"

// RESOLUÇÂO

let pokemon = [
    ["Poochyena", "Lv2", "Male", "HP 13/13"],
    ["Zigzagoon", "Lv2", "Female", "HP 13/13"],
    ["Dragonite", "Lv5", "Male", "HP 25/25"],
    ["Dragonite", "Lv5", "Female", "HP 24/24"],
    ["Dragonite", "Lv5", "Female", "HP 24/24"],
    ["Poochyena", "Lv3", "Female", "HP 15/15"],
    ["Wurmple", "Lv2", "Male", "HP 07/10"],
  ];
  
  pokemon.forEach(function(p) {
    console.log(p[0] + " Cadastrado com sucesso!");
  });

// Output:
// Poochyena Cadastrado com sucesso!
// Zigzagoon Cadastrado com sucesso!
// Dragonite Cadastrado com sucesso!
// Dragonite Cadastrado com sucesso!
// Dragonite Cadastrado com sucesso!
// Poochyena Cadastrado com sucesso!
// Wurmple Cadastrado com sucesso!
