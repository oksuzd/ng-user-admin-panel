export interface User {
  id: number;
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  isDeleted?: boolean;
}

export interface UserCellsParams {
  userId?: number | undefined;
}
