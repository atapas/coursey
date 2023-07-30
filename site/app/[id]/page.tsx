import Image from 'next/image';
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import { getCourse } from '@/data/course';
import AddComments from '@/components/AddComments';
import { addCommentToCourse } from '@/app/actions/add-comment';

export default async function CoursePage({params}: {
  params: {id: string}
}) {
  
  const course: any  = await getCourse(params?.id);
  const comments: any = course?.data?.comments;
  

  return(
    <div>
      <div>
        <h2>{ course?.data?.name}</h2>
        {course?.data?.description?.json && <RichTextRenderer node={course?.data?.description?.json} />}
        <p>Price: ${ course?.data?.price}</p>
        <p>Last updated on: { course?.data?.updatedOn }</p>
        <p>Rating: { course?.data?.rating }</p>
      </div>
      <div>
        <div><AddComments addComment={addCommentToCourse}/></div>
        <h3>Comments</h3>
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