import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Input } from '../../components/ui/Input/index'
import { Button } from '../../components/ui/Button/index'

import Link from 'next/link'

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Faça o seu Cadastro Agora!</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo NoriNook" />
                <div className={styles.login}>
                    <h1>Criando sua Conta</h1>
                    <form >
                        <Input placeholder="Digite o seu Nome" type="text" />
                        <Input placeholder="Digite o seu Email" type="text" />
                        <Input placeholder="Digite a sua Senha" type="password" />
                        <Button type="submit" loading={false}>
                            Cadastrar
                        </Button>
                    </form>
                </div>
                <Link href="/" legacyBehavior>
                    <a className={styles.text}>Já Possui uma Conta? Faça Login!</a>
                </Link>
            </div>
        </>
    )
}
