export type TodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
  deadline: string;
  assignedTo: string;
};

export type TSidebarCardProps = {
  text: string;
  number: string;
  logo: JSX.Element;
}
