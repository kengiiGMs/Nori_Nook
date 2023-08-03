import { useContext, FormEvent, useState } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from '../components/ui/Input/index'
import { Button } from '../components/ui/Button/index'

import { AuthContext } from '../contexts/AuthContext'

import { toast } from 'react-toastify'

import Link from 'next/link'
import { canSSRGuest } from '../utils/canSSRGuest'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      toast.info("Preencha Todos os Campos!")
      return
    }

    setLoading(true)

    let data = {
      email,
      password
    }
    await signIn(data)

    setLoading(false)
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
            <Button type="submit" loading={loading}>
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

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})