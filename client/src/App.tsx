import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// new single page layout
import Header from "@/components/Header";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Portfolio from "@/sections/Portfolio";
import Contact from "@/sections/Contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100">
          <Header />

          <main className="pt-20">
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
