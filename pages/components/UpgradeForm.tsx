import { ClientProps } from "../../types"

interface Props {
  client: ClientProps
}

export default function UpgradeForm({ client }: Props) {
  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="mt-10 sm:mt-0 ml-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Actualiza CP y Régimen Fiscal del cliente</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">Nombre/Razon</label>
                      <input 
                        type="text" 
                        name="first-name" 
                        id="first-name" 
                        readOnly 
                        value={client.name} 
                        className="mt-1 block w-full rounded-md text-gray-500 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">RFC</label>
                      <input 
                        type="text" 
                        name="email-address" 
                        readOnly value={client.rfc} 
                        id="email-address" 
                        className="mt-1 block w-full rounded-md text-gray-500 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">Regimen Fiscal</label>
                      <input 
                        type="text" 
                        name="street-address" 
                        id="street-address" 
                        className="mt-1 block w-full text-center text-indigo-600 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">ZIP / Código Postal</label>
                      <input 
                        type="text" 
                        name="postal-code" 
                        id="postal-code" 
                        className="mt-1 text-center text-indigo-600 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}