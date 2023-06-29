import { GetServerSideProps } from "next";
import { BillAsset } from "../../types";
import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";
import { prisma } from "../../lib";

interface Props {
  bill: BillAsset
}

export default function PaymentBill({ bill }: Props) {
  return (
    <>
      <Header />
      <PaymentForm bill={bill}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(Array.isArray(context.params?.ID) ? context.params?.ID[0] : context.params?.ID)
  const bill = await prisma.bills.findUnique({
    where: { id }
  })

  return {
    props: {
      bill,
    }
  }
}