import { GetServerSideProps } from 'next'
import Header from './components/Header'
import ClientContainer from './containers/Clientcontainer'
import { prisma } from '../lib'
import { ClientProps } from '../types'

interface Props{
  clients: ClientProps[] 
}

export default function Home({ clients }: Props) {
  return (
    <>
      <Header />
      <p className='text-indigo-600 font-bold text-center m-6 underline'>Presiona Ctrl + F para buscar🔎</p>
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
