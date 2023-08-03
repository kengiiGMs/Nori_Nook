
import { useState, FormEvent } from 'react'
import Head from "next/head"
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { toast } from 'react-toastify'
import { setupAPIClient } from '../../services/api'
import { canSSRAuth } from '@/utils/canSSRAuth'

export default function Category() {
    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (name === '') {
            toast.info("Preencha Todos os Campos!")
            return;
        }

        const apiClient = setupAPIClient()
        await apiClient.post('/category', {
            name: name
        })

        toast.success("Categoria Cadastrada!")
        setName('')

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


export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})