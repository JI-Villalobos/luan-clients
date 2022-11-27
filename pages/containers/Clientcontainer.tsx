import ClientCard from "../components/ClientCard";

export default function ClientContainer(){
    return (
        <div className='flex flex-col items-center justify-center mt-2'>
            <ClientCard />
            <ClientCard />
            <ClientCard />
        </div>
    )
}