export interface UserCreateInput {
    name: string;
    email: string;
    password: string;
    type?: number;
}