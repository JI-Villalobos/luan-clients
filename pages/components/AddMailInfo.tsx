interface Props{
  rfc: string
}

export default function AddMailInfo({ rfc }: Props) {

  return (
    <div className="bg-white py-3 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">{rfc}</h2>
          <h3 className="text-lg font-semibold leading-8 text-indigo-600">Añade nuevos Emails</h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">tienes un la posibilidad de añadir un maximo de 7 mails por cliente en el caso de que estos, cuenten con varias sucursales.</p>
        </div>
      </div>
    </div>
  )
}