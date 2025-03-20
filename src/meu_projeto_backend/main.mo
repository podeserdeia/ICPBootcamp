actor Main {
  // Declaração de Variáveis
  var numero1 : Nat = 10;
  var numero2 : Int = 20;
  var mensagem : Text = "Meu primeiro Dapp";

  // Funções Aritméticas
  public func somar(a : Nat, b : Nat) : async Nat {
    return a + b;
  };

  public func subtrair(a : Nat, b : Nat) : async Nat {
    return a - b;
  };

  public func multiplicar(a : Nat, b : Nat) : async Nat {
    return a * b;
  };
};