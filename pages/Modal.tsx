import { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const modalRoot = document.querySelector("#modal-root") as HTMLElement

interface ModalProps{
    children: ReactNode,
}

export default function Modal({ children }: ModalProps){
    const elRef = useRef<HTMLDivElement | null >(null)
    if(!elRef.current)  elRef.current = document.createElement("div")

    useEffect(() => {
        const ref = elRef.current!
        modalRoot.appendChild(ref)
        return () => {
            modalRoot.removeChild(ref)
        }
    }, [])

    return createPortal(children, elRef.current)
}