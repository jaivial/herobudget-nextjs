/**
 * FooterTypes
 * Definiciones de tipos e interfaces para el componente Footer
 */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}