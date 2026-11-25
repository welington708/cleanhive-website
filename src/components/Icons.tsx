type IconProps = { className?: string };

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" /></svg>;
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="m12 2.2 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.22l-5.88 3.09 1.12-6.55-4.76-4.64 6.58-.96L12 2.2Z" /></svg>;
}
