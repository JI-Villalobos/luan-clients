import { ClientProps } from "../../types"

type Props = {
  client: ClientProps
}

export default function NewBillForm({ client }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-5 md:col-span-2 md:mt-0 w-1/2">
        <form >
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
               
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">Cliente</label>
                  <input
                    type="text"
                    name="rfc"
                    id="rfc"
                    className="mt-1 block w-1/3 rounded-md text-indigo-600 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    readOnly
                    value={client.name}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">Folio</label>
                  <input
                    type="text"
                    name="regimen"
                    id="regimen"
                    className="mt-1 block w-1/3 text-center text-indigo-600 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Monto</label>
                  <input
                    type="number"
                    name="postal-code"
                    id="postal-code"
                    className="mt-1 text-center text-indigo-600 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-6 w-2/3">
                  <label className="block text-sm font-medium text-gray-700">UUID</label>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    className="mt-1 text-center text-indigo-600 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}