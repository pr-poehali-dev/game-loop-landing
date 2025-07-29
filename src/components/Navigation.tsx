import { useState } from 'react';  
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-xbox-black/90 backdrop-blur-sm border-b border-xbox-green/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Icon name="Gamepad2" className="text-xbox-green" size={32} />
              <span className="text-2xl font-heading font-bold text-glow">Game Loop</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="/tarify" className="hover:text-xbox-green transition-colors">Тарифы</a>
              <a href="/activation" className="hover:text-xbox-green transition-colors">Активация</a>
              <a href="/reviews" className="hover:text-xbox-green transition-colors">Отзывы</a>
              <a href="/faq" className="hover:text-xbox-green transition-colors">FAQ</a>
              <a href="/support" className="hover:text-xbox-green transition-colors">Поддержка</a>
            </div>
            
            {/* Contact Icons */}
            <TooltipProvider>
              <div className="flex items-center space-x-3">
                {/* WhatsApp */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://wa.me/79504077138" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-green-500/25"
                    >
                      <Icon name="MessageCircle" className="text-white" size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Написать в WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
                
                {/* Telegram */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://t.me/submanag" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                    >
                      <Icon name="Send" className="text-white" size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Открыть Telegram</p>
                  </TooltipContent>
                </Tooltip>
                
                {/* Avito */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://www.avito.ru/brands/gameloop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-xbox-green hover:bg-xbox-green/80 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xbox-green/25"
                    >
                      <Icon name="ShoppingBag" className="text-xbox-black" size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Наш магазин на Авито</p>
                  </TooltipContent>
                </Tooltip>
                
                {/* Mobile Menu Button */}
                <div className="lg:hidden ml-4">
                  <button 
                    onClick={toggleMobileMenu}
                    className="p-2 text-xbox-white hover:text-xbox-green transition-colors"
                  >
                    <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
                  </button>
                </div>
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-[88px] left-0 right-0 bg-xbox-black border-b border-xbox-green/20 z-50 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 py-6 space-y-4">
            <a 
              href="/tarify" 
              onClick={handleMenuItemClick}
              className="block py-3 text-lg hover:text-xbox-green transition-colors border-b border-xbox-gray/20"
            >
              Тарифы
            </a>
            <a 
              href="/activation" 
              onClick={handleMenuItemClick}
              className="block py-3 text-lg hover:text-xbox-green transition-colors border-b border-xbox-gray/20"
            >
              Активация
            </a>
            <a 
              href="/reviews" 
              onClick={handleMenuItemClick}
              className="block py-3 text-lg hover:text-xbox-green transition-colors border-b border-xbox-gray/20"
            >
              Отзывы
            </a>
            <a 
              href="/faq" 
              onClick={handleMenuItemClick}
              className="block py-3 text-lg hover:text-xbox-green transition-colors border-b border-xbox-gray/20"
            >
              FAQ
            </a>
            <a 
              href="/support" 
              onClick={handleMenuItemClick}
              className="block py-3 text-lg hover:text-xbox-green transition-colors"
            >
              Поддержка
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-xbox-black/95 backdrop-blur-sm border-t border-xbox-green/20 p-4">
        <TooltipProvider>
          <div className="flex justify-center space-x-8">
            {/* WhatsApp Mobile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://wa.me/79504077138" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
            
            {/* Telegram Mobile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://t.me/submanag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  <Icon name="Send" className="text-white" size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Telegram</p>
              </TooltipContent>
            </Tooltip>
            
            {/* Avito Mobile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://www.avito.ru/brands/gameloop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-xbox-green hover:bg-xbox-green/80 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  <Icon name="ShoppingBag" className="text-xbox-black" size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Авито</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </>
  );
}