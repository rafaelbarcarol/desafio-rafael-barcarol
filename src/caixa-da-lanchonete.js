class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    let finalPrice = 0;

    const products = {
      cafe: 3.0,
      chantily: 1.5,
      suco: 6.2,
      sanduiche: 6.5,
      queijo: 2.0,
      salgado: 7.25,
      combo1: 9.5,
      combo2: 7.5,
    };

    //Verificação do parâmetro "itens" para certificar sua existência/quantidade
    if (!itens || itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    //Verificação da possibilidade de solicitar item extra (deve haver o item principal)
    let cafe = false;
    let sandwich = false;

    for (const item of itens) {
      const [itemName, quantity] = item.split(",");

      if (itemName === "cafe") {
        cafe = true;
      }

      if (itemName === "sanduiche") {
        sandwich = true;
      }
    }

    for (const item of itens) {
      const [itemName, quantity] = item.split(",");

      if (itemName === "chantily" && !cafe) {
        return "Item extra não pode ser pedido sem o principal";
      }

      if (itemName === "queijo" && !sandwich) {
        return "Item extra não pode ser pedido sem o principal";
      }
    }

    //Verificação do nome e quantidade de um produto/elemento recebido via parâmetro "itens"
    for (const item of itens) {
      const [itemName, quantity] = item.split(",");
      if (products[itemName] && quantity > 0) {
        finalPrice += products[itemName] * parseInt(quantity);
      } else if (products[itemName] && quantity <= 0) {
        return "Quantidade inválida!";
      } else {
        return "Item inválido!";
      }
    }

    //Verificação do método de pagamento, aplicação de taxas/descontos e formatação da moeda
    if (metodoDePagamento === "dinheiro") {
      return (finalPrice * 0.95).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else if (metodoDePagamento === "credito") {
      return (finalPrice * 1.03).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else if (metodoDePagamento === "debito") {
      return finalPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else {
      return "Forma de pagamento inválida!";
    }
  }
}

export { CaixaDaLanchonete };
