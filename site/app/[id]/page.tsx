import Image from 'next/image';
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import { getCourse } from '@/data/course';
import AddComments from '@/app/components/AddComments';
import { addComment } from '@/app/actions/add-comment';
import YoutubeEmbed from '@/app/components/YouTubeEmbed';

export default async function CoursePage({params}: {
  params: {id: string}
}) {
  
  const course: any  = await getCourse(params?.id);
  const comments: any = course?.data?.comments;
  
  return(
    <div className='p-2 flex flex-col justify-center'>
      <div>
        <h2 className='text-4xl font-semibold mt-2 mb-2'>{ course?.data?.name}</h2>
        <div className='text-xl mb-2'>
          {course?.data?.description?.json 
          && <RichTextRenderer node={course?.data?.description?.json} />}
        </div>
        <div className='border rounded-md border-gray-400 shadow-md'>
          <YoutubeEmbed src={course?.data?.link} />
        </div>
      </div>

      <div className='flex mt-3 mb-3 text-lg'>
        <p className='mr-2'>
          <span className='font-bold'>Price</span>: {course?.data?.price === 0 ? `Free` : `$${course?.data?.price}`} | 
        </p>
        <p className='mr-2'>
          <span className='font-bold'>Last updated on</span>: { course?.data?.updatedOn } | 
        </p>
        <p className='mr-2'>
          <span className='font-bold'>Duration</span>: { `${course?.data?.duration} minutes` } | 
        </p>
        <p className='mr-2'>
          <span className='font-bold'>Rating</span>: { course?.data?.rating }
        </p>
      </div>

      <div className='flex flex-col'>
        <div className='bg-slate-100 border rounded-lg pl-2'>
          <h2 className='text-2xl font-semibold mt-2 mb-2 pt-3 pb-3'>Add a Comment</h2>
          <AddComments 
            addComment={addComment} 
            course={course}/>
        </div>
        <div className='mt-2'>
          <ul className='text-xl mb-2'>{comments.length} Comments</ul>
          <div className=' bg-gray-100 flex flex-wrap items-center justify-center'>
          {
            comments.length > 0 ? (
              comments.map((comment: any) => (
                <li className='m-2 bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500' key={comment?.id}>
                  <p className="flex mt-2"> Rated {comment?.rating}</p>

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