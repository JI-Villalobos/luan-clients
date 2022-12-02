import { GetServerSideProps } from "next";
import Header from "../components/Header";
import { prisma } from  "../../lib/index"
import { ClientProps, Considerations, Mails } from "../../types";
import ClientData from "../components/ClientData";
import BackHome from "../components/BackHome";


interface Props{
    client: ClientProps,
    mails: Mails[],
    considerations: Considerations[]
}

export default function ClientDetail({ client, mails, considerations }: Props){
    return(
        <>
            <Header />
            <BackHome />
            <ClientData client={client} mails={mails} considerations={considerations}/>
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
    const considerations = await prisma.considerations.findMany({
        where: { id_client : ID  }
    })
    
    return {
        props: {
            client,
            mails,
            considerations,
        }
    }
}