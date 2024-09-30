/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Badge } from '../models/Badge';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreateOrgOption } from '../models/CreateOrgOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateUserOption } from '../models/CreateUserOption';
import type { Cron } from '../models/Cron';
import type { EditHookOption } from '../models/EditHookOption';
import type { EditUserOption } from '../models/EditUserOption';
import type { Email } from '../models/Email';
import type { Hook } from '../models/Hook';
import type { Organization } from '../models/Organization';
import type { PublicKey } from '../models/PublicKey';
import type { RenameUserOption } from '../models/RenameUserOption';
import type { Repository } from '../models/Repository';
import type { User } from '../models/User';
import type { UserBadgeOption } from '../models/UserBadgeOption';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List cron tasks
     * @returns Cron CronList
     * @throws ApiError
     */
    public adminCronList({
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
    }): CancelablePromise<Array<Cron>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/cron',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Run cron task
     * @returns void
     * @throws ApiError
     */
    public adminCronRun({
        task,
    }: {
        /**
         * task to run
         */
        task: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/cron/{task}',
            path: {
                'task': task,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * List all emails
     * @returns Email EmailList
     * @throws ApiError
     */
    public adminGetAllEmails({
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
    }): CancelablePromise<Array<Email>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/emails',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Search all emails
     * @returns Email EmailList
     * @throws ApiError
     */
    public adminSearchEmails({
        q,
        page,
        limit,
    }: {
        /**
         * keyword
         */
        q?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Email>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/emails/search',
            query: {
                'q': q,
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List system's webhooks
     * @returns Hook HookList
     * @throws ApiError
     */
    public adminListHooks({
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
    }): CancelablePromise<Array<Hook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/hooks',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Create a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public adminCreateHook({
        body,
    }: {
        body: CreateHookOption,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/hooks',
            body: body,
        });
    }
    /**
     * Get a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public adminGetHook({
        id,
    }: {
        /**
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/hooks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete a hook
     * @returns void
     * @throws ApiError
     */
    public adminDeleteHook({
        id,
    }: {
        /**
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/hooks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public adminEditHook({
        id,
        body,
    }: {
        /**
         * id of the hook to update
         */
        id: number,
        body?: EditHookOption,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/admin/hooks/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }
    /**
     * List all organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public adminGetAllOrgs({
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
            url: '/admin/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get an global actions runner registration token
     * @returns string RegistrationToken is response related to registration token
     * @throws ApiError
     */
    public adminGetRunnerRegistrationToken(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/runners/registration-token',
            responseHeader: 'token',
        });
    }
    /**
     * List unadopted repositories
     * @returns string StringSlice
     * @throws ApiError
     */
    public adminUnadoptedList({
        page,
        limit,
        pattern,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * pattern of repositories to search for
         */
        pattern?: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/unadopted',
            query: {
                'page': page,
                'limit': limit,
                'pattern': pattern,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Adopt unadopted files as a repository
     * @returns void
     * @throws ApiError
     */
    public adminAdoptRepository({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/unadopted/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Delete unadopted files
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUnadoptedRepository({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/unadopted/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Search users according filter conditions
     * @returns User UserList
     * @throws ApiError
     */
    public adminSearchUsers({
        sourceId,
        loginName,
        page,
        limit,
    }: {
        /**
         * ID of the user's login source to search for
         */
        sourceId?: number,
        /**
         * user's login name to search for
         */
        loginName?: string,
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
            url: '/admin/users',
            query: {
                'source_id': sourceId,
                'login_name': loginName,
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create a user
     * @returns User User
     * @throws ApiError
     */
    public adminCreateUser({
        body,
    }: {
        body?: CreateUserOption,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users',
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete a user
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUser({
        username,
        purge,
    }: {
        /**
         * username of user to delete
         */
        username: string,
        /**
         * purge the user from the system completely
         */
        purge?: boolean,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{username}',
            path: {
                'username': username,
            },
            query: {
                'purge': purge,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Edit an existing user
     * @returns User User
     * @throws ApiError
     */
    public adminEditUser({
        username,
        body,
    }: {
        /**
         * username of user to edit
         */
        username: string,
        body?: EditUserOption,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/admin/users/{username}',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List a user's badges
     * @returns Badge BadgeList
     * @throws ApiError
     */
    public adminListUserBadges({
        username,
    }: {
        /**
         * username of user
         */
        username: string,
    }): CancelablePromise<Array<Badge>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{username}/badges',
            path: {
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Add a badge to a user
     * @returns void
     * @throws ApiError
     */
    public adminAddUserBadges({
        username,
        body,
    }: {
        /**
         * username of user
         */
        username: string,
        body?: UserBadgeOption,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/badges',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Remove a badge from a user
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUserBadges({
        username,
        body,
    }: {
        /**
         * username of user
         */
        username: string,
        body?: UserBadgeOption,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{username}/badges',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Add a public key on behalf of a user
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public adminCreatePublicKey({
        username,
        key,
    }: {
        /**
         * username of the user
         */
        username: string,
        key?: CreateKeyOption,
    }): CancelablePromise<PublicKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/keys',
            path: {
                'username': username,
            },
            body: key,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete a user's public key
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUserPublicKey({
        username,
        id,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * id of the key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{username}/keys/{id}',
            path: {
                'username': username,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }
    /**
     * Create an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public adminCreateOrg({
        username,
        organization,
    }: {
        /**
         * username of the user that will own the created organization
         */
        username: string,
        organization: CreateOrgOption,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/orgs',
            path: {
                'username': username,
            },
            body: organization,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Rename a user
     * @returns void
     * @throws ApiError
     */
    public adminRenameUser({
        username,
        body,
    }: {
        /**
         * existing username of user
         */
        username: string,
        body: RenameUserOption,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/rename',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Create a repository on behalf of a user
     * @returns Repository Repository
     * @throws ApiError
     */
    public adminCreateRepo({
        username,
        repository,
    }: {
        /**
         * username of the user. This user will own the created repository
         */
        username: string,
        repository: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/repos',
            path: {
                'username': username,
            },
            body: repository,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
}
