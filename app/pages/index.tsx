import Notebook from "../components/notebook/Notebook";
import { NotebookData } from "../components/types/types";


const notebookInitial: NotebookData = {
  version: 0,
  blocks: [
    {
      id: "a",
      type: "heading",
      data: {
        level: 1,
        text: "Welcome to Notebook",
      }
    },
    {
      id: "b",
      type: "text",
      data: {
        text: "Hallo dit is een test",
      }
    },
    {
      id: "c",
      type: "lines",
      data: {
        lines: 5,
      }
    },
    {
      id: "d",
      type: "list",
      data: {
        type: "ordered",
        items: [
          "The first item",
          "The second item"
        ],
      }
    },
    {
      id: "e",
      type: "delimiter",
      data: {
        type: 'line',
      }
    },
  ],
};


const IndexPage = () => {

  return <div className="w-[21cm] mx-auto bg-slate-200 mt-8 p-8 rounded-sm">
    <Notebook data={notebookInitial} />
  </div>
}

export default IndexPage;
