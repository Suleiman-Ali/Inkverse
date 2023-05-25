import { ReactNode } from 'react';

interface WrapperElementProps {
  children: ReactNode;
  className: string;
}
export default function WrapperElement({
  children,
  className,
}: WrapperElementProps) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
