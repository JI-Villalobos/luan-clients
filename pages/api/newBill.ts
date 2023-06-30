import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const {client, id_client, bill_number, amount, is_paid, uuid} = req.body
  const result = await prisma.bills.create({
    data: {
      client, 
      id_client, 
      bill_number, 
      amount, 
      is_paid, 
      uuid
    }
  })
  res.json(result)
}