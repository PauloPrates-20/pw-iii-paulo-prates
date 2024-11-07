'use client';

export default function ActionButton({ text, handler }: { text: string, handler: () => void }) {
    return (
        <button onClick={handler}>{text}</button>
    );
}