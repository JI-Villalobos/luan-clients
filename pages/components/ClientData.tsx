import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useState } from "react"
import { ClientProps, Considerations, Mails } from "../../types"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ClientConsiderations from "./ClientConsiderations"
import MailList from "./MailList"

interface Props {
  client: ClientProps,
  mails: Mails[],
  considerations: Considerations[]
}

export default function ClientData({ client, mails, considerations }: Props) {
  const [displayConsiderations, setDisplayConsiderations] = useState(false)
  const [copiedName, setCopiedName] = useState(false)
  const [copiedR, setCopiedR] = useState(false)
  const router = useRouter()


  const temporalCopiedState = (state: Dispatch<SetStateAction<boolean>>) => {
    state(true)
    setTimeout(() => {
      state(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Detalles del cliente</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Datos fiscales y consideraciones para facturación</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Versión CFDI</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 rounded">{
                client?.ver_4_0 ? '4.0' : '3.3'
              }</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Nombre completo/Razon</dt>
              <div className="flex">
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{client?.name}</dd>
                <CopyToClipboard
                  text={client?.name}
                  onCopy={() => temporalCopiedState(setCopiedName)}
                >
                  <button
                    className={
                      copiedName ? 'ml-1 w-10 rounded bg-green-700 text-white text-xs'
                        : 'ml-1 w-10 rounded bg-indigo-600 text-white text-xs'
                    }
                  >
                    {
                      copiedName ? 'Copied' : 'Copy'
                    }
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">RFC</dt>
              <div className="flex">
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{client.rfc}</dd>
                <CopyToClipboard 
                  text={client.rfc}
                  onCopy={() => temporalCopiedState(setCopiedR)}  
                >
                  <button 
                    className={
                      copiedR ? 'ml-1 w-10 rounded bg-green-700 text-white text-xs'
                      : 'ml-1 w-10 rounded bg-indigo-600 text-white text-xs'
                    }
                  >
                    {
                      copiedR ? 'Copied' : 'Copy'
                    }
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Régimen Fiscal</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{client.regime}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">CP Cliente</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{client.cp}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Dirección(es) email</dt>
              <MailList mails={mails} />
              <button
                className="bg-indigo-600 text-white w-2/5 h-5 self-center border-none text-xs rounded"
                onClick={() => router.push(`mail/${client.rfc}/${client.ID}`)}
              >
                +Mail
              </button>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Sucursal</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{client.sucursal}</dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-center m-3">
          <button
            className="mt-2 w-80 text-sm text-white bg-indigo-600 rounded "
            onClick={() => setDisplayConsiderations(!displayConsiderations)}
          >
            {displayConsiderations ? 'Cerrar' : 'Ver consideraciones'}
          </button>
        </div>
        <div className={displayConsiderations ? '' : 'hidden'}>
          <ClientConsiderations considerations={considerations} rfc={client.rfc} id={client.ID} />
        </div>
      </div>
    </div>
  )
}