import { Mails } from "../../types"
import MailItem from "./MailItem"

interface Props {
  mails: Mails[]
}

export default function MailList({ mails }: Props) {
  return (
    <div className="flex flex-col rounded-md shadow-sm">
      {mails?.map(mail => (
        <MailItem mail={mail} key={`mail-id-${mail.ID}`}/>
      ))}
    </div>
  )
}