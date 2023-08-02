import Head from "next/head"
import Image from "next/image"
import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from '../components/ui/input/index'

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

          </form>
        </div>
      </div>
    </>
  )
}
