/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * MarkdownOption markdown options
 */
export type MarkdownOption = {
    /**
     * URL path for rendering issue, media and file links
     * Expected format: /subpath/{user}/{repo}/src/{branch, commit, tag}/{identifier/path}/{file/dir}
     *
     * in: body
     */
    Context?: string;
    /**
     * Mode to render (comment, gfm, markdown)
     *
     * in: body
     */
    Mode?: string;
    /**
     * Text markdown to render
     *
     * in: body
     */
    Text?: string;
    /**
     * Is it a wiki page ?
     *
     * in: body
     */
    Wiki?: boolean;
};

