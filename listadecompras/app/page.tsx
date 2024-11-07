import ItemList from "./components/ItemList";
import { Item } from "./lib/definitions";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/get-items');
  const jsonData = await res.json();
  const items: Item[] = jsonData.ok ? jsonData.data : [];

  return (
    <div className='min-w-fit w-96 min-h-96 border border-solid border-black p-2 flex flex-col justify-start items-start rounded'>
      <ItemList items={items} />
    </div>
  );
}
