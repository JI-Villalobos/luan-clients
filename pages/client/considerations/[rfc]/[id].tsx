import { useRouter } from "next/router";
import AddConsideration from "../../../components/AddConsideration";
import AddConsiderationsInfo from "../../../components/AddConsiderationsInfo";
import BackHome from "../../../components/BackHome";
import Header from "../../../components/Header";

export default function AddConsiderations() {
  const router = useRouter()
  const { rfc, id } = router.query

  let clientRf = ''

  if (rfc) {
    if (typeof rfc === 'string') {
      clientRf = rfc
    }
  }

  return (
    <>
      <Header />
      <BackHome />
      <AddConsiderationsInfo rfc={clientRf}/>
      <AddConsideration />
      <AddConsideration />
      <AddConsideration />
      <AddConsideration />
      <AddConsideration />
    </>
  )
}