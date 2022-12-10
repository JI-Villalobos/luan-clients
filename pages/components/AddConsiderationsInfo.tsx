interface Props{
  rfc: string
}

export default function AddConsiderationsInfo({ rfc }: Props) {
  return(
    <div className="bg-white py-3 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">{rfc}</h2>
          <h3 className="text-lg font-semibold leading-8 text-indigo-600">Consideraciones sobre facturas</h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Añade información adicional sobre como facturar con este cliente</p>
        </div>
      </div>
    </div>
  )
}