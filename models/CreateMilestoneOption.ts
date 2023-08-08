/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateMilestoneOption options for creating a milestone
 */
export type CreateMilestoneOption = {
    description?: string;
    due_on?: string;
    state?: CreateMilestoneOption.state;
    title?: string;
};

export namespace CreateMilestoneOption {

    export enum state {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

