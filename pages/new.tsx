import BackHome from "./components/BackHome";
import Header from "./components/Header";
import NewClientForm from "./components/NewClientForm";

export default function NewClient() {
    return (
        <>
            <Header />
            <BackHome />
            <div className="flex items-center justify-center mt-20">
                <NewClientForm />
            </div>
        </>
    )
}