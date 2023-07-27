import { ObjectId } from "../deps.ts";

export interface PostSchema {
  _id: ObjectId;
  date: Date;
  post: string;
}
