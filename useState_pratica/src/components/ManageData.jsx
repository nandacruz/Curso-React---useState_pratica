import { useState } from 'react';

const ManageData = () => {

    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);

    console.log(number);

    return(
        
        <div>   
            <div>ManageData</div>
            <div>
                <p>Quando trabalhamos com variáveis, o valor não atualiza, para isso precisamos utilizar o use State</p>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variavel</button>
            </div>

            <div>
                <p>O use State, nesse caso, serve como um manipulador da variável, renderizando e apresentando em tempo real</p>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o state</button>
            </div>
            
        </div>
        
    );
}

export default ManageData;