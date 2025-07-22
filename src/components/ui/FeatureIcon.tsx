import React from 'react';
import { 
  Search, 
  FileText, 
  BarChart2, 
  Download, 
  AlertTriangle, 
  RefreshCw,
  CheckCircle2,
  Mail,
  FileSearch,
  Calculator,
  FileSpreadsheet,
  BarChart4,
  Globe,
  History,
  UserPlus,
  Calendar,
  BarChart3,
  LineChart,
  SearchX,
  Check,
  Tag,
  CheckCircle
} from 'lucide-react';

interface FeatureIconProps {
  iconName: string;
  className?: string;
}

const iconMap = {
  Search,
  FileText,
  BarChart2,
  Download,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
  Mail,
  FileSearch,
  Calculator,
  FileSpreadsheet,
  BarChart4,
  Globe,
  History,
  UserPlus,
  Calendar,
  BarChart3,
  LineChart,
  SearchX,
  Check,
  Tag,
  CheckCircle
};

export const FeatureIcon: React.FC<FeatureIconProps> = ({ iconName, className = "h-8 w-8" }) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} />;
};
