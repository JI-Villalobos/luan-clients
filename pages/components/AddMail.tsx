import { useRouter } from "next/router"
import { useState } from "react"

export default function AddMail() {
  const [mail, setMail] = useState('')
  const route = useRouter()
  const [requestStatus, setRequestStatus] = useState({
    onLoading: false,
    onError: false,
    onSuccess: false
  })
  const { id } = route.query
  let id_client = 0

  if (id) {
    if (typeof id === 'string') {
      id_client = parseInt(id)
    }
  }

  const createMail = async () => {
    setRequestStatus({
      onLoading: true,
      onError: false,
      onSuccess: false
    })
    try {
      const body = { mail, id_client }
      await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(res => {
        console.log(res)
        setRequestStatus({
          onError: false,
          onLoading: false,
          onSuccess: true
        })
      })
    } catch (error) {
      setRequestStatus({
				onError: true,
				onLoading: false,
				onSuccess: false
			})
			console.log(error);
    }
  }

  return (
    <div className="flex m-2">
      <div>
        <div className="w-4/5 relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border  border-indigo-200 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="mail@gmail.com"
            disabled={requestStatus.onSuccess}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
      </div>
      <button
        className={
          requestStatus.onSuccess ? 'rounded border w-1/5 border-green-300 bg-green-600 text-white text-xs'
            : requestStatus.onError ? 'rounded border w-1/5 border-red-400 bg-red-500 text-white text-xs'
              : requestStatus.onLoading ? 'rounded border w-1/5 border-indigo-400 bg-indigo-500 text-white text-xs'
                : 'rounded border w-1/5 border-indigo-400 bg-indigo-600 text-white text-xs'
        }
        onClick={(e) => {
          e.preventDefault()
          createMail()
        }}
      >
        {
          requestStatus.onSuccess ? 'Añadido'
            : requestStatus.onError ? 'Error'
              : requestStatus.onLoading ? (
                <div className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
                  <span className="sr-only">Loading...</span>
                </div>
              )
                : 'Nuevo'
        }
      </button>
    </div>
  )
}