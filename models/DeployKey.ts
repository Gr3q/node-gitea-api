/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Repository } from './Repository';

/**
 * DeployKey a deploy key
 */
export type DeployKey = {
    created_at?: string;
    fingerprint?: string;
    id?: number;
    key?: string;
    key_id?: number;
    read_only?: boolean;
    repository?: Repository;
    title?: string;
    url?: string;
};

