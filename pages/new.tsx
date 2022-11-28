import Header from "./components/Header";
import NewClientForm from "./components/NewClientForm";

export default function NewClient() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center mt-20">
                <NewClientForm />
            </div>
        </>
    )
}