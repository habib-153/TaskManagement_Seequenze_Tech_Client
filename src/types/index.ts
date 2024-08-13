export const STATUS = ['to-do', 'in-progress', 'done', 'timeout']

export type TStatus = 'to-do' | 'in-progress' |'done' |'timeout'

export type TodoCardProps = {
  _id?: string;
  title: string;
  description: string;
  status?: TStatus;
  priority: string;
  deadline: string;
  assignedTo: string;
};

export type TSidebarCardProps = {
  text: string;
  number: string;
  logo: JSX.Element;
}
export interface IFormInput {
  title: string;
  description: string;
  priority: string;
  deadline: Date
  assignedTo: string;
}
