export interface PostContainer {
    _id?: string;
    date?: Date;
    post: PostObject;
}

export interface PostObject {
    title: string;
    shortDescription: string;
    post: string;
}
