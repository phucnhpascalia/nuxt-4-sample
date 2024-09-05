export interface TodoResponseDTO {
  id: number;
  name: string;
  priority: string;
  completed: boolean;
  created_at?: string;
}
