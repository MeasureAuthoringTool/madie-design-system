export enum AlertBannerType {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
    Success = 'success'
}

export interface AlertBanner {
    title?: string;
    type: AlertBannerType;
}
