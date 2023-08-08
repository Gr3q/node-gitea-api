/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditBranchProtectionOption options for editing a branch protection
 */
export type EditBranchProtectionOption = {
    approvals_whitelist_teams?: Array<string>;
    approvals_whitelist_username?: Array<string>;
    block_on_official_review_requests?: boolean;
    block_on_outdated_branch?: boolean;
    block_on_rejected_reviews?: boolean;
    dismiss_stale_approvals?: boolean;
    enable_approvals_whitelist?: boolean;
    enable_merge_whitelist?: boolean;
    enable_push?: boolean;
    enable_push_whitelist?: boolean;
    enable_status_check?: boolean;
    merge_whitelist_teams?: Array<string>;
    merge_whitelist_usernames?: Array<string>;
    protected_file_patterns?: string;
    push_whitelist_deploy_keys?: boolean;
    push_whitelist_teams?: Array<string>;
    push_whitelist_usernames?: Array<string>;
    require_signed_commits?: boolean;
    required_approvals?: number;
    status_check_contexts?: Array<string>;
    unprotected_file_patterns?: string;
};

