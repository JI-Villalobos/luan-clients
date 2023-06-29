import { BillAsset } from "../../types";
import Bill from "../components/Bill";

type Props = {
  bills: BillAsset[]
}

export default function BillContainer({ bills }: Props) {
  return (
    <div className='flex flex-col items-center justify-center mt-2'>
     {bills?.map(bill => <Bill key={`id-bill-${bill.id}`} bill={bill}/>)}
    </div>
  )
}