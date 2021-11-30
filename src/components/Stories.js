import HorizontalScroll from 'react-scroll-horizontal';
import Story from './Story';
import '../styles/stories.scss';

//extra
import users from '../data/users';

export default function Stories() {
  return (
    <div className="stories">
      <div className="stories-list">
        <HorizontalScroll className="scroll" reverseScroll={true} >
          { users.map(u => <div key={u.id}><Story /></div>) }
        </HorizontalScroll>
      </div>
    </div>
  );
}

