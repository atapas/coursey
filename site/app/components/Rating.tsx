

import { BsStarFill } from 'react-icons/bs';

function Rating({count, size} : {count: number, size: number}) {
  const stars = Array(count).fill(<BsStarFill color={"teal"} size={size}/>);
  return(
    <div className='flex mb-2'>
      {
        stars.map((star, index) => (
          <div key={`rating-${index}-comp`} className='mr-1'>{star}</div>
        ))
      }
    </div>
  )
}

export default Rating;