function NomesArray(){
    const nomes = ["Lia","Enzo","Santana"]
    return(
        <>
            <h2>Exercicio 5</h2>
            <h3>Exibir nomes da lista Array</h3>
            <pre>
                Aluno 1: {nomes[0]} <br />
                Aluno 2: {nomes[1]} <br />
                Aluno 3: {nomes[2]} <br />
            </pre>
        </>
    );
}

export default NomesArray;