import { GetServerSideProps } from "next";
import Header from "../components/Header";
import { prisma } from  "../../lib/index"
import { ClientProps, Mails } from "../../types";
import ClientData from "../components/ClientData";


interface Props{
    client: ClientProps,
    mails: Mails[]
}

export default function ClientDetail({ client, mails }: Props){
    return(
        <>
            <Header />
            <ClientData client={client} mails={mails}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ID = Number(Array.isArray(context.params?.ID) ? context.params?.ID[0] : context.params?.ID)
    const client = await prisma.clients.findUnique({
        where: { ID },
    })
    const mails = await prisma.mails.findMany({
        where: { id_client : ID }
    })
    console.log(mails);
    
    return {
        props: {
            client,
            mails
        }
    }
}