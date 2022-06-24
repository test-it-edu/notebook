import { FC } from 'react';
import { Block } from '../types/types';


interface DelimiterData {
  type: 'line' | 'stars';
};

interface Props {
  data: Block['data'],
};


/**
 * DelimiterBlock Component
 * @author Ingo Andelhofs
 */
const DelimiterBlock: FC<Props> = (props: Props) => {

  const { data } = props;

  const render = () => {
    if (data.type == "line") {
      return <div className='my-4 border-b border-gray-600'></div>
    }

    return <div className='my-4 text-center'>***</div>;
  }

  return render();
}


export default DelimiterBlock;
