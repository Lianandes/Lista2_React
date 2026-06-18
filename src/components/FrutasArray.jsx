function FrutasArray(){
    const frutas = ["Maçã","Banana","Uva"]
    return(
        <>
            <h2>Exercicio 1 e 2</h2>
            <h3>Lista de frutas com Array</h3>
            <pre>
                Primeira fruta: {frutas[0]}.
                <br />
                Segunda fruta: {frutas[1]}.
                <br />
                terceira fruta: {frutas[2]}.
                <br /> <br />
                Eu gosto de {frutas[1]} e {frutas[2]}.
            </pre>
            
        </>
    );
}

export default FrutasArray;