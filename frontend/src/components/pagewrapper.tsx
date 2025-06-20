
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" relative min-h-screen bg-cover bg-center flex items-center justify-center pt-24 px-4"
      style={{
        backgroundImage: "url('images/pexels-fauxels-3184418.jpg')",
      }}
    >
        <div className="absolute inset-0 bg-black/50 z-0" />
      <div className=" relative bg-white/90 dark:bg-zinc-800/80 backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
