/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Hook a hook is a web hook when one repository changed
 */
export type Hook = {
    active?: boolean;
    authorization_header?: string;
    branch_filter?: string;
    config?: Record<string, string>;
    created_at?: string;
    events?: Array<string>;
    id?: number;
    type?: string;
    updated_at?: string;
};

