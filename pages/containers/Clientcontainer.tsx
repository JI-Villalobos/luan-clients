import { ClientProps } from "../../types";
import ClientCard from "../components/ClientCard";

interface Props{
    clients: ClientProps[] 
}

export default function ClientContainer({ clients }: Props){
    return (
        <div className='flex flex-col items-center justify-center mt-2'>
            {clients.map(client => <ClientCard key={`client-${client.ID}`} client={client}/>)}
        </div>
    )
}