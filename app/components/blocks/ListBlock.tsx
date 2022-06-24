import { FC } from 'react';
import { Block } from '../types/types';


interface ListData {
  type: "ordered" | "unordered";
  items: string[];
};

interface Props {
  data: Block['data'],
};


/**
 * ListBlock Component
 * @author Ingo Andelhofs
 */
const ListBlock: FC<Props> = (props: Props) => {

  const { data } = props;

  const render = () => {
    if (data.type == "ordered") {
      return <div className='list-decimal'>
        {data.items.map((item: string) => {
          return <li>{item}</li>
        })}
      </div>
    }

    return <div className='list-disc'>
      {data.items.map((item: string) => {
        return <li>{item}</li>
      })}
    </div>
  }

  return render();
}


export default ListBlock;
