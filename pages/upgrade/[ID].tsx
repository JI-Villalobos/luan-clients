import { GetServerSideProps } from "next";
import { ClientProps } from "../../types";
import { prisma } from  "../../lib/index"
import Header from "../components/Header";
import UpgradeForm from "../components/UpgradeForm";

interface Props{
  client: ClientProps
}

export default function UpgradeClient({ client }: Props) {
  return (
    <>
      <Header />
      <UpgradeForm client={client} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ID = Number(Array.isArray(context.params?.ID) ? context.params?.ID[0] : context.params?.ID)
  const client = await prisma.clients.findUnique({
    where: { ID }
  })

  return {
    props: {
      client,
    }
  }
}