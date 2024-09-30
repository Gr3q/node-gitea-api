/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ChangeFileOperation for creating, updating or deleting a file
 */
export type ChangeFileOperation = {
    /**
     * new or updated file content, must be base64 encoded
     */
    content?: string;
    /**
     * old path of the file to move
     */
    from_path?: string;
    /**
     * indicates what to do with the file
     */
    operation: ChangeFileOperation.operation;
    /**
     * path to the existing or new file
     */
    path: string;
    /**
     * sha is the SHA for the file that already exists, required for update or delete
     */
    sha?: string;
};
export namespace ChangeFileOperation {
    /**
     * indicates what to do with the file
     */
    export enum operation {
        CREATE = 'create',
        UPDATE = 'update',
        DELETE = 'delete',
    }
}

