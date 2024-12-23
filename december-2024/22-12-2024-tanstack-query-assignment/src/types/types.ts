export interface PostFormData {
  id: string | number;
  title: string;
  postContent: string;
  authorName: string;
}

export interface FormData {
  id: string | number;
  title: string;
  postContent: string;
  authorName: string;
}

export type AddPostFn = (data: FormData) => Promise<void>;
