import { FC } from 'react';
import { Block } from '../types/types';


interface SpaceData {
  space: number;
};

interface Props {
  data: Block['data'],
};


/**
 * SpaceBlock Component
 * @author Ingo Andelhofs
 */
const SpaceBlock: FC<Props> = (props: Props) => {

  const { data } = props;

  const render = () => {
    return <div style={{height: data.space}}></div>;
  }

  return render();
}


export default SpaceBlock;
