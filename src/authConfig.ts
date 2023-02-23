import {LogLevel, PublicClientApplication} from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: '45a4bbcd-939e-4823-854e-092b13b25be6',
        authority: 'https://3sb2cdev.b2clogin.com/3sb2cdev.onmicrosoft.com/B2C_1_signupsignin',
        redirectUri: 'http://localhost:8080/auth', // Must be registered as a SPA redirectURI on your app registration
        knownAuthorities: ['3sb2cdev.b2clogin.com'],
        postLogoutRedirectUri: 'http://localhost:8080/logout', // Must be registered as a SPA redirectURI on your app registration
    },
    cache: {
        cacheLocation: 'localStorage'
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
            logLevel: LogLevel.Verbose
        }
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ['openid', 'profile', 'offline_access', 'https://3sb2cdev.onmicrosoft.com/api/read'],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
