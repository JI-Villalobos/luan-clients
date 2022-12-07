import { prisma } from "../../lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { mail, id_client } = req.body

  const result = await prisma.mails.create({
    data:{
      mail: mail,
      id_client: id_client
    }
  })

  res.json(result)
}