export interface PostFormData {
  title: string;
  postContent: string;
  authorName: string;
}

export interface Post {
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
