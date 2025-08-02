"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`ml-2 rounded ${copied ?"hover:":"hover:bg-gray-200"}`}
      title="Copy to clipboard"
      type="button"
    >
      {copied ? <span className="text-xs p-1">✅</span> : <Copy size={24} className="text-gray-500 p-1" />}
    </button>
  );
}
