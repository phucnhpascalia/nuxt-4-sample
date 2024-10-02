import { defineStore } from "pinia";
import type { Application } from "~/types/applications";

// Define the structure of the API response
interface PaginatedResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Application[]; // This is where the actual todos are
}

export const useApplicationStore = defineStore('ApplicationStore', () => {
  // Use the Application DTO for typing the Applications array
  const applications = ref<Application[]>([]); 
  const totalItems = ref(0);
  const currentPage = ref(1);

  // Fetch applications with pagination
  const fetchApplications = async (page = 1) => {
    try {
      const response = await fetch(`http://localhost:3001/applications?_page=${page}`);
      const result = await response.json() as PaginatedResponse;
      
      totalItems.value = result.items; // Set total items from the "items" field in the response
      currentPage.value = page;
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    }
  };

  // Update current page and fetch applications
  const setCurrentPage = (page: number) => {
    currentPage.value = page;
    fetchApplications(page);
  };

  // Initially fetch applications
  fetchApplications();

  return {
    applications,
    totalItems,
    currentPage,
    fetchApplications,
    setCurrentPage,
  };
});
