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
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read tool information',
    'Create rental request',
    'Read rental request status',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage tools', 'Manage rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/58aff25e-5903-48ac-9308-573c1af9b7d9',
};
