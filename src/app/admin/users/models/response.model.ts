export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support?: {text: string; url: string}
  data: UserDataResponse[];
}

export interface UserDataResponse {
  id: number;
  email:	string;
  first_name:	string;
  last_name:	string;
  avatar:	string;
}
