import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_34%),linear-gradient(135deg,_#030712_0%,_#050816_100%)] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Topbar />

          <section className="mt-6">
            <WelcomeCard />
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Today&apos;s style pulse</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Your AI stylist is preparing a polished, weather-aware outfit plan.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Wardrobe score</h3>
              <p className="mt-2 text-sm text-zinc-400">
                92% aligned with your current aesthetic and calendar.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}