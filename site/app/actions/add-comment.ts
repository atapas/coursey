'use server'

import { revalidatePath } from 'next/cache'


export async function addCommentToCourse(data: any) {
  console.log(data);
  //await courses.create(data);
  revalidatePath('/');
}