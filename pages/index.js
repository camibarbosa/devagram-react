import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Botao from '../componentes/botao'
import Avatar from '../componentes/avatar'
import { UploadImages } from '../componentes/uploadImages'
import { useRef, useState } from 'react'

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  console.log(imagem);
  return (
    <>
      <h1>Ola</h1>
      <button onClick={() => referenciaInput?.current?.click()}>Abrir seletor de arquivos</button>
      <div style={{width: 200}}>
        <UploadImages 
          setImagem={setImagem}
          imagemPreview={imagem?.preview} 
          aoSetarAReferencia = {(ref) => referenciaInput.current = ref}
        />
        <Avatar/>
        <Botao texto={'Login'} manipularClick={() => console.log('botao clicado')} cor='primaria'/>
      </div>
    </>
  );
}
