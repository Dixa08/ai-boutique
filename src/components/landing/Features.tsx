import { Sparkles, Shirt, ScanFace } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles size={40} className="text-purple-400" />,
      title: "AI Personal Stylist",
      description:
        "Get outfit recommendations based on your body shape, skin tone, wardrobe, and occasion.",
    },
    {
      icon: <Shirt size={40} className="text-purple-400" />,
      title: "Smart Wardrobe",
      description:
        "Digitize your wardrobe and let AI create amazing outfit combinations.",
    },
    {
      icon: <ScanFace size={40} className="text-purple-400" />,
      title: "AI Body Analysis",
      description:
        "Analyze body shape, face shape, skin tone, and discover what truly suits you.",
    },
  ];

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Why Choose AI Boutique?
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          AI Boutique combines computer vision, fashion knowledge, and
          personalized recommendations to become your 24/7 AI stylist.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-800 bg-zinc-900/50 p-8 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}