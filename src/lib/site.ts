export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const siteConfig = {
  name: "CleanHive Company",
  shortName: "CleanHive",
  description:
    "Residential and commercial cleaning services for homes and businesses across Central Florida.",
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
    short: "Routine care that keeps your home comfortable, tidy, and ready for everyday life.",
    description:
      "Regular cleaning offers consistent maintenance of your home. This service includes dusting, vacuuming, mopping, and wiping surfaces, ensuring your space remains clean and comfortable throughout the week.",
    image: assetPath("/images/services/residential.jpg"),
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    short: "Detailed attention for buildup, overlooked areas, and spaces that need a fresh reset.",
    description:
      "A deep cleaning service provides a thorough cleaning of every corner of your space, targeting areas often missed in regular cleanings. It includes dusting, scrubbing, and disinfecting, leaving your home spotless.",
    image: assetPath("/images/services/deep-cleaning.png"),
  },
  {
    slug: "move-in-cleaning",
    title: "Move-In Cleaning",
    short: "Start in a space that feels clean, welcoming, and ready for your belongings.",
    description:
      "Move-in cleaning ensures your new home is clean and ready for you. It involves cleaning all surfaces, floors, and hidden areas, including appliances and cabinets, to give you a fresh start in your new place.",
    image: assetPath("/images/services/move-in.png"),
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning",
    short: "Leave the property refreshed for its next resident, walkthrough, or handoff.",
    description:
      "Move-out cleaning focuses on leaving your old home in pristine condition for the next residents. This service includes cleaning the entire house, including floors, windows, and appliances, ensuring everything is spotless.",
    image: assetPath("/images/services/move-out.webp"),
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    short: "Flexible cleaning support for offices, shared areas, and commercial environments.",
    description:
      "Commercial cleaning caters to offices and business spaces. It includes cleaning and sanitizing workspaces, bathrooms, floors, and common areas to create a hygienic environment for employees and visitors.",
    image: assetPath("/images/services/commercial.webp"),
  },
  {
    slug: "apartment-turnover",
    title: "Apartment Turnover",
    short: "Prepare rental units for the next tenant with a focused, efficient reset.",
    description:
      "Apartment turnover cleaning prepares rental properties for new tenants. It includes deep cleaning of every room, sanitizing bathrooms, kitchens, and floors, ensuring the apartment is spotless and move-in ready.",
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
