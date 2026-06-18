function ListaTarefasArray(){
    const tarefas = ["Estudar React","Fazer exercícios","Praticar código"];
    return(
        <>
            <h2>Exercicio 15</h2>
            <h3>Lista de tarefas em Array</h3>
            <p>Minhas tarefas hoje: </p>
            <ol>
                <li >{tarefas[0]}</li>
                <li>{tarefas[1]}</li>
                <li>{tarefas[2]}</li>
            </ol>
        </>
    );
}

export default ListaTarefasArray;