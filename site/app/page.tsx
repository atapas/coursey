import Link from 'next/link';
import Image from 'next/image';

import { getAllCourses } from '@/data/course';

export default async function Home() {
  const courses: any = await getAllCourses();
  
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
                <Image
                  src={course?.node?.cover?.src}
                  alt="Picture of the author"
                  width={500} 
                  height={500} 
                />
              </div>
          </Link>
        ))

      }
      </div>
    </main>
  )
}
