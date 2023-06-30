import { GetServerSideProps } from "next";
import { BillAsset } from "../types";
import Header from "./components/Header";
import BillContainer from "./containers/BillContainer";
import { prisma } from "../lib";
import Link from "next/link";
import BackHome from "./components/BackHome";


interface Props {
  bills: BillAsset[]
}

export default function Bills({ bills }: Props) {
  return (
    <>
      <Header />
      <BackHome />
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