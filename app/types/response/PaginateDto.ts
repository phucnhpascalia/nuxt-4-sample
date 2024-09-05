export interface PaginatedResponseDTO<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  }