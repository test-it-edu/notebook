
// Notebook
export type NotebookData = {
  version: number;
  blocks: Block[];
};

export type Block = {
  id: string;
  type: string;
  data: any;
};

