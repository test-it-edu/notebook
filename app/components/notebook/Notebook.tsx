import { FC } from 'react';
import DynamicBlock from '../blocks/DynamicBlock';
import { Block, NotebookData } from '../types/types';


// Props
interface Props {
  data: NotebookData;
};


/**
 * Notebook Component
 * @author Ingo Andelhofs
 */
const Notebook: FC<Props> = (props: Props) => {
  const { data } = props;

  const render = () => {
    return <div className="w-full h-[500px]">

      {data.blocks.map((block: Block) => {
        return <DynamicBlock 
          key={block.id} 
          block={block} 
        />
      })}

    </div>;
  }

  return render();
}


export default Notebook;
