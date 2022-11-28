export default function AddMail() {
  return (
    <div className="flex m-2">
      <div>
        <div className="w-4/5 relative mt-1 rounded-md shadow-sm">
          <input type="text" name="price" id="price" className="block w-full rounded-md border  border-indigo-200 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="mail@gmail.com" />
        </div>
      </div>
      <button className="rounded border border-indigo-400 bg-indigo-600 text-white text-xs">Agregar</button>
    </div>
  )
}