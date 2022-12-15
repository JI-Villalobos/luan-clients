import { useState } from "react";
import { Mails } from "../../types";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  mail: Mails
}

export default function MailItem({ mail }: Props) {
  const [copied, setCopied] = useState(false)

  const onCopied = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <div className="m-1 flex" key={`mail-is-${mail?.ID}`}>
      <CopyToClipboard 
        text={mail?.mail}
        onCopy={() => onCopied()}
      >
        <button 
          className={
            copied ? 'inline-flex items-center rounded bg-green-700 px-3 text-xs text-white'
            : 'inline-flex items-center rounded bg-indigo-600 px-3 text-xs text-white'
          }
        >
          { copied ? 'Copied' : 'Copy' }
        </button>
      </CopyToClipboard>
      <input type="text" readOnly className=" w-full flex-1 text-center text-indigo-600 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue={mail?.mail} />
    </div>
  )
}