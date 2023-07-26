import Link from 'next/link';
import { getAllCourses } from '@/data/course';

export default async function Home() {
  const courses: any = await getAllCourses();
  console.log(courses);
  
  return (
    <main>
      <p>{courses?.totalCount} Courses</p>
      <div>
      {
        courses?.data?.map((course: any, index: number) =>(
          <Link
            href={`/${course?.node?.id}`}>
              <div>
                <h2>{ course?.node?.name }</h2>
              </div>
          </Link>
        ))

      }
      </div>
    </main>
  )
}
