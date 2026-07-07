import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StyleScore from "@/components/dashboard/StyleScore";
import TodaysOutfit from "@/components/dashboard/TodaysOutfit";

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

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <TodaysOutfit />
            <StyleScore />
          </section>
        </main>
      </div>
    </div>
  );
}