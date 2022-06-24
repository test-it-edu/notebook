import { FC } from 'react';
import { Block } from '../types/types';


interface LinesData {
  lines: number;
};

interface Props {
  data: Block['data'],
};


/**
 * LinesBlock Component
 * @author Ingo Andelhofs
 */
const LinesBlock: FC<Props> = (props: Props) => {

  const { data } = props;

  const render = () => {
    return <div className='mb-4'>
      {[...Array(data.lines)].map((element: number, index: number) => {
        return <div key={index} className='border-b border-gray-400 w-full pt-5' />
      })}
    </div>;
  }

  return render();
}


export default LinesBlock;
