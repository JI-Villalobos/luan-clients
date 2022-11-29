import { GetServerSideProps } from "next";
import Header from "../components/Header";
import { prisma } from  "../../lib/index"
import { ClientProps } from "../../types";
import ClientData from "../components/ClientData";


interface Props{
    client: ClientProps
}

export default function ClientDetail({ client }: Props){
    return(
        <>
            <Header />
            <ClientData client={client}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ID = Number(Array.isArray(context.params?.ID) ? context.params?.ID[0] : context.params?.ID)
    const client = await prisma.clients.findUnique({
        where: { ID },
    })

    return {
        props: {
            client,
        }
    }
}