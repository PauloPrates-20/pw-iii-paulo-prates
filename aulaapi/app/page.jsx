import Image from "next/image";

export default async function Home() {
  const apiResponse = await fetch('http://localhost:3000/api');
  const apiData = await apiResponse.json();

  return (
    <div className='flex flex-row flex-nowrap gap-0.5 w-full'>
      {apiData ? (
        <ul className='w-2/4'>
          {apiData.map(item => (
            <li key={item.id} className='flex flex-row flex-nowrap w-1/2 justify-between'>
              <span>{item.info.nome.portugues}</span>
              <span>{item.info.valor} PO</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Reservado para a resposta da API</p>
      )}
    </div>
  );
}
