import Head from "next/head"
import Image from "next/image"
import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from '../components/ui/Input/index'
import { Button } from '../components/ui/Button/index'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nori Nook | Faça o seu Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo NoriNook" />
        <div className={styles.login}>
          <form >
            <Input placeholder="Digite o seu Email" type="text" />
            <Input placeholder="Digite a sua Senha" type="password" />
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
