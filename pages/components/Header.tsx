import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter()
    return (
        <>
            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <button 
                                type="button" 
                                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"   
                                >
                                <span className="sr-only">Open menu</span>
                            </button>
                        </div>
                        <nav className="hidden space-x-10 md:flex">
                            <a href="https://www.jjvconsultores.com.mx/" className="text-base font-medium text-gray-500 hover:text-gray-900">JJV Consultores</a>
                            <a href="https://github.com/JI-Villalobos/luan-clients" className="text-base font-medium text-gray-500 hover:text-gray-900">GitHub</a>
                            <a href="https://detailed-emmental-186.notion.site/Clientes-Purificadora-Luan-fba2dac4bcef49fb87e737f72df2957f" className="text-base font-medium text-gray-500 hover:text-gray-900">Documentación</a>
                        </nav>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Soporte</a>
                            <button 
                                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                onClick={() => router.push("/new")}    
                                >
                                +Cliente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}