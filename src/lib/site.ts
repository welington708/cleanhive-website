export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const siteConfig = {
  name: "CleanHive Company",
  shortName: "CleanHive",
  description:
    "Reliable home and business cleaning across Central Florida.",
  testPhoneDisplay: "+1 (863) 317-0165",
  testPhoneHref: "+18633170165",
  productionPhoneDisplay: "+1 (407) 867-8938",
  email: "cleanhivecompany@gmail.com",
  address: "448 Lake Bridge Ln, Apopka, FL 32704",
  googleReviewsUrl:
    "https://maps.app.goo.gl/ijo68mjykgi7bRCG6",
} as const;

export const googleReviews = [
  {
    name: "Ellen Brito",
    date: "October 7, 2025",
    text: "I absolutely love their cleaning service! They're super friendly, always on time, and pay attention to every little detail. My house always feels fresh and spotless after they come.",
  },
  {
    name: "Wederson Almeida",
    date: "October 6, 2025",
    text: "Fantastic company, committed and completely professional. I highly recommend them and have already established a loyal customer relationship.",
  },
  {
    name: "Juliane Molina",
    date: "September 30, 2025",
    text: "The crew is wonderful! Very detailed and well executed work. My house smells amazing.",
  },
] as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    short: "Reliable routine cleaning that keeps your home fresh, comfortable, and ready for everyday life.",
    description:
      "Keep your home fresh and comfortable with reliable routine cleaning. We dust, vacuum, mop, and wipe down surfaces so your space stays ready for everyday life.",
    image: assetPath("/images/services/residential.jpg"),
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    short: "A detailed top-to-bottom clean for buildup, missed spots, and spaces that need a fresh start.",
    description:
      "Need a full reset? We tackle buildup and commonly missed areas with detailed dusting, scrubbing, and disinfecting to leave your home feeling fresh again.",
    image: assetPath("/images/services/deep-cleaning.png"),
  },
  {
    slug: "move-in-cleaning",
    title: "Move-In Cleaning",
    short: "Move into a home that feels fresh, welcoming, and ready for you.",
    description:
      "Start fresh in your new home. We clean floors, surfaces, appliances, cabinets, and other often-overlooked areas before you settle in.",
    image: assetPath("/images/services/move-in.png"),
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning",
    short: "Leave your old place clean and ready for the next resident or final walkthrough.",
    description:
      "Leave your old place clean and ready for the next resident, final walkthrough, or handoff. We take care of floors, windows, appliances, and more.",
    image: assetPath("/images/services/move-out.webp"),
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    short: "Flexible cleaning for offices, shared spaces, and other commercial properties.",
    description:
      "Keep your workplace clean and welcoming. We clean and sanitize offices, restrooms, floors, common areas, and other high-use spaces.",
    image: assetPath("/images/services/commercial.webp"),
  },
  {
    slug: "apartment-turnover",
    title: "Apartment Turnover",
    short: "Get your rental clean, refreshed, and ready for the next tenant.",
    description:
      "Get your rental ready for the next tenant. We deep clean kitchens, bathrooms, floors, and living areas for a smooth, stress-free turnover.",
    image: assetPath("/images/services/turnover.webp"),
  },
] as const;

export const serviceAreas = [
  { city: "Orlando", county: "Orange County" },
  { city: "Apopka", county: "Orange County" },
  { city: "Sanford", county: "Seminole County" },
  { city: "Windermere", county: "Orange County" },
  { city: "Winter Park", county: "Orange County" },
  { city: "Altamonte Springs", county: "Seminole County" },
  { city: "Deltona", county: "Volusia County" },
  { city: "Daytona Beach", county: "Volusia County" },
  { city: "Ormond Beach", county: "Volusia County" },
  { city: "Flagler Beach", county: "Flagler County" },
  { city: "Palm Coast", county: "Flagler County" },
] as const;
