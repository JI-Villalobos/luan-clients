import AddMailInfo from "./components/AddMailInfo";
import Header from "./components/Header";
import MailContainer from "./containers/MailContainer";

export default function AddNewMail() {
  return(
    <>
      <Header />
      <AddMailInfo />
      <MailContainer />
    </>
  )
}