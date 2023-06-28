import Bill from "../components/Bill";

export default function BillContainer() {
  return (
    <div className='flex flex-col items-center justify-center mt-2'>
      <Bill />
      <Bill />
      <Bill />
      <Bill />
    </div>
  )
}