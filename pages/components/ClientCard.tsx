import Link from 'next/link'
import { useRouter } from 'next/router'
import { ClientProps } from '../../types'

interface Client {
    client: ClientProps
}

export default function ClientCard({ client }: Client) {
    const router = useRouter()

    return (
        <div className="w-3/5 lg:flex lg:items-center lg:justify-center m-3 rounded shadow-lg">
            <div className="min-w-0 w-2/5">
                <h2 className="text-xl font-bold leading-7 text-indigo-600 sm:truncate sm:text-2xl sm:tracking-tight">{client.name}</h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 items-center">
                    <div className="mt-2 flex items-center text-sm text-gray-500 mb-1">
                        RFC: {client.rfc}
                    </div>
                    {
                        !client.ver_4_0 && (
                            <Link href={`/upgrade/${client.ID}`} className='text-indigo-600'>
                                Actualizar a 4.0
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="flex lg:mt-0 lg:ml-2">
                <span className="hidden sm:block">
                    <button type="button" className="w-20  mr-2 mb-2 items-center rounded-md border  bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => router.push(`/client/${client.ID}`)}
                    >
                        Detalles
                    </button>
                </span>
            </div>
        </div>
    )
}