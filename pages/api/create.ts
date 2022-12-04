import { prisma } from "../../lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const {name, rfc, ver_4_0, sucursal, regime, cp} = req.body

  const result = await prisma.clients.create({
    data: {
      name: name,
      rfc: rfc,
      ver_4_0: ver_4_0,
      sucursal: sucursal,
      regime: regime,
      cp: cp,
    }
  })
  console.log(result);
  
  res.json(result)
}