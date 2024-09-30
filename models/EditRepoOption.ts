/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalTracker } from './ExternalTracker';
import type { ExternalWiki } from './ExternalWiki';
import type { InternalTracker } from './InternalTracker';
/**
 * EditRepoOption options when editing a repository's properties
 */
export type EditRepoOption = {
    /**
     * either `true` to allow fast-forward-only merging pull requests, or `false` to prevent fast-forward-only merging.
     */
    allow_fast_forward_only_merge?: boolean;
    /**
     * either `true` to allow mark pr as merged manually, or `false` to prevent it.
     */
    allow_manual_merge?: boolean;
    /**
     * either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
     */
    allow_merge_commits?: boolean;
    /**
     * either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
     */
    allow_rebase?: boolean;
    /**
     * either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits.
     */
    allow_rebase_explicit?: boolean;
    /**
     * either `true` to allow updating pull request branch by rebase, or `false` to prevent it.
     */
    allow_rebase_update?: boolean;
    /**
     * either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
     */
    allow_squash_merge?: boolean;
    /**
     * set to `true` to archive this repository.
     */
    archived?: boolean;
    /**
     * either `true` to enable AutodetectManualMerge, or `false` to prevent it. Note: In some special cases, misjudgments can occur.
     */
    autodetect_manual_merge?: boolean;
    /**
     * set to `true` to allow edits from maintainers by default
     */
    default_allow_maintainer_edit?: boolean;
    /**
     * sets the default branch for this repository.
     */
    default_branch?: string;
    /**
     * set to `true` to delete pr branch after merge by default
     */
    default_delete_branch_after_merge?: boolean;
    /**
     * set to a merge style to be used by this repository: "merge", "rebase", "rebase-merge", "squash", or "fast-forward-only".
     */
    default_merge_style?: string;
    /**
     * a short description of the repository.
     */
    description?: string;
    /**
     * enable prune - remove obsolete remote-tracking references when mirroring
     */
    enable_prune?: boolean;
    external_tracker?: ExternalTracker;
    external_wiki?: ExternalWiki;
    /**
     * either `true` to enable actions unit, or `false` to disable them.
     */
    has_actions?: boolean;
    /**
     * either `true` to enable issues for this repository or `false` to disable them.
     */
    has_issues?: boolean;
    /**
     * either `true` to enable packages unit, or `false` to disable them.
     */
    has_packages?: boolean;
    /**
     * either `true` to enable project unit, or `false` to disable them.
     */
    has_projects?: boolean;
    /**
     * either `true` to allow pull requests, or `false` to prevent pull request.
     */
    has_pull_requests?: boolean;
    /**
     * either `true` to enable releases unit, or `false` to disable them.
     */
    has_releases?: boolean;
    /**
     * either `true` to enable the wiki for this repository or `false` to disable it.
     */
    has_wiki?: boolean;
    /**
     * either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace.
     */
    ignore_whitespace_conflicts?: boolean;
    internal_tracker?: InternalTracker;
    /**
     * set to a string like `8h30m0s` to set the mirror interval time
     */
    mirror_interval?: string;
    /**
     * name of the repository
     */
    name?: string;
    /**
     * either `true` to make the repository private or `false` to make it public.
     * Note: you will get a 422 error if the organization restricts changing repository visibility to organization
     * owners and a non-owner tries to change the value of private.
     */
    private?: boolean;
    /**
     * `repo` to only allow repo-level projects, `owner` to only allow owner projects, `all` to allow both.
     */
    projects_mode?: string;
    /**
     * either `true` to make this repository a template or `false` to make it a normal repository
     */
    template?: boolean;
    /**
     * a URL with more information about the repository.
     */
    website?: string;
};

