/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitignoreTemplateInfo } from '../models/GitignoreTemplateInfo';
import type { LabelTemplate } from '../models/LabelTemplate';
import type { LicensesTemplateListEntry } from '../models/LicensesTemplateListEntry';
import type { LicenseTemplateInfo } from '../models/LicenseTemplateInfo';
import type { MarkdownOption } from '../models/MarkdownOption';
import type { MarkupOption } from '../models/MarkupOption';
import type { NodeInfo } from '../models/NodeInfo';
import type { ServerVersion } from '../models/ServerVersion';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MiscellaneousService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of all gitignore templates
     * @returns string GitignoreTemplateList
     * @throws ApiError
     */
    public listGitignoresTemplates(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/gitignore/templates',
        });
    }
    /**
     * Returns information about a gitignore template
     * @returns GitignoreTemplateInfo GitignoreTemplateInfo
     * @throws ApiError
     */
    public getGitignoreTemplateInfo({
        name,
    }: {
        /**
         * name of the template
         */
        name: string,
    }): CancelablePromise<GitignoreTemplateInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/gitignore/templates/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Returns a list of all label templates
     * @returns string LabelTemplateList
     * @throws ApiError
     */
    public listLabelTemplates(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/label/templates',
        });
    }
    /**
     * Returns all labels in a template
     * @returns LabelTemplate LabelTemplateInfo
     * @throws ApiError
     */
    public getLabelTemplateInfo({
        name,
    }: {
        /**
         * name of the template
         */
        name: string,
    }): CancelablePromise<Array<LabelTemplate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/label/templates/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Returns a list of all license templates
     * @returns LicensesTemplateListEntry LicenseTemplateList
     * @throws ApiError
     */
    public listLicenseTemplates(): CancelablePromise<Array<LicensesTemplateListEntry>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/licenses',
        });
    }
    /**
     * Returns information about a license template
     * @returns LicenseTemplateInfo LicenseTemplateInfo
     * @throws ApiError
     */
    public getLicenseTemplateInfo({
        name,
    }: {
        /**
         * name of the license
         */
        name: string,
    }): CancelablePromise<LicenseTemplateInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/licenses/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Render a markdown document as HTML
     * @returns string MarkdownRender is a rendered markdown document
     * @throws ApiError
     */
    public renderMarkdown({
        body,
    }: {
        body?: MarkdownOption,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/markdown',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Render raw markdown as HTML
     * @returns string MarkdownRender is a rendered markdown document
     * @throws ApiError
     */
    public renderMarkdownRaw({
        body,
    }: {
        /**
         * Request body to render
         */
        body: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/markdown/raw',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Render a markup document as HTML
     * @returns string MarkupRender is a rendered markup document
     * @throws ApiError
     */
    public renderMarkup({
        body,
    }: {
        body?: MarkupOption,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/markup',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Returns the nodeinfo of the Gitea application
     * @returns NodeInfo NodeInfo
     * @throws ApiError
     */
    public getNodeInfo(): CancelablePromise<NodeInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nodeinfo',
        });
    }
    /**
     * Get default signing-key.gpg
     * @returns string GPG armored public key
     * @throws ApiError
     */
    public getSigningKey(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/signing-key.gpg',
        });
    }
    /**
     * Returns the version of the Gitea application
     * @returns ServerVersion ServerVersion
     * @throws ApiError
     */
    public getVersion(): CancelablePromise<ServerVersion> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/version',
        });
    }
}
