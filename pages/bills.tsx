import { GetServerSideProps } from "next";
import { BillAsset } from "../types";
import Header from "./components/Header";
import BillContainer from "./containers/BillContainer";
import { prisma } from "../lib";


interface Props {
  bills: BillAsset[]
}

export default function Bills({ bills }: Props) {
  return (
    <>
      <Header />
      <BillContainer bills={bills}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const bills = await prisma.bills.findMany()
  return {
    props: {
      bills,
    }
  }
}