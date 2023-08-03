import Head from "next/head";
import styles from './styles.module.scss'
import { Header } from '../../components/Header'
import { canSSRAuth } from "../../utils/canSSRAuth";


export default function Product() {
    return (
        <>
            <Head>
                <title>Novo Produto - Nori Nook</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>
                    <h1>Novo Produto</h1>

                    <form className={styles.form}>


                        <select>
                            <option>
                                Bebidas
                            </option>
                            <option>
                                Sushis
                            </option>
                        </select>

                        <input type="text" placeholder="Digite o Nome do Produto" className={styles.input} />
                        <input type="text" placeholder="Digite o Preço do Produto" className={styles.input} />
                        <textarea placeholder="Descreva o Seu Produto" className={styles.input} />
                        <button className={styles.buttonAdd} type="submit">Cadastrar</button>
                    </form>
                </main>

            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {

        }
    }
})