import Head from "next/head";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from './styles.module.scss';
import { Header } from '../../components/Header';
import { canSSRAuth } from "../../utils/canSSRAuth";

import { FiUpload } from 'react-icons/fi';

import { toast } from 'react-toastify'

import { setupAPIClient } from "../../services/api";

type ItemProps = {
    id: string;
    name: string;
}

interface CategoryProps {
    categoryList: ItemProps[]
}


export default function Product({ categoryList }: CategoryProps) {
    console.log(categoryList)
    const [avatarUrl, setAvatarUrl] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')
    const [imageAvatar, setImageAvatar] = useState(null)

    const [categories, setCategories] = useState(categoryList || [])
    const [categorySelected, setCategorySelected] = useState(0)

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }

        const image = e.target.files[0];

        if (!image) {
            return;
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    function handleChangeCategory(event) {
        setCategorySelected(event.target.value)
    }

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        try {
            const data = new FormData();

            if (name === '' || price === '' || description === '' || imageAvatar === null) {
                toast.info("Preencha Todos os Campos!")
                return
            }

            data.append('name', name);
            data.append('price', price);
            data.append('description', description);
            data.append('category_id', categories[categorySelected].id);
            data.append('file', imageAvatar);

            const apiClient = setupAPIClient();
            await apiClient.post('/product', data)
            toast.success("Cadastrado com Sucesso!")

        } catch (err) {
            console.log(err)
            toast.error("Erro ao Cadastrar o Produto!")
        }

        setName('');
        setPrice('');
        setDescription('');
        setImageAvatar('');
        setAvatarUrl('');

    }


    return (
        <>
            <Head>
                <title>Novo Produto - Nori Nook</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>
                    <h1>Novo Produto</h1>

                    <form className={styles.form} onSubmit={handleRegister}>

                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#FF3F4B" />
                            </span>
                            <input type="file" accept="image/png, imagem/jpeg" onChange={handleFile} />
                            {avatarUrl && (
                                <img src={avatarUrl} alt="Foto do Produto"
                                    width={250} height={250}
                                    className={styles.preview}
                                />
                            )}
                        </label>

                        <select value={categorySelected} onChange={handleChangeCategory}>
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>

                        <input type="text"
                            placeholder="Digite o Nome do Produto"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="text"
                            placeholder="Digite o Preço do Produto"
                            className={styles.input}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <textarea
                            placeholder="Descreva o Seu Produto"
                            className={styles.input}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className={styles.buttonAdd} type="submit">Cadastrar</button>
                    </form>
                </main>

            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx)

    const response = await apiClient.get('/category')


    return {
        props: {
            categoryList: response.data
        }
    }
})