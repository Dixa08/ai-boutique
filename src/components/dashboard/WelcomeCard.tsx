import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const highlights = [
  "12 New Outfit Ideas",
  "Weather Optimized",
  "Budget Friendly",
];

export default function WelcomeCard() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.24),_transparent_40%)]" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-200">
          <Sparkles className="h-4 w-4" />
          Good Evening, Dixa 👋
        </div>

        <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          Your AI Stylist is Ready
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          Your personalized fashion assistant has analyzed your wardrobe, weather,
          and preferences to prepare today&apos;s recommendations.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-zinc-200"
            >
              <CheckCircle2 className="h-4 w-4 text-purple-300" />
              {item}
            </div>
          ))}
        </div>

        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(168,85,247,0.45)]">
          View Recommendations
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
