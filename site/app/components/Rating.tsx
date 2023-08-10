

import { BsStarFill } from 'react-icons/bs';

function Rating({count} : {count: number}) {
  const stars = Array(count).fill(<BsStarFill color={"teal"} size={32}/>);
  return(
    <div className='flex mb-2'>
      {
        stars.map((star) => (
          <div className='mr-1'>{star}</div>
        ))
      }
    </div>
  )
}

export default Rating;