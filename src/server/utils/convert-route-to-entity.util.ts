const mapping: Record<string, string> = {
  logistics: 'logistics',
  'maintenance-histories': 'maintenance_history',
  outlets: 'outlet',
  'payment-details': 'payment_details',
  rentals: 'rental',
  suppliers: 'supplier',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
