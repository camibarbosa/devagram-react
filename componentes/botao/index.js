export default function Botao({
    tipo = 'button', //valor padrao da propriedade
    texto,
    cor = 'primaria',
    desabilitado = false, //disabilitando o botao
    manipularClick
}){
    return (
        <button type={tipo} 
        className={`btn ${cor}`} 
        disabled={desabilitado}
        onClick={manipularClick}
        >{texto}</button>
    )
}