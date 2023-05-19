import { useEffect, useRef } from "react";

export function UploadImages({
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetarAReferencia
}) {
    
    const referenciaInput = useRef(null);
    
    //toda vez que referencia do input for alterado ele vai verificar se o
    //componente pai passou a prop
    useEffect(() => {
        if(!aoSetarAReferencia){
            return;
        }
        aoSetarAReferencia(referenciaInput?.current);
    }, [referenciaInput?.current]);

    const abrirSeletorArquivos = () => {
       referenciaInput?.current?.click();
    }

    const aoAlterarImagem = () => {
        if(!referenciaInput?.current?.files?.length){
            return;
        }

        const arquivo = referenciaInput?.current?.files[0];
        
        //preview da imagem
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () => {
            setImagem({
                preview: fileReader.result,
                arquivo
            });
        }
    }

    //adicionar somente imagens
    return (
        <div className={`uploadImgContainer ${className}`} onClick={abrirSeletorArquivos}>
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img src={imagemPreview} alt="Imagem preview" className="imagemPreviewClassName"/>
                </div>
            )} 
            <input 
                type="file" 
                className="oculto" 
                accept="image/*"
                ref={referenciaInput}
                onChange={aoAlterarImagem}
            />
        </div>
    );
}