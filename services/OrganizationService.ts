/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionVariable } from '../models/ActionVariable';
import type { Activity } from '../models/Activity';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateLabelOption } from '../models/CreateLabelOption';
import type { CreateOrgOption } from '../models/CreateOrgOption';
import type { CreateOrUpdateSecretOption } from '../models/CreateOrUpdateSecretOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateTeamOption } from '../models/CreateTeamOption';
import type { CreateVariableOption } from '../models/CreateVariableOption';
import type { EditHookOption } from '../models/EditHookOption';
import type { EditLabelOption } from '../models/EditLabelOption';
import type { EditOrgOption } from '../models/EditOrgOption';
import type { EditTeamOption } from '../models/EditTeamOption';
import type { Hook } from '../models/Hook';
import type { Label } from '../models/Label';
import type { Organization } from '../models/Organization';
import type { OrganizationPermissions } from '../models/OrganizationPermissions';
import type { Repository } from '../models/Repository';
import type { Secret } from '../models/Secret';
import type { Team } from '../models/Team';
import type { UpdateUserAvatarOption } from '../models/UpdateUserAvatarOption';
import type { UpdateVariableOption } from '../models/UpdateVariableOption';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * Create a repository in an organization
     * @returns Repository Repository
     * @throws ApiError
     */
    public createOrgRepoDeprecated({
        org,
        body,
    }: {
        /**
         * name of organization
         */
        org: string,
        body?: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/org/{org}/repos',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get list of organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public orgGetAll({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Organization>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Create an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public orgCreate({
        organization,
    }: {
        organization: CreateOrgOption,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs',
            body: organization,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public orgGet({
        org,
    }: {
        /**
         * name of the organization to get
         */
        org: string,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete an organization
     * @returns void
     * @throws ApiError
     */
    public orgDelete({
        org,
    }: {
        /**
         * organization that is to be deleted
         */
        org: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Edit an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public orgEdit({
        org,
        body,
    }: {
        /**
         * name of the organization to edit
         */
        org: string,
        body: EditOrgOption,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Get an organization's actions runner registration token
     * @returns string RegistrationToken is response related to registration token
     * @throws ApiError
     */
    public orgGetRunnerRegistrationToken({
        org,
    }: {
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/actions/runners/registration-token',
            path: {
                'org': org,
            },
            responseHeader: 'token',
        });
    }
    /**
     * List an organization's actions secrets
     * @returns Secret SecretList
     * @throws ApiError
     */
    public orgListActionsSecrets({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Secret>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/actions/secrets',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create or Update a secret value in an organization
     * @returns any response when creating a secret
     * @throws ApiError
     */
    public updateOrgSecret({
        org,
        secretname,
        body,
    }: {
        /**
         * name of organization
         */
        org: string,
        /**
         * name of the secret
         */
        secretname: string,
        body?: CreateOrUpdateSecretOption,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{org}/actions/secrets/{secretname}',
            path: {
                'org': org,
                'secretname': secretname,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete a secret in an organization
     * @returns void
     * @throws ApiError
     */
    public deleteOrgSecret({
        org,
        secretname,
    }: {
        /**
         * name of organization
         */
        org: string,
        /**
         * name of the secret
         */
        secretname: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/actions/secrets/{secretname}',
            path: {
                'org': org,
                'secretname': secretname,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Get an org-level variables list
     * @returns ActionVariable VariableList
     * @throws ApiError
     */
    public getOrgVariablesList({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<ActionVariable>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/actions/variables',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Get an org-level variable
     * @returns ActionVariable ActionVariable
     * @throws ApiError
     */
    public getOrgVariable({
        org,
        variablename,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Update an org-level variable
     * @returns any response when updating an org-level variable
     * @throws ApiError
     */
    public updateOrgVariable({
        org,
        variablename,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
        body?: UpdateVariableOption,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
                'variablename': variablename,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create an org-level variable
     * @returns any response when creating an org-level variable
     * @throws ApiError
     */
    public createOrgVariable({
        org,
        variablename,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
        body?: CreateVariableOption,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
                'variablename': variablename,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete an org-level variable
     * @returns ActionVariable ActionVariable
     * @returns any response when deleting a variable
     * @throws ApiError
     */
    public deleteOrgVariable({
        org,
        variablename,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable | any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List an organization's activity feeds
     * @returns Activity ActivityFeedsList
     * @throws ApiError
     */
    public orgListActivityFeeds({
        org,
        date,
        page,
        limit,
    }: {
        /**
         * name of the org
         */
        org: string,
        /**
         * the date of the activities to be found
         */
        date?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Activity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/activities/feeds',
            path: {
                'org': org,
            },
            query: {
                'date': date,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Update Avatar
     * @returns void
     * @throws ApiError
     */
    public orgUpdateAvatar({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body?: UpdateUserAvatarOption,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{org}/avatar',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete Avatar
     * @returns void
     * @throws ApiError
     */
    public orgDeleteAvatar({
        org,
    }: {
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/avatar',
            path: {
                'org': org,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List users blocked by the organization
     * @returns User UserList
     * @throws ApiError
     */
    public organizationListBlocks({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/blocks',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Check if a user is blocked by the organization
     * @returns void
     * @throws ApiError
     */
    public organizationCheckUserBlock({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * user to check
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/blocks/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Block a user
     * @returns void
     * @throws ApiError
     */
    public organizationBlockUser({
        org,
        username,
        note,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * user to block
         */
        username: string,
        /**
         * optional note for the block
         */
        note?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{org}/blocks/{username}',
            path: {
                'org': org,
                'username': username,
            },
            query: {
                'note': note,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Unblock a user
     * @returns void
     * @throws ApiError
     */
    public organizationUnblockUser({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * user to unblock
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/blocks/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List an organization's webhooks
     * @returns Hook HookList
     * @throws ApiError
     */
    public orgListHooks({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Hook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/hooks',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public orgCreateHook({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body: CreateHookOption,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{org}/hooks',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Get a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public orgGetHook({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/hooks/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete a hook
     * @returns void
     * @throws ApiError
     */
    public orgDeleteHook({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/hooks/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Update a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public orgEditHook({
        org,
        id,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the hook to update
         */
        id: number,
        body?: EditHookOption,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/orgs/{org}/hooks/{id}',
            path: {
                'org': org,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List an organization's labels
     * @returns Label LabelList
     * @throws ApiError
     */
    public orgListLabels({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Label>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/labels',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create a label for an organization
     * @returns Label Label
     * @throws ApiError
     */
    public orgCreateLabel({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body?: CreateLabelOption,
    }): CancelablePromise<Label> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{org}/labels',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a single label
     * @returns Label Label
     * @throws ApiError
     */
    public orgGetLabel({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the label to get
         */
        id: number,
    }): CancelablePromise<Label> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/labels/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete a label
     * @returns void
     * @throws ApiError
     */
    public orgDeleteLabel({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the label to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/labels/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Update a label
     * @returns Label Label
     * @throws ApiError
     */
    public orgEditLabel({
        org,
        id,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the label to edit
         */
        id: number,
        body?: EditLabelOption,
    }): CancelablePromise<Label> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/orgs/{org}/labels/{id}',
            path: {
                'org': org,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List an organization's members
     * @returns User UserList
     * @throws ApiError
     */
    public orgListMembers({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/members',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Check if a user is a member of an organization
     * @returns void
     * @throws ApiError
     */
    public orgIsMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                303: `redirection to /orgs/{org}/public_members/{username}`,
                404: `user is not a member`,
            },
        });
    }
    /**
     * Remove a member from an organization
     * @returns void
     * @throws ApiError
     */
    public orgDeleteMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List an organization's public members
     * @returns User UserList
     * @throws ApiError
     */
    public orgListPublicMembers({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/public_members',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Check if a user is a public member of an organization
     * @returns void
     * @throws ApiError
     */
    public orgIsPublicMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `user is not a public member`,
            },
        });
    }
    /**
     * Publicize a user's membership
     * @returns void
     * @throws ApiError
     */
    public orgPublicizeMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Conceal a user's membership
     * @returns void
     * @throws ApiError
     */
    public orgConcealMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List an organization's repos
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public orgListRepos({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/repos',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create a repository in an organization
     * @returns Repository Repository
     * @throws ApiError
     */
    public createOrgRepo({
        org,
        body,
    }: {
        /**
         * name of organization
         */
        org: string,
        body?: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{org}/repos',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List an organization's teams
     * @returns Team TeamList
     * @throws ApiError
     */
    public orgListTeams({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Team>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/teams',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create a team
     * @returns Team Team
     * @throws ApiError
     */
    public orgCreateTeam({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body?: CreateTeamOption,
    }): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{org}/teams',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Search for teams within an organization
     * @returns any SearchResults of a successful search
     * @throws ApiError
     */
    public teamSearch({
        org,
        q,
        includeDesc,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * keywords to search
         */
        q?: string,
        /**
         * include search within team description (defaults to true)
         */
        includeDesc?: boolean,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<{
        data?: Array<Team>;
        ok?: boolean;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{org}/teams/search',
            path: {
                'org': org,
            },
            query: {
                'q': q,
                'include_desc': includeDesc,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Get a team
     * @returns Team Team
     * @throws ApiError
     */
    public orgGetTeam({
        id,
    }: {
        /**
         * id of the team to get
         */
        id: number,
    }): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete a team
     * @returns void
     * @throws ApiError
     */
    public orgDeleteTeam({
        id,
    }: {
        /**
         * id of the team to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Edit a team
     * @returns Team Team
     * @throws ApiError
     */
    public orgEditTeam({
        id,
        body,
    }: {
        /**
         * id of the team to edit
         */
        id: number,
        body?: EditTeamOption,
    }): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List a team's activity feeds
     * @returns Activity ActivityFeedsList
     * @throws ApiError
     */
    public orgListTeamActivityFeeds({
        id,
        date,
        page,
        limit,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * the date of the activities to be found
         */
        date?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Activity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}/activities/feeds',
            path: {
                'id': id,
            },
            query: {
                'date': date,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List a team's members
     * @returns User UserList
     * @throws ApiError
     */
    public orgListTeamMembers({
        id,
        page,
        limit,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List a particular member of team
     * @returns User User
     * @throws ApiError
     */
    public orgListTeamMember({
        id,
        username,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * username of the member to list
         */
        username: string,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}/members/{username}',
            path: {
                'id': id,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Add a team member
     * @returns void
     * @throws ApiError
     */
    public orgAddTeamMember({
        id,
        username,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * username of the user to add
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/teams/{id}/members/{username}',
            path: {
                'id': id,
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Remove a team member
     * @returns void
     * @throws ApiError
     */
    public orgRemoveTeamMember({
        id,
        username,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * username of the user to remove
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/teams/{id}/members/{username}',
            path: {
                'id': id,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List a team's repos
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public orgListTeamRepos({
        id,
        page,
        limit,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}/repos',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List a particular repo of team
     * @returns Repository Repository
     * @throws ApiError
     */
    public orgListTeamRepo({
        id,
        org,
        repo,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * organization that owns the repo to list
         */
        org: string,
        /**
         * name of the repo to list
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}/repos/{org}/{repo}',
            path: {
                'id': id,
                'org': org,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Add a repository to a team
     * @returns void
     * @throws ApiError
     */
    public orgAddTeamRepository({
        id,
        org,
        repo,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * organization that owns the repo to add
         */
        org: string,
        /**
         * name of the repo to add
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/teams/{id}/repos/{org}/{repo}',
            path: {
                'id': id,
                'org': org,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Remove a repository from a team
     * This does not delete the repository, it only removes the repository from the team.
     * @returns void
     * @throws ApiError
     */
    public orgRemoveTeamRepository({
        id,
        org,
        repo,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * organization that owns the repo to remove
         */
        org: string,
        /**
         * name of the repo to remove
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/teams/{id}/repos/{org}/{repo}',
            path: {
                'id': id,
                'org': org,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List the current user's organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public orgListCurrentUserOrgs({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Organization>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List a user's organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public orgListUserOrgs({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Organization>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/orgs',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Get user permissions in organization
     * @returns OrganizationPermissions OrganizationPermissions
     * @throws ApiError
     */
    public orgGetUserPermissions({
        username,
        org,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<OrganizationPermissions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/orgs/{org}/permissions',
            path: {
                'username': username,
                'org': org,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
}
