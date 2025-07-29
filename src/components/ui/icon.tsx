import React, { memo } from 'react';
import { 
  CircleAlert,
  Gamepad2,
  Send,
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
  Star,
  Shield,
  Users,
  Zap,
  Headphones,
  DollarSign,
  Home
} from 'lucide-react';
import { LucideProps } from 'lucide-react';

// Объект с импортированными иконками для лучшего tree-shaking
const iconMap = {
  CircleAlert,
  Gamepad2,
  Send,
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
  Star,
  Shield,
  Users,
  Zap,
  Headphones,
  DollarSign,
  Home
} as const;

interface IconProps extends LucideProps {
  name: keyof typeof iconMap;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = memo(({ name, fallback = 'CircleAlert', ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    const FallbackIcon = iconMap[fallback];
    if (!FallbackIcon) {
      return <span className="text-xs text-gray-400">[icon]</span>;
    }
    return <FallbackIcon {...props} />;
  }

  return <IconComponent {...props} />;
});

export default Icon;