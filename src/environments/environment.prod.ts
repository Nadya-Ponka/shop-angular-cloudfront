import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://msp12wf5x1.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://wmijy2wwv7.execute-api.eu-west-1.amazonaws.com/dev/import',
    bff: 'https://msp12wf5x1.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'http://nadya-ponka-cart-api-dev.eu-west-1.elasticbeanstalk.com/api',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
};
