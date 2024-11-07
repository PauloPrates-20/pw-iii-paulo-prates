'use client';

export default function ActionButton({ children, handler }: { children: React.ReactNode, handler: () => void }) {
    return (
        <button onClick={handler}>{children}</button>
    );
}