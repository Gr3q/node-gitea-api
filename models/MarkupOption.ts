/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * MarkupOption markup options
 */
export type MarkupOption = {
    /**
     * URL path for rendering issue, media and file links
     * Expected format: /subpath/{user}/{repo}/src/{branch, commit, tag}/{identifier/path}/{file/dir}
     *
     * in: body
     */
    Context?: string;
    /**
     * File path for detecting extension in file mode
     *
     * in: body
     */
    FilePath?: string;
    /**
     * Mode to render (comment, gfm, markdown, file)
     *
     * in: body
     */
    Mode?: string;
    /**
     * Text markup to render
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

