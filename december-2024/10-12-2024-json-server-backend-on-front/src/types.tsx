export interface Task {
  title: String;
  description: String;
  dueDate: String;
  priority: "Low" | "High" | "Medium";
  status: "Pending" | "In Progress" | "Completed";
}
