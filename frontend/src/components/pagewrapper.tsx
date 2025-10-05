
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" relative min-h-screen bg-cover bg-center flex items-center justify-center "
      style={{
        backgroundImage: "url('images/pexels-fauxels-3184418.jpg')",
      }}
    >
        <div className="absolute inset-0 bg-black/50 z-0" />
      {children}
    </div>
  );
}
