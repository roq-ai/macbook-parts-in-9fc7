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
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Sales Representative', 'Customer Service Representative'],
  tenantName: 'Supplier',
  applicationName: 'macbook parts inventory ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Read supplier information', 'View orders', 'View order items'],
  ownerAbilities: [
    'Manage user information',
    'Manage supplier information',
    'Manage product information',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/bc255946-1f04-4560-b7c0-50fc481272d5',
};
