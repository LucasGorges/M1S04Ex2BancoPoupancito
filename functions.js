class Conta {
    constructor(saldoInicial, senha) {
      this.saldo = saldoInicial;
      this._senha = senha;
    }
  
    get senha() {
      return this._senha;
    }
  
    deposito(valor, senha) {
      if (senha !== this.senha) {
        console.log("Senha inválida.");
        return;
      }
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  
    retirada(valor, senha) {
      if (senha !== this.senha) {
        console.log("Senha inválida.");
        return;
      }
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
        return;
      }
      this.saldo -= valor;
      console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
    }
  }
  
  // Exemplo de uso
  const contaCorrente = new Conta(1000, "1234");
  
  console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`);
  contaCorrente.deposito(500, "1234");
  console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`);
  contaCorrente.retirada(200, "4321"); // senha incorreta
  console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`);
  contaCorrente.retirada(1500, "1234"); // saldo insuficiente
  console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`);
  contaCorrente.retirada(300, "1234");
  console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`);
  