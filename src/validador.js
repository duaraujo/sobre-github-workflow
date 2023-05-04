// Conjunto de REGEX para validação de entradas.

function validar_email(email)
{
  let validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(validarRegExNoEmail)) {
    return true; 
  } else {
    return false; 
  }
 
}
  
function validar_cep(cep){
  // escreva seu código aqui
  console.log('validar cep')

}

function validar_cpf(cpf){
// escreva seu código aqui

}

function validar_telefone(telefone){
  // escreve seu código aqui

}
