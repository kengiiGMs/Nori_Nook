import { useContext, FormEvent, useState } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from '../components/ui/Input/index'
import { Button } from '../components/ui/Button/index'

import { AuthContext } from '../contexts/AuthContext'

import Link from 'next/link'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      email,
      password
    }
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Nori Nook | Faça o seu Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo NoriNook" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite o seu Email" type="text" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Digite a sua Senha" type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
        </div>
        <Link href="/signup" legacyBehavior>
          <a className={styles.text}>Não Possui uma Conta? Cadastre-se</a>
        </Link>
      </div>
    </>
  )
}
