import Image from "next/image";
import { LinkIcon, ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      {/* Header */}
      <header className="py-4 md:py-8 px-4 md:px-8 flex justify-center items-center">
        <Image
          src="/contentility.png"
          alt="ContentilityAI Logo"
          width={120}
          height={120}
          className="md:w-[150px] md:h-[150px]"
          priority
        />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 max-w-4xl tracking-tight text-white leading-tight lowercase">
          making content versatile
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-16 max-w-2xl">
          ContentilityAI is an affordable, repurposing content app that transforms your existing content into multiple formats with just a few clicks.
        </p>
        
        {/* Mockup Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 overflow-x-auto pb-4 md:pb-0">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/mockup.png"
              alt="ContentilityAI Mockup 1"
              width={500}
              height={700}
              className="rounded-lg h-[500px] md:h-[600px] object-contain"
            />
            <ArrowDownIcon className="w-24 h-24 text-white/60 rotate-0 md:hidden animate-bounce" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/mockup (1).png"
              alt="ContentilityAI Mockup 2"
              width={500}
              height={700}
              className="rounded-lg h-[500px] md:h-[600px] object-contain"
            />
            <ArrowDownIcon className="w-24 h-24 text-white/60 rotate-0 md:hidden animate-bounce" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/mockup (2).png"
              alt="ContentilityAI Mockup 3"
              width={500}
              height={700}
              className="rounded-lg h-[500px] md:h-[600px] object-contain"
            />
            <ArrowDownIcon className="w-24 h-24 text-white/60 rotate-0 md:hidden animate-bounce" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/mockup (3).png"
              alt="ContentilityAI Mockup 4"
              width={500}
              height={700}
              className="rounded-lg h-[500px] md:h-[600px] object-contain"
            />
          </div>
        </div>

        <ArrowDownIcon className="w-8 h-8 text-white/60 mb-8 animate-bounce" />

        <a 
          href="https://testflight.apple.com/join/76W695bQ"
          target="_blank"
          rel="noopener noreferrer" 
          className="btn-primary no-underline text-center mb-8 md:mb-16 text-sm md:text-base"
        >
          Try the Beta Now
        </a>

        <div className="flex gap-6 md:gap-8 mb-8 md:mb-16">
          <a 
            href="https://instagram.com/contentility"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg 
              className="w-6 h-6 md:w-8 md:h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.077-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a 
            href="https://tiktok.com/@contentility"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg 
              className="w-6 h-6 md:w-8 md:h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a 
            href="https://linktr.ee/contentility"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <LinkIcon className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 md:py-6 px-4 md:px-8 text-center text-white/60 border-t border-white/10 text-sm md:text-base">
        <p>© {new Date().getFullYear()} ContentilityAI. All rights reserved.</p>
      </footer>
    </div>
  );
}
