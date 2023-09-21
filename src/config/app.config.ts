interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Business Owner',
    'Store Manager',
    'Store Employee',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View tool details', 'View rental details', 'View outlet details', 'View supplier details'],
  ownerAbilities: [
    'Manage payment details',
    'Manage maintenance history',
    'Manage user information',
    'Manage supplier information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1f28f0c1-9408-4bee-aad6-0c0a9c660a21',
};
