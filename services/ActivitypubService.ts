/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityPub } from '../models/ActivityPub';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ActivitypubService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns the Person actor for a user
     * @returns ActivityPub ActivityPub
     * @throws ApiError
     */
    public activitypubPerson({
        userId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
    }): CancelablePromise<ActivityPub> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activitypub/user-id/{user-id}',
            path: {
                'user-id': userId,
            },
        });
    }

    /**
     * Send to the inbox
     * @returns void
     * @throws ApiError
     */
    public activitypubPersonInbox({
        userId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/activitypub/user-id/{user-id}/inbox',
            path: {
                'user-id': userId,
            },
        });
    }

}
