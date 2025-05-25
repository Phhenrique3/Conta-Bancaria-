const api =
  "https://api-conta-dot-api-samples-423102.uc.r.appspot.com/api/contas";
const senha = 12119065;

export async function findAll() {
  const requestInfo = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${senha}`,
    },
  };

  const responseHttp = await fetch(api, requestInfo);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    console.log("falha de consulta os dados erro 400");
    throw new Error("falha de consulta dados erro 400");
  }
}

export async function deleteById(id) {
  console.log(`deletando a conta bancaria (${id})`);

  const requestInfo = {
    method: "DELETE",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${senha}`,
    },
  };
  const resposeHttp = await fetch(api + "/" + id, requestInfo);

  if (resposeHttp.ok) {
    return await resposeHttp.json();
  } else {
    console.log("falha ao buscar sua conta bancaria");
    throw new Error("falha ao tentar excluir  ");
  }
}

export async function insert(tipo, dataAbertura, usuario, senha, saldo) {
  const body = JSON.stringify({ tipo, dataAbertura, usuario, senha });

  const requestInfo = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${senha}`,
    },
    body,
  };

  const resposeHttp = await fetch(api, requestInfo);
  if (resposeHttp) {
    return await resposeHttp.json();
  } else {
    const erro = await resposeHttp.text();
    console.log(resposeHttp.status, erro);
    throw new Error(erro);
  }
}
