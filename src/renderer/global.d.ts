declare global {
    interface Window {
        ANALYTICS_DISABLED?: boolean | string;
        LEGACY_AUTHENTICATION?: boolean | string;
        SERVER_LOCK?: boolean | string;
        SERVER_NAME?: string;
        SERVER_TYPE?: string;
        SERVER_URL?: string;
    }
}

export {};
