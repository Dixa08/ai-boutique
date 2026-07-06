import { ScanFace, Sparkles, Upload, UserRound } from "lucide-react";

const steps = [
  {
    title: "Upload Photos",
    description:
      "Upload your full-body photo, face photo, and optionally your wardrobe to give the AI a complete view of your style foundation.",
    icon: Upload,
    number: "01",
  },
  {
    title: "AI Analysis",
    description:
      "The AI evaluates your body shape, skin tone, face shape, measurements, and fashion preferences for precise styling insights.",
    icon: ScanFace,
    number: "02",
  },
  {
    title: "Personal Style Profile",
    description:
      "A lasting AI fashion profile is created so every recommendation feels tailored to your unique taste and silhouette.",
    icon: UserRound,
    number: "03",
  },
  {
    title: "Smart Recommendations",
    description:
      "Receive polished outfit suggestions, shopping picks, and wardrobe combinations that fit your lifestyle and budget.",
    icon: Sparkles,
    number: "04",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium tracking-[0.2em] text-purple-300 uppercase">
            How it works
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            How AI Boutique Works
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400 sm:text-xl">
            Our AI understands your style in four simple steps.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/70 to-transparent md:block" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col md:flex-row md:items-center"
                >
                  <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12 md:justify-end"}`}>
                    <div
                      className={`group rounded-[1.75rem] border border-white/10 bg-white/8 px-7 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.2),0_0_40px_rgba(168,85,247,0.18)] ${
                        isEven ? "md:mr-auto md:max-w-[32rem]" : "md:ml-auto md:max-w-[32rem]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/25 bg-purple-500/10 text-purple-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-200">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="text-sm font-semibold tracking-[0.25em] text-zinc-500">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 my-4 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/40 bg-[#05070d] shadow-[0_0_30px_rgba(168,85,247,0.15)] md:mx-6 md:my-0">
                    <div className="h-3 w-3 rounded-full bg-purple-400" />
                  </div>

                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
