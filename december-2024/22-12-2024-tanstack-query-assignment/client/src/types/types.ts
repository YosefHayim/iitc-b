export interface PostFormData {
  _id: string;
  title: string;
  postContent: string;
  authorName: string;
}

export interface FormData {
  title: string;
  postContent: string;
  authorName: string;
}

export type AddPostFn = (data: FormData) => Promise<void>;
