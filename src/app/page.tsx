import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      {/* Header */}
      <header className="py-8 px-4 md:px-8 flex justify-center items-center">
        <Image
          src="/contentility.png"
          alt="ContentilityAI Logo"
          width={150}
          height={150}
          priority
        />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 max-w-4xl tracking-tight text-white leading-tight lowercase">
          making content versatile
        </h1>
        <a 
          href="https://forms.gle/UoYyK8fCmhpqJ1LN6"
          target="_blank"
          rel="noopener noreferrer" 
          className="btn-primary no-underline text-center"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 text-center text-white/60 border-t border-white/10">
        <p>© {new Date().getFullYear()} ContentilityAI. All rights reserved.</p>
      </footer>
    </div>
  );
}
