import { Bell, CloudSun, Heart, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-5">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-purple-300/80">
          AI Fashion Dashboard
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Dashboard
        </h2>
        <p className="mt-1 text-sm text-zinc-400 sm:text-base">
          Welcome back, Dixa 👋
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3 lg:mx-6 lg:max-w-2xl lg:flex-row lg:items-center">
        <label className="group flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-400 shadow-inner shadow-black/20 transition-all duration-300 hover:border-purple-400/30 hover:bg-zinc-900/80 lg:flex-1">
          <Search className="h-4 w-4 text-purple-300" />
          <input
            type="text"
            placeholder="Search outfits, brands, wardrobe..."
            className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </label>
      </div>

      <div className="flex items-center justify-end gap-2 sm:gap-3">
        <div className="flex items-center gap-2 rounded-full border border-purple-400/20 bg-gradient-to-r from-purple-500/15 to-fuchsia-500/10 px-3 py-2 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
          <CloudSun className="h-4 w-4 text-purple-300" />
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Today
            </p>
            <p className="text-sm font-semibold text-white">24°C</p>
          </div>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/15 hover:text-white">
          <Bell className="h-4 w-4" />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/15 hover:text-white">
          <Heart className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-purple-500/30">
            D
          </div>
          <div className="hidden pr-1 sm:block">
            <p className="text-sm font-medium text-white">Dixa</p>
            <p className="text-xs text-zinc-400">Premium</p>
          </div>
        </div>
      </div>
    </header>
  );
}
