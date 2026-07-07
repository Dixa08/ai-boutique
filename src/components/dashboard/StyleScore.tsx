import { Sparkles } from "lucide-react";

const metrics = [
  { label: "Fashion Compatibility", value: 95, note: "Excellent" },
  { label: "Weather Match", value: 95 },
  { label: "Color Harmony", value: 90 },
  { label: "Occasion Match", value: 97 },
];

export default function StyleScore() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),_transparent_35%)]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300/80">
              AI Style Score
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">Your style profile</h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-200">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[conic-gradient(#a855f7_0_92%,rgba(255,255,255,0.08)_92%_100%)] p-3 shadow-[0_0_35px_rgba(168,85,247,0.25)]">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#060814] text-center">
              <span className="text-4xl font-semibold text-white">92%</span>
              <span className="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Match
              </span>
            </div>
          </div>

          <div className="w-full max-w-md space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-300">Fashion Compatibility</span>
                <span className="font-semibold text-white">Excellent</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500 transition-all duration-700" />
              </div>
            </div>

            {metrics.slice(1).map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>{metric.label}</span>
                  <span className="font-semibold text-white">{metric.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500 transition-all duration-700"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-sm text-zinc-400">
          Updated 2 minutes ago
        </div>
      </div>
    </section>
  );
}
