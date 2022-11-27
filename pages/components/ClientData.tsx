export default function ClientData() {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Detalles del cliente</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Datos fiscales y consideraciones para facturación</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Versión CFDI</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 rounded">3.3</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Nombre completo/Razon</dt>
                        <div className="flex">
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Desarrollo y construcciones sa de cv</dd>
                            <button className=" ml-1 w-10 rounded bg-indigo-600 text-white text-xs">Copy</button>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">RFC</dt>
                        <div className="flex">
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">DCU801124B41</dd>
                            <button className=" ml-1 w-10 rounded bg-indigo-600 text-white text-xs">Copy</button>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Régimen Fiscal</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">No disponible</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">CP Cliente</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">No disponible</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Dirección(es) email</dt>
                        <button className="ml-1 h-35 w-60 rounded bg-white border border-gray-300 text-sm text-blue-600">Visualizar lista de correos</button>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">CP sucursal</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">21704</dd>
                    </div>
                </dl>
            </div>
            <div className="flex justify-center m-3">
                <button className="mt-2 w-80 text-sm text-white bg-indigo-600 rounded ">Ver consideraciones</button>
            </div>
        </div>
    )
}