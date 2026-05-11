export async function getProducts() {
  const response = await fetch(
    "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data = await response.json();
  return data.products;
}
