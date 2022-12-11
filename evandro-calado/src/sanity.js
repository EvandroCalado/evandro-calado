import { createClient } from 'next-sanity';

const client = createClient({
    projectId: 'q6b42ka4',
    dataset: 'production',
    apiVersion: '2022-12-11',
    useCdn: false,
    token: 'skbsnqlaMnpFkgIh85TOgd4U74WlCuk0GIrs7YaP7ryon753K2dmpVzTsTZC5o7VZSI3ylYPfxFz6jF8wXxkpp2nnXXZznmrui2GhTPnUHNFUPoZAlpXRnTSZfw4Dzjaz05f7FN1cpvGNkZd7vv1kK1VHdFb1UIiSNJwzJTlw9twMvT0MwRi',
    ignoreBrowserTokenWarning: true
});

export default client;