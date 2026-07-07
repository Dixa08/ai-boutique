import {
  BarChart3,
  Heart,
  LogOut,
  MessageCircle,
  Package,
  Settings,
  Shirt,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Sparkles, active: true },
  { label: "AI Stylist", icon: Shirt, active: false },
  { label: "Wardrobe", icon: Package, active: false },
  { label: "Shopping", icon: ShoppingBag, active: false },
  { label: "Wishlist", icon: Heart, active: false },
  { label: "AI Chat", icon: MessageCircle, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-full flex-col border-r border-white/10 bg-[#04070b]/90 backdrop-blur-xl md:w-[280px]">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">AI Boutique</p>
          <p className="text-sm text-zinc-400">Personal AI Stylist</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5">
        <div className="space-y-2">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                active
                  ? "bg-purple-500/15 text-white shadow-[0_0_25px_rgba(168,85,247,0.12)]"
                  : "text-zinc-400 hover:bg-white/8 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-white/5 text-zinc-400 group-hover:bg-purple-500/10 group-hover:text-purple-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </span>
              {active && <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />}
            </button>
          ))}
        </div>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 text-sm font-semibold text-white">
              D
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Dixa</p>
              <p className="text-xs text-zinc-400">Premium Member</p>
            </div>
          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-400/20 bg-purple-500/10 px-4 py-2.5 text-sm font-medium text-purple-200 transition-all duration-300 hover:bg-purple-500/20 hover:text-white">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
