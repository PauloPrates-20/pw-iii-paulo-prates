import ItemList from "./components/ItemList";
import { Item } from "./lib/definitions";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/get-items');
  const jsonData = await res.json();
  const items: Item[] = jsonData.ok ? jsonData.data : [];

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}
