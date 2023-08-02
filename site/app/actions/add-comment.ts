'use server'

import { revalidatePath } from 'next/cache'
import { addCommentToCourse } from '@/data/course'

export async function addComment(data: any, course: any) {
  const response = await addCommentToCourse(data, course);
  revalidatePath('/');
  return response;
}