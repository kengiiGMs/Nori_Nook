import { canSSRAuth } from "../../utils/canSSRAuth"


export default function Dashboard() {
    return (
        <h1>Bem vindo ao Painel</h1>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})

