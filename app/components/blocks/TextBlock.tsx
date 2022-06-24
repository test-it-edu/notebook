import { FC } from 'react';
import { Block } from '../types/types';


interface TextData {
  text: string;
};

interface Props {
  data: Block['data'],
};


/**
 * TextBlock Component
 * @author Ingo Andelhofs
 */
const TextBlock: FC<Props> = (props: Props) => {

  const { data } = props;

  // Assert (text)

  const render = () => {
    return <div>{data.text}</div>;
  }

  return render();
}


export default TextBlock;
