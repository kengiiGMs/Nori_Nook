import { useState, FormEvent, useContext } from 'react'

import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Input } from '../../components/ui/Input/index'
import { Button } from '../../components/ui/Button/index'

import { AuthContext } from '../../contexts/AuthContext'

import { toast } from 'react-toastify'

import Link from 'next/link'

export default function SignUp() {
    const { signUp } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false)

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();
        if (name === '' || email === '' || password === '') {
            toast.info("Preencha Todos os Campos!")
            return
        }

        setLoading(true)

        let data = {
            name,
            email,
            password
        }

        await signUp(data)

        setLoading(false)
    }

    return (
        <>
            <Head>
                <title>Faça o seu Cadastro Agora!</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo NoriNook" />
                <div className={styles.login}>
                    <h1>Criando sua Conta</h1>
                    <form onSubmit={handleSignUp}>
                        <Input placeholder="Digite o seu Nome" type="text" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="Digite o seu Email" type="text" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="Digite a sua Senha" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" loading={loading}>
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
