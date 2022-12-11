import { prisma } from "../../../lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const ID = req.query.ID
  const {name, rfc, ver_4_0, sucursal, regime, cp} = req.body

  const post = await prisma.clients.update({
    where: { ID: Number(ID) },
    data: {
      name,
      rfc, 
      ver_4_0,
      sucursal, 
      regime,
      cp
    }
  })

  res.json(post)
}