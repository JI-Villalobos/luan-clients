import { useRouter } from "next/router"

export default function BackHome() {
  const router = useRouter()

  return(
    <button 
      className="bg-transparent text-indigo-600 w-full m-1"
      onClick={() => router.push("/")}
    >
      {`<- Regresar a clientes`}
    </button>
  )
}