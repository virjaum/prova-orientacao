export class Estatistica {
  private numeros: number[];

  constructor(numeros: number[]) {
    this.numeros = numeros;
  }

  media() {
    let total = 0;
    for (let i = 0; i < this.numeros.length; i = i + 1) {
      total = total + this.numeros[i];
    }
    return total / this.numeros.length;
  }

  mediana() {
    let numerosOrdenados = this.numeros.slice();
    numerosOrdenados.sort(function(a, b) {
      return a - b;
    });

    let meio = Math.floor(numerosOrdenados.length / 2);

    if (numerosOrdenados.length % 2 === 0) {
      let valorEsquerdo = numerosOrdenados[meio - 1];
      let valorDireito = numerosOrdenados[meio];
      return (valorEsquerdo + valorDireito) / 2;
    } else {
      return numerosOrdenados[meio];
    }
  }

  moda() {
   // dificil dms professor ta loco kkkkkkkkkkkkkk
  }

  variancia() {
    let mediaValores = this.media();
    let somaDiferencasQuadradas = 0;

    for (let i = 0; i < this.numeros.length; i = i + 1) {
      let diferenca = this.numeros[i] - mediaValores;
      let quadradoDiferenca = diferenca * diferenca;
      somaDiferencasQuadradas = somaDiferencasQuadradas + quadradoDiferenca;
    }

    return somaDiferencasQuadradas / (this.numeros.length - 1);
  }

  desvioPadrao() {
    return Math.sqrt(this.variancia());
  }

  coeficienteDeVariacao() {
    let mediaValores = this.media();
    return (this.desvioPadrao() / mediaValores) * 100;
  }
}