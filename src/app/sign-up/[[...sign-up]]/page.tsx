import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-4 py-12 text-white">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
        <SignUp />
      </div>
    </main>
  );
}
