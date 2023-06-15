const CPF_SIZE = 11

function validaCPF(){
  const cpfCru = document.getElementById('input-cpf').value;

  const cpfFormatado = limpaCPF(cpfCru)
  
  if (cpfFormatado.length !== CPF_SIZE) {
    mostrarResultado('O cpf deve conter 11 digitos', 'red')
  }
  else {
    mostrarResultado('CPF verificado', 'green')
  }

}

const limpaCPF = (cpf) => {
  const cpfFormatado = cpf.replace(/\D/g, '')
  console.log(cpfFormatado)
  return cpfFormatado
}

const mostrarResultado = (texto, cor) =>{
  const span = document.getElementById('resultado')

  span.innerHTML = texto
  span.style.color = cor
}