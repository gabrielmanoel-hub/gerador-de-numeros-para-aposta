import React, {useState} from 'react'

export default props => {
    function gerarNumeroNaoContidos(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContidos(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContidos(1,60,nums)
                return [...nums, novoNumero]
            }, [])
            .sort((a, b) => {
                return a - b
            })

            return numeros
    }    
    let num = Number(props.num) 
    const verificacao = num < 6 || num > 15 ? num = 0 && alert("") : num
    console.log(verificacao)
    const [qtde, setQtde] = useState(6)
    const numerosIniciais = Array(verificacao)
    const [numeros, setNumeros] = useState(numerosIniciais)

// ========= CSS ==============
    const mystyle = {
        backgroundColor: "#0CAEE8",
        padding: '16px',
        margin: '8px' ,
        borderRadius: '100%',
        color: 'white',
    }

    const cardMega = {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap'
    }

    const button = {
        position: 'absolute',
        height: '30px',
        maxWidth: '140px',
        margin: '0 auto',
        right: '0',
        left: '0',
        bottom: '10px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#0CE8AA',
        color: '#fff',
    }

    const informe = {
        color: '#fff'
    }

    return (
        <div>
            <div style={cardMega}>
                {numeros.map((num, index) => <p key={index} style={mystyle}>{num < 10 ? `0${num}` : num}</p>)}
            </div>
            {verificacao === 0 ? <p style={informe}>Escolher números de 6 a 15</p> : '' }
            <button style={button}
                onClick={_=> setNumeros(gerarNumeros(num))}>
                Gerar números
            </button>
        
        </div>
    )
}