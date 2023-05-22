import Image from "next/legacy/image";
import Botao from "../botao";
import { useState } from "react";
import Link from "next/link";
import InputPublico from "../inputPublico";

import imagemEnvelope from "../../public/images/envelope.svg"
import imagemSenha from "../../public/images/chave.svg"
import imagemLogo from "../../public/images/logo.svg"


export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <section className={`paginaLogin paginaPublica`}>
           <div className="logoContainer">
                <Image src={imagemLogo} alt="Logotipo" layout="fill" className="img"/>
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                  <InputPublico 
                    imagem={imagemEnvelope}
                    texto="Email"
                    tipo="email"
                    aoAlterarValor = {e => setEmail(e.target.value)}
                    valor={email}
                  />
                  <InputPublico 
                    imagem={imagemSenha}
                    texto="Senha"
                    tipo="password"
                    aoAlterarValor = {e => setSenha(e.target.value)}
                    valor={senha}
                  />

                  <Botao 
                    texto="Login"
                    tipo="submit"
                    desabilitado = {false}
                  />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta</p>
                    <Link href="/cadastro">Faça seu cadastro agora</Link>
                </div>
            </div>
        </section>
    )
}