import {
  ArrowRight,
  BadgeCheck,
  CircleUserRound,
  Sparkles,
  ScanFace,
  Shirt,
  Sparkle,
  TrendingUp,
} from "lucide-react";

const features = [
  "Body Shape Detection",
  "Skin Tone Analysis",
  "Face Shape Recognition",
  "Wardrobe Understanding",
  "Outfit Recommendation",
  "Shopping Assistant",
];

const colorPills = ["Purple", "Emerald", "White", "Navy"];

export default function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#04060b] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.2),_transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium tracking-[0.2em] text-purple-300 uppercase">
            AI Showcase
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            See Your AI Stylist in Action
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400 sm:text-xl">
            Our AI analyzes your appearance and wardrobe to create personalized fashion recommendations.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 backdrop-blur-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-3.5 font-medium text-white shadow-[0_0_40px_rgba(168,85,247,0.28)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(168,85,247,0.35)]">
            Try AI Analysis
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-purple-500/30 via-fuchsia-500/10 to-transparent blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-900/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
            <div className="rounded-[1.6rem] border border-purple-400/20 bg-[linear-gradient(135deg,rgba(168,85,247,0.16),rgba(255,255,255,0.04))] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">AI Fashion Dashboard</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Style Intelligence</h3>
                </div>
                <div className="rounded-full border border-purple-400/30 bg-purple-500/10 p-2 text-purple-300">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/30 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-200">
                    <CircleUserRound className="h-9 w-9" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold text-white">Analysis Complete</p>
                      <BadgeCheck className="h-4 w-4 text-purple-300" />
                    </div>
                    <p className="text-sm text-zinc-400">Personalized styling profile ready</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-zinc-400">Confidence Score</p>
                    <p className="mt-2 text-3xl font-semibold text-white">98%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-zinc-400">Body Shape</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Rectangle</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <ScanFace className="h-4 w-4 text-purple-300" />
                    Skin Tone
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">Warm Beige</p>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-zinc-400">Best Colors</span>
                      <span className="text-purple-300">Curated palette</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {colorPills.map((color) => (
                        <span
                          key={color}
                          className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-sm text-zinc-200"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-zinc-400">Recommended Style</p>
                      <p className="mt-2 text-lg font-semibold text-white">Smart Casual</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-zinc-400">Accessories</p>
                      <p className="mt-2 text-sm font-medium text-white">Silver Watch</p>
                      <p className="text-sm text-zinc-400">White Sneakers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Confidence Meter</span>
                    <span className="text-purple-300">Excellent fit</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10">
                    <div className="h-2.5 w-[98%] rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 rounded-2xl border border-purple-400/20 bg-zinc-900/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <Shirt className="h-5 w-5 text-purple-300" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <TrendingUp className="h-5 w-5 text-purple-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
