import { useRouter } from "next/router"
import { Considerations } from "../../types"

interface Props {
  considerations: Considerations[],
  rfc: string,
  id: number
}

export default function ClientConsiderations({ considerations, rfc, id }: Props) {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center h-full mb-5">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Consideraciones</h2>
        </header>
        <button 
          className="rounded border h-8 ml-5 border-indigo-400 bg-indigo-600 text-white text-xs"
          onClick={() =>router.push(`/client/considerations/${rfc}/${id}`)}  
        >
          +Consideración
        </button>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">○</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Considerar</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {
                  considerations.map  (consideration => (
                    <tr key={`consideration-id-${consideration.ID}`}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">○</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{consideration.consideration}</div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}