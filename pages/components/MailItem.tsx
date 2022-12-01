import { Mails } from "../../types"

interface Props {
  mails: Mails[]
}

export default function MailList({ mails }: Props) {
  return (
    <div className="flex flex-col rounded-md shadow-sm">
      {mails.map(mail => (
        <div className="m-1 flex" key={`mail-is-${mail.ID}`}>
          <button className=" inline-flex items-center rounded bg-indigo-600 px-3 text-xs text-white">Copy</button>
          <input type="text" readOnly className=" w-full flex-1 text-center text-indigo-600 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue={mail.mail} />
        </div>
      ))}
    </div>
  )
}