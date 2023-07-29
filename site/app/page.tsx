import Link from 'next/link';
import Image from 'next/image';

import { getAllCourses } from '@/data/course';

export default async function Home() {
  const courses: any = await getAllCourses();
  
  return (
    <main>
      <p>{courses?.totalCount} Courses</p>
      <div className='flex p-1'>
      {
        courses?.data?.map((course: any, index: number) =>(
          <Link
            href={`/${course?.node?.slug}`}>
              <div className='m-2'>
                <Image
                  src={course?.node?.cover?.src}
                  alt="Picture of the author"
                  width={300} 
                  height={300} 
                />
                <h2>{ course?.node?.name }</h2>
              </div>
          </Link>
        ))

      }
      </div>
    </main>
  )
}
