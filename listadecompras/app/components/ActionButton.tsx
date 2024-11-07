'use client';

export default function ActionButton({ 
    children,
    color,
    handler, 
}: 
{ 
    children: React.ReactNode,
    color?: string,
    handler: () => void, 

}) {
    return (
        <button 
            onClick={handler}
            className='px-2 py-1 border border-solid border-black rounded'
            style={{ color: 'white', backgroundColor: color ?? 'green'}}
        >
            {children}
        </button>
    );
}