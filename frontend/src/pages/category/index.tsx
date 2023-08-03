
import { useState, FormEvent } from 'react'
import Head from "next/head"
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
export default function Category() {
    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent) {
        event.preventDefault();


    }

    return (
        <>
            <Head>
                <title>Nova Categoria - Nori Nook</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar Categorias</h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <input type="text"
                            placeholder="Digite o Nome da Categoria"
                            className={styles.input} value={name} onChange={
                                (e) => setName(e.target.value)
                            } />

                        <button type="submit" className={styles.buttonAdd}>
                            Cadastrar
                        </button>
                    </form>
                </main>
            </div >
        </>
    )
}