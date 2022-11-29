import { GetServerSideProps } from 'next'
import Header from './components/Header'
import ClientContainer from './containers/Clientcontainer'
import { prisma } from '../lib/index'
import { ClientProps } from '../types'

interface Props{
  clients: ClientProps[] 
}

export default function Home({ clients }: Props) {
  return (
    <>
      <Header />
      <ClientContainer clients={clients}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const clients = await prisma.clients.findMany()
  return {
    props: {
      clients,
    }
  }
}
