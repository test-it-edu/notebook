import { FC } from 'react';
import { Block } from '../types/types';


interface HeadingData {
  level: 1 | 2 | 3;
  text: string;
};

interface Props {
  data: Block['data'],
};


/**
 * HeadingBlock Component
 * @author Ingo Andelhofs
 */
const HeadingBlock: FC<Props> = (props: Props) => {

  const { data } = props;

  // Assert (text, level)

  const render = () => {
    if (data.level == 1) {
      return <div className='text-2xl'>{data.text}</div>
    }

    if (data.level == 2) {
      return <div className='text-xl'>{data.text}</div>;
    }

    return <div className='text-lg'>{data.text}</div>;
  }

  return render();
}


export default HeadingBlock;
