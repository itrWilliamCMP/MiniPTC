import { useState } from 'react'

const Calculadora =() => {

      //Se crea el estado numero 1 y 2 y resultado

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [resultado, setResultado] = useState(null)

  const sumar =() =>{
    const suma = parseFloat(num1) + parseFloat(num2)
    setResultado(suma)
    setNum1("");
    setNum2("");
  }

    return(
        <>
        <label >Numero 1:</label>
      <input
      type='number'
      placeholder='0'
      value={num1}
      onChange={(texto) =>setNum1(texto.target.value)}
      />
      <br/>
      <label >Numero 2:</label>
      <input
      type='number'
      placeholder='0'
      value={num2}
      onChange={(texto) =>setNum2(texto.target.value)}
      />
      <br/>
      <button onClick={sumar}>Sumar</button>
      <p>Resultado: {resultado}</p>
        </>
    );
}

export default Calculadora;