import FlexBox from './FlexBox';

import { AiOutlineHeart } from 'react-icons/ai';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import '../styles/cardMenu.scss';

export default function CardMenu() {
  return (
    <FlexBox className="card-menu">
      <div className="interactions">
        <AiOutlineHeart className="icon heart-icon" />
        <IoChatbubbleOutline className="icon" />
        <IoPaperPlaneOutline className="icon" />
      </div>
      <BsBookmark className="icon bookmark-icon" />
    </FlexBox>
  );
}
