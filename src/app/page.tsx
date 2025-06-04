import TypingIntro from "@/components/TypingIntro";
import ScrollProgress from "@/components/ScrollProgress"; 
import LiveClock from "@/components/LiveClock";
import BitcoinChart from "@/components/BitcoinChart";


export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-900 dark:bg-black dark:text-white">
      <ScrollProgress />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Typing intro */}
        <section className="text-center">
        </section>

        {/* Header */}
        <section className="space-y-2">
          <a href="https://webdevcrow.com" className="underline text-orange-500 dark:text-orange-400">
            Home
          </a>
          <h1 className="text-4xl font-bold">{'Premium Tier - Dynamic Website'}</h1>
          <TypingIntro />
          <LiveClock />
        </section>
        
        {/* Body */}
        <section>
        <BitcoinChart />
        </section>

      </div>
    </main>
  );
}
