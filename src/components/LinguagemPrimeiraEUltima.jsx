function LiguagemPrimeiroEUltimo(){
    const linguagens = ["JavaScript","Python","Java","C#"]
    return(
        <>
            <h2>Exercicio 13</h2>
            <h3>Pega o primeiro e a última Linguagem do Array</h3>
            <p>Primeira Linguagem: {linguagens[0]}</p>
            <p>Última linguagem: {linguagens[3]}</p>
        </>
    );
}

export default LiguagemPrimeiroEUltimo;