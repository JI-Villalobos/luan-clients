import { useRouter } from "next/router"
import { env } from "process"
import React, { useState } from "react"
import Spinner from "./Spinner"

export default function NewClientForm() {	
	const [requestStatus, setRequeststatus] = useState({
		onError: false,
		onSuccess: false,
		onLoading: false
	})
	const [name, setName] = useState('')
	const [rfc, setRfc] = useState('')
	const [sucursal, setSucursal] = useState('Fresnillo')
	const [ver_4_0, setVer_4_0] = useState(false)
	const [regime, setRegime] = useState('No Disponible')
	const [cp, setCP] = useState('No Disponible')
	const router = useRouter()

	const createClient = async () => {
		setRequeststatus({
			onError: false,
			onLoading: true,
			onSuccess: false
		})
		try {
			const body = { name, rfc, ver_4_0, sucursal, regime, cp}
			await fetch(`/api/create`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			}).then(res => {
				console.log(res)
				setRequeststatus({
					onError: false,
					onLoading: false,
					onSuccess: true
				})
				router.push('/addmail')
			})
		} catch (error) {
			setRequeststatus({
				onError: true,
				onLoading: false,
				onSuccess: false
			})
			console.log(error);

		}
	}
	return (
		<>
			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200"></div>
				</div>
			</div>

			<div className="mt-10 sm:mt-0">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Datos del cliente</h3>
							<p className="mt-1 text-sm text-gray-600">Por defecto usa la versión CFDI 3.3</p>
						</div>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<form >
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">Nombre/Razon Social</label>
											<input
												type="text"
												name="razon"
												id="razon"
												className="mt-1 text-center text-indigo-600 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												onChange={(e) => setName(e.target.value)}
											/>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">RFC</label>
											<input
												type="text"
												name="rfc"
												id="razon"
												className="mt-1 text-center text-indigo-600 block border w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												onChange={(e) => setRfc(e.target.value)}
											/>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">Sucursal</label>
											<select
												id="sucursal"
												name="sucursal"
												className="mt-1 block w-full rounded-md border border-gray-600 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
												onChange={(e) => setSucursal(e.target.value)}
											>
												<option>Fresnillo</option>
												<option>Ciudad Guzman</option>
											</select>
										</div>
										<div className="col-span-6">
											<label className="block text-sm font-medium text-gray-700">Habilitar para versión CFDI 4.0</label>
											<label className="inline-flex relative items-center cursor-pointer">
												<input type="checkbox" value="" className="sr-only peer" onChange={() => setVer_4_0(!ver_4_0)} />
												<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-indigo-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
												<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
											</label>
										</div>
										<div className="col-span-6">
											<label className="block text-sm font-medium text-gray-700">Régimen Fiscal</label>
											<input
												type="text"
												name="regimen"
												id="regimen"
												className="mt-1 text-center text-indigo-600 block w-4/5 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												onChange={(e) => setRegime(e.target.value)}
											/>
										</div>
										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label className="block text-sm font-medium text-gray-700">ZIP / Código postal</label>
											<input
												type="text"
												name="postal-code"
												id="postal-code"
												className="mt-1 text-center text-indigo-600 block w-full rounded-md border  border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												onChange={(e) => setCP(e.target.value)}
											/>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									{requestStatus.onLoading ? (<Spinner />) : (<button
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										onClick={(e) => {
											e.preventDefault()
											createClient()
										}}
									>
										Save
									</button>)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200"></div>
				</div>
			</div>
		</>
	)
}