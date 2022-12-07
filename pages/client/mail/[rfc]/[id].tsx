import { useRouter } from "next/router";
import AddMailInfo from "../../../components/AddMailInfo";
import Header from "../../../components/Header";
import MailContainer from "../../../containers/MailContainer";

export default function AddNewMail() {
  const router = useRouter()
  const { rfc } = router.query
  
  let clientRfc: string | string[] = ''

  if (rfc) {
    if (typeof rfc === 'string') {
      clientRfc = rfc
    } 
  }


  return(
    <>
      <Header />
      <AddMailInfo rfc={clientRfc}/>
      <MailContainer />
    </>
  )
}