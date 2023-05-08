// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  dev: true,
  local: false,
  production: false,
  staging: false,
  test: false,

  awsRegion: 'us-west-2',
  cognitoUserPoolId: 'us-west-2_Nlo0ZRKVg',
  cognitoAppClientId: '13ckhu5bs3fgb7fheea3rgjnkd',
  cognitoAppClientSecret: 'mrcgjgs6vv6nr1ae8tbosqcto4vcm8uct5sosfe4fo1pmv7q801',

  apiAccountsEndpoint:
    'https://nyivsn7p32.execute-api.us-west-2.amazonaws.com/dev/accounts',
  apiUsersEndpoint:
    'https://wbq5s995lc.execute-api.us-west-2.amazonaws.com/dev/users'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
