/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CreateRepoOption options when creating repository
 */
export type CreateRepoOption = {
    /**
     * Whether the repository should be auto-initialized?
     */
    auto_init?: boolean;
    /**
     * DefaultBranch of the repository (used when initializes and in template)
     */
    default_branch?: string;
    /**
     * Description of the repository to create
     */
    description?: string;
    /**
     * Gitignores to use
     */
    gitignores?: string;
    /**
     * Label-Set to use
     */
    issue_labels?: string;
    /**
     * License to use
     */
    license?: string;
    /**
     * Name of the repository to create
     */
    name: string;
    /**
     * ObjectFormatName of the underlying git repository
     */
    object_format_name?: CreateRepoOption.object_format_name;
    /**
     * Whether the repository is private
     */
    private?: boolean;
    /**
     * Readme of the repository to create
     */
    readme?: string;
    /**
     * Whether the repository is template
     */
    template?: boolean;
    /**
     * TrustModel of the repository
     */
    trust_model?: CreateRepoOption.trust_model;
};
export namespace CreateRepoOption {
    /**
     * ObjectFormatName of the underlying git repository
     */
    export enum object_format_name {
        SHA1 = 'sha1',
        SHA256 = 'sha256',
    }
    /**
     * TrustModel of the repository
     */
    export enum trust_model {
        DEFAULT = 'default',
        COLLABORATOR = 'collaborator',
        COMMITTER = 'committer',
        COLLABORATORCOMMITTER = 'collaboratorcommitter',
    }
}

