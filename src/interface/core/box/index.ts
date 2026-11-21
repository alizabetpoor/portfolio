import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  as?: ElementType;
}
