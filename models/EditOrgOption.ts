/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * EditOrgOption options for editing an organization
 */
export type EditOrgOption = {
    description?: string;
    email?: string;
    full_name?: string;
    location?: string;
    repo_admin_change_team_access?: boolean;
    /**
     * possible values are `public`, `limited` or `private`
     */
    visibility?: EditOrgOption.visibility;
    website?: string;
};
export namespace EditOrgOption {
    /**
     * possible values are `public`, `limited` or `private`
     */
    export enum visibility {
        PUBLIC = 'public',
        LIMITED = 'limited',
        PRIVATE = 'private',
    }
}

