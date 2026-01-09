// URL Configuration for Frontend App Integration
const FRONTEND_BASE_URL = 'http://localhost';

export const APP_URLS = {
  // Basic Authentication
  LOGIN: `${FRONTEND_BASE_URL}/login`,
  REGISTER: `${FRONTEND_BASE_URL}/register`,

  // Role-based Login URLs
  LOGIN_SHIPPER_COMPANY: `${FRONTEND_BASE_URL}/login?role=shipper-company`,
  LOGIN_LOGISTICS_COMPANY: `${FRONTEND_BASE_URL}/login?role=logistics-company`,
  LOGIN_INDIVIDUAL_SHIPPER: `${FRONTEND_BASE_URL}/login?role=individual-shipper`,
  LOGIN_INDIVIDUAL_DRIVER: `${FRONTEND_BASE_URL}/login?role=individual-driver`,

  // Intent-based URLs
  LOGIN_POST_LOAD: `${FRONTEND_BASE_URL}/login?intent=post-load`,
  LOGIN_FIND_LOADS: `${FRONTEND_BASE_URL}/login?intent=find-loads`,
} as const;

// Platform Statistics
export const STATS = {
  TOTAL_SHIPPERS: '10,000+',
  TOTAL_CARRIERS: '50,000+',
  TRANSACTION_VALUE: '₹50 Crores',
  FULFILLMENT_RATE: '85%',
  UPTIME: '99.9%',
  CITIES_COVERED: '5+',
  EXPANDING_TO: '20',
} as const;

// Feature List
export const FEATURES = [
  {
    title: 'Real-Time Bidding',
    description: 'Competitive marketplace with fair pricing. Average 3-5 bids per load within 2 hours.',
    icon: 'Gavel',
  },
  {
    title: 'GPS Trip Tracking',
    description: 'Live location updates every 30 seconds with <10m accuracy. Real-time ETA calculations.',
    icon: 'MapPin',
  },
  {
    title: 'Secure Payments',
    description: 'Escrow-style payment system via trusted 3rd party payment gateway. 15% platform fee.',
    icon: 'Shield',
  },
  {
    title: 'Multi-Role Platform',
    description: 'Support for 5 distinct user types with role-specific dashboards and workflows.',
    icon: 'Users',
  },
  {
    title: 'Smart Load Matching',
    description: 'Location-based load discovery with 85% fulfillment rate. Proximity-based notifications.',
    icon: 'Target',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time business intelligence with trip metrics, revenue analytics, and performance data.',
    icon: 'BarChart3',
  },
] as const;

// User Types
export const USER_TYPES = [
  {
    title: 'Company Shippers',
    description: 'Large manufacturers, retail chains, and e-commerce businesses posting bulk loads.',
    benefits: [
      'Cost optimization through competitive bidding',
      'Reliable delivery with vetted carriers',
      'Real-time visibility across all shipments',
    ],
    icon: 'Building2',
    cta: APP_URLS.LOGIN_SHIPPER_COMPANY,
  },
  {
    title: 'Logistics Companies',
    description: 'Fleet operators managing 10-500 vehicles with comprehensive trip management.',
    benefits: [
      'Fleet utilization optimization',
      'Consistent revenue stream',
      'Centralized operations management',
    ],
    icon: 'Truck',
    cta: APP_URLS.LOGIN_LOGISTICS_COMPANY,
  },
  {
    title: 'Individual Shippers',
    description: 'Small traders and entrepreneurs with occasional shipping needs.',
    benefits: [
      'Easy load booking process',
      'Competitive and transparent rates',
      'Secure payment handling',
    ],
    icon: 'Package',
    cta: APP_URLS.LOGIN_INDIVIDUAL_SHIPPER,
  },
  {
    title: 'Individual Drivers',
    description: 'Owner-operators with 1-5 vehicles looking for consistent work.',
    benefits: [
      'Consistent income opportunities',
      'Fair and transparent pricing',
      'Flexible scheduling options',
    ],
    icon: 'UserCircle',
    cta: APP_URLS.LOGIN_INDIVIDUAL_DRIVER,
  },
] as const;

// Geographic Coverage
export const CITIES = [
  'Delhi NCR',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Hyderabad',
] as const;

// Trust Indicators
export const TRUST_BADGES = [
  { label: 'Secure Platform', icon: 'ShieldCheck' },
  { label: 'Verified Users', icon: 'Award' },
  { label: '24/7 Support', icon: 'Headphones' },
  { label: 'Data Protected', icon: 'Lock' },
] as const;

// Social Media Links (placeholders)
export const SOCIAL_LINKS = {
  TWITTER: '#',
  LINKEDIN: '#',
  FACEBOOK: '#',
  INSTAGRAM: '#',
} as const;

// Footer Links
export const FOOTER_LINKS = {
  product: [
    { label: 'For Shippers', href: '#user-types' },
    { label: 'For Carriers', href: '#user-types' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ],
} as const;
