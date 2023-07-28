import { ObjectId } from "../deps.ts";

export interface PostSchema {
    _id: ObjectId;
    date: Date;
    post: PostObject;
}

export interface PostObject {
    title: string;
    shortDescription: string;
    post: string;
}