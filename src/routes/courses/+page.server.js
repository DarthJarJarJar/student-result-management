import { fail } from '@sveltejs/kit';
import { addCourse , getCourse } from '../../lib/server/database.js';

export const load = (() => {
   const courses = getCourse()
   return {
	courses
   }
})

export const actions = {
	default: async ({request}) => {
	  const data = await request.formData();
      let studentid = data.get("")
	  if (data.get("name").length === 0) {
		return fail(400, {
		  missing: true,
		});
	  }
	  let name = data.get("name")

	  addCourse(name)

	  return {
		success: true
	  }

	},
  };
  