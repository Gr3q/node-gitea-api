/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';
import type { Repository } from './Repository';
import type { User } from './User';
export type Activity = {
    act_user?: User;
    act_user_id?: number;
    comment?: Comment;
    comment_id?: number;
    content?: string;
    created?: string;
    id?: number;
    is_private?: boolean;
    op_type?: string;
    ref_name?: string;
    repo?: Repository;
    repo_id?: number;
    user_id?: number;
};

