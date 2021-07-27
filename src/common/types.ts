import { AxiosResponse } from "axios";

export interface CommonConfig {
    prefixText?: string | boolean,
    dateFormat?: string | boolean,
    headers?: boolean,
    logger?: (text: string) => any,
}

export interface GlobalLogConfig extends CommonConfig {
    data?: boolean,
    method?: boolean,
    url?: boolean,
    status?: boolean,
    statusText?: boolean,
    dataMapper?: (data: object) => string
    customResponseMapper?: (response: AxiosResponse) => string
}

export interface RequestLogConfig extends CommonConfig {
    data?: boolean,
    method?: boolean,
    url?: boolean,
}

export interface ResponseLogConfig extends CommonConfig {
    data?: boolean,
    status?: boolean,
    statusText?: boolean,
}

export interface ErrorLogConfig extends CommonConfig {
    data?: boolean,
}
