import Image from 'next/image';
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import { getCourse } from '@/data/course';
import AddComments from '@/app/components/AddComments';
import { addComment } from '@/app/actions/add-comment';
import YoutubeEmbed from '@/app/components/YouTubeEmbed';
import Rating from '../components/Rating';

import { BsFillClockFill } from 'react-icons/bs';
import {IoPricetags} from 'react-icons/io5'
import Link from 'next/link';


export default async function CoursePage({params}: {
  params: {id: string}
}) {
  
  const course: any  = await getCourse(params?.id);
  const comments: any = course?.data?.comments;

  const cummulativeRating = comments.reduce((accumulator: number, comment: any) => accumulator + comment.rating, 0);
  const avgRating = comments.length > 0 ? Math.ceil(cummulativeRating/comments.length) : 0;
  
  return(
    <div className='p-2 flex flex-col justify-center'>
      <div>
        <h2 className='text-4xl font-semibold mt-2 mb-2'>{ course?.data?.name}</h2>
        <div className='text-xl mb-2 p-2'>
          {course?.data?.description?.json 
          && <RichTextRenderer node={course?.data?.description?.json} />}
        </div>
      </div>

      <YoutubeEmbed src={course?.data?.link} />

      <div className='flex flex-col flex-wrap items-center mb-2'>
        <div>
           {avgRating === 0 ? 'No Rating Available' : <Rating count={avgRating} size={32}/>}
        </div>
        
        <div className='flex'>
          <div className=' flex mr-7 p-1'>
            <IoPricetags size={24}/> 
            <p className='text-lg ml-1'>
              <Link
                href="https://paypal.me/greenrootsinfo"
                target='_blank'>
                Get it for <strong>{course?.data?.price === 0 ? `Free` : `$${course?.data?.price}`}</strong>
              </Link>
            </p>
          </div>
          <div className='flex p-1'>
            <BsFillClockFill size={20}/> 
            <p className='text-lg ml-1'>{ `${course?.data?.duration} minutes` }</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <AddComments 
          addComment={addComment} 
          course={course}/>
        
        <div className='mt-2 mb-2'>
          <ul className='text-xl mb-2'>{comments.length} Comments</ul>
          <div className=' bg-gray-100 mb-6 flex flex-wrap'>
          {
            comments.length > 0 ? (
              comments.map((comment: any) => (
                <li className='m-2 bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500' key={comment?.id}>
                  <Rating count={comment?.rating} size={24}/>

                  <div className="mt-4 text-md text-gray-600">{comment?.data?.json && <RichTextRenderer node={comment?.data?.json} />}</div>

                  <div className="mt-4 flex items-center space-x-4 py-6">
                    <div>
                      <img className="w-12 h-12 rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" />
                    </div>
                    <div className="text-sm font-semibold">{comment?.name} • <span className="font-normal"> {comment?.commentedOn} </span></div>
                  </div>
                  
                </li>
              ))
            ) : (<p>No Comments Yet! Add One.</p>)
          }
          </div>
        </div>
      </div>
    </div>
  )
}