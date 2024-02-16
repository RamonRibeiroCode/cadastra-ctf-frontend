import { UserRole } from "@/contexts/AuthContext";

export interface User {
  name: string;
  email: string;
  points: number;
  avatarUrl: string;
  role: UserRole;
}
