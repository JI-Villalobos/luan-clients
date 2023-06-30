import { GetServerSideProps } from "next";
import { ClientProps } from "../../types";
import Header from "../components/Header";
import { prisma } from "../../lib";
import NewBillForm from "../components/NewBillForm";

interface Props {
  client: ClientProps
}

export default function NewBill({ client }: Props) {
  return (
    <>
      <Header />
      <NewBillForm client={client}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps =async (context) => {
  const ID = Number(Array.isArray(context.params?.ID) ? context.params?.ID[0] : context.params?.ID)
  const client = await prisma.clients.findUnique({
    where: { ID }
  })

  return {
    props: {
      client
    }
  }
}