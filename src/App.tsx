
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const GamingPass = lazy(() => import("./pages/GamingPass"));
const Tarify = lazy(() => import("./pages/Tarify"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Activation = lazy(() => import("./pages/Activation"));
const Support = lazy(() => import("./pages/Support"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
    <div className="text-xbox-green text-xl">Загрузка...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gaming-pass" element={<GamingPass />} />
            <Route path="/tarify" element={<Tarify />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/activation" element={<Activation />} />
            <Route path="/support" element={<Support />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;