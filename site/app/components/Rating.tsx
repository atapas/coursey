

import { BsStarFill } from 'react-icons/bs';

function Rating({count} : {count: number}) {
  const stars = Array(count).fill(<BsStarFill color={"teal"} size={32}/>);
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