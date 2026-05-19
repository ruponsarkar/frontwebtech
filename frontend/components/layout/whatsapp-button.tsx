import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919707132913"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="h-4 w-4" />
      WhatsApp
    </Link>
  );
}
