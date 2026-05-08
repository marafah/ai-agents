import 'lucide-react';
import type { CSSProperties } from 'react';

declare module 'lucide-react' {
  interface LucideProps {
    style?: CSSProperties;
  }
}
