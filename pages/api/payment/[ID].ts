import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib";

export default async function hanlde(req: NextApiRequest, res: NextApiResponse) {
  const ID = req.query.ID
  const {client, id_client, bill_number, amount, is_paid, uuid,  uuid_compl} = req.body

  const bill = await prisma.bills.update({
    where: { id: Number(ID) },
    data: {
      client, 
      id_client, 
      bill_number, 
      amount, 
      is_paid, 
      uuid, 
      uuid_compl
    }
  })

  res.json(bill)
}