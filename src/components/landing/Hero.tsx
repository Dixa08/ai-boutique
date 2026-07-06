import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-5xl px-6">

        <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300">
          ✨ AI Powered Fashion Platform
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight">
          Your Personal
          <br />
          <span className="text-purple-400">AI Fashion Stylist</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Discover outfits tailored to your body shape, skin tone,
          wardrobe, budget, and lifestyle with the power of AI.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button text="Get Started" />

            <Button text="Explore" variant="secondary"/>
        </div>

      </div>
    </section>
  );
}