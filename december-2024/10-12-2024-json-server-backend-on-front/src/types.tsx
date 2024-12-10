export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "High" | "Medium";
  status: "Pending" | "In Progress" | "Completed";
}
