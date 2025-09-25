
"use client"
import { Copy, CircleCheck } from 'lucide-react';
import { useState } from 'react';

export default function CopyButton({ link }: { link: string }) {
    const [copied, setCopied] = useState(false);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => { setCopied(!copied) },);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`${copied ? "bg-green-400" : "bg-primaryColor"} " flex items-center justify-center gap-2 py-1.5 px-3 rounded-md text-sm text-textColor"`}
        >
            {copied
                ? <> <CircleCheck className="h-5 w-5" /> Copied!</>
                : <> <Copy className="h-5 w-5" /> Copy Link </>
            }

        </button>
    );
}
