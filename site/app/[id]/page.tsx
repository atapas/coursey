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
        <ul>Comments</ul>
        {
          comments.length > 0 ? (
            comments.map((comment: any) => (
              <li key={comment?.id}>
                <div>{comment?.data?.json && <RichTextRenderer node={comment?.data?.json} />}
                by {comment?.name}</div>
                <p> Rated {comment?.rating} on {comment?.commentedOn}</p>
              </li>
            ))
          ) : (<p>No Comments Yet! Add One.</p>)
        }
      </div>
    </div>
  )
}