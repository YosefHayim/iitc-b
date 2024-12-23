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

export interface UserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password;
}

export type AddPostFn = (data: FormData) => Promise<void>;
