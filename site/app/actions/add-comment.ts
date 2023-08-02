'use server'

import { revalidatePath } from 'next/cache'
import { addCommentToCourse } from '@/data/course'

export async function addComment(data: any, course: any) {
  await addCommentToCourse(data, course);
  revalidatePath('/');
}