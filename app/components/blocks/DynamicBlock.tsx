import { FC } from 'react';
import { Block } from '../types/types';
import DelimiterBlock from './DelimiterBlock';
import HeadingBlock from './HeadingBlock';
import LinesBlock from './LinesBlock';
import ListBlock from './ListBlock';
import SpaceBlock from './SpaceBlock';
import TextBlock from './TextBlock';


interface Props {
  block: Block;
};

const blockMapping = {
  "text": TextBlock,
  "heading": HeadingBlock,
  "space": SpaceBlock,
  "lines": LinesBlock,
  "list": ListBlock,
  "delimiter": DelimiterBlock,
};


/**
 * DynamicBlock Component
 * @author Ingo Andelhofs
 */
const DynamicBlock: FC<Props> = (props: Props) => {

  const { block } = props;

  const render = () => {
    const MappedBlock = (blockMapping as any)[block.type];
    return <MappedBlock data={block.data} />;
  }

  return render();
}


export default DynamicBlock;
