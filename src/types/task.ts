import { STATUS_LIST } from '../constants/statuses';

export type TaskType = {
  id?: string;
  assignee?: string;
  title: string;
  description: string;
  status: (typeof STATUS_LIST)[number];
};
