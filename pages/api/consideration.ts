import { prisma } from "../../lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function hanlde(req: NextApiRequest, res: NextApiResponse) {
  const { consideration, id_client } = req.body

  const result = await prisma.considerations.create({
    data: {
      consideration: consideration,
      id_client: id_client
    }
  })

  res.json(result)
}