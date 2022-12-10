import { useRouter } from "next/router"
import { useState } from "react"

export default function AddConsideration() {
  const [consideration, setConsideration] = useState('')
  const router = useRouter()
  const [requestStatus, setRequestStatus] = useState({
    onLoading: false,
    onError: false,
    onSuccess: false
  })
  const { id } = router.query
  let id_client = 0

  if (id) {
    if (typeof id === 'string') {
      id_client = parseInt(id)
    }
  }

  const createConsideration = async () => {
    setRequestStatus({
      onLoading: true,
      onError: false,
      onSuccess: false
    })
    try {
      const body = { consideration , id_client }
      await fetch('/api/consideration', {
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
    <div className="flex flex-col w-full justify-center items-center mt-10">
      <div className="flex flex-row w-3/5 h-20 shadow-md justify-center items-center">
        <input
          type="text"
          name="consideration"
          id="consideration"
          className="m-1 text-center text-indigo-600 block w-4/5 h-10 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          disabled={requestStatus.onSuccess}
          onChange={(e) => setConsideration(e.target.value) }
        />
        <button
          type="button"
          className={
            requestStatus.onSuccess ? 'rounded border w-20 h-10 border-green-300 bg-green-600 text-white text-xs'
            : requestStatus.onError ? 'rounded border w-20 h-10 border-red-400 bg-red-500 text-white text-xs'
            : requestStatus.onLoading ? 'rounded border w-20 h-10 border-indigo-400 bg-indigo-500 text-white text-xs'
            : 'rounded border w-20 h-10 border-indigo-400 bg-indigo-600 text-white text-xs'
          }
          onClick={(e) => {
            e.preventDefault()
            createConsideration()
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
    </div>
  )
}