import Link from "next/link"
import { BillAsset } from "../../types"

type Props = {
  bill: BillAsset
}

export default function Bill({ bill }: Props) {
  return (
    <div className="w-3/5 lg:flex lg:items-center lg:justify-center m-3 rounded shadow-lg">
      <div className="min-w-0 w-2/5">
        <h2 className="text-xl font-bold leading-7 text-indigo-600 sm:truncate sm:text-2xl sm:tracking-tight">{bill?.client}</h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 items-center">
          <div className="mt-2 flex items-center text-xs text-gray-500 mb-1">
            UUID: {bill?.uuid}
          </div>
        </div>
      </div>
      <div className="min-w-0 w-1/5">
        <h2 className="font-bold leading-7 text-indigo-600 sm:truncate sm:text-2xl sm:tracking-tight">{bill?.bill_number}</h2>
        <h2 className="font-bold leading-7 text-green-600 sm:truncate sm:text-2xl sm:tracking-tight">${bill?.amount}</h2>
      </div>
      <div className="flex lg:mt-0 lg:ml-2">
        <span className="hidden sm:block">
          {
            bill?.is_paid ? (
              <div className="min-w-0 ">
                <p className="text-xl font-bold leading-7 text-green-600 sm:truncate sm:text-2xl sm:tracking-tight">Pagada</p>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 items-center">
                  <div className="mt-2 flex items-center text-xs text-violet-400 mb-1">
                    UUID COMP.: {bill?.uuid_compl}
                  </div>
                </div>
              </div>
            )
              : (
                <Link href={`bill/${bill?.id}`}>
                  <button type="button" className="w-20  mr-2 mb-2 items-center rounded-md border  bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Pagar
                  </button>
                </Link>)
          }
        </span>
      </div>
    </div>
  )
}