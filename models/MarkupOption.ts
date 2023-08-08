/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * MarkupOption markup options
 */
export type MarkupOption = {
    /**
     * Context to render
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

