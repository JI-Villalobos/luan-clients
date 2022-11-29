export interface ClientProps{
  ID: number,
  name: string,
  rfc: string,
  ver_4_0: boolean,
  regime: string,
  cp: string,
  sucursal: string,
  considerations: Considerations[],
  mails: Mails[]
}

export interface Considerations{
  ID: number,
  consideration: string,
  id_client: number
}

export interface Mails{
  ID: number,
  mail: string,
  id_client: number
}