import { fail } from '@sveltejs/kit';
import { addResult, getResult, getCourse, getStudent } from '../../lib/server/database.js';

export const load = (() => {
   const result = getResult()
   const students = getStudent()
   const courses = getCourse()
   return {
	result,
    students,
    courses
   }
})

export const actions = {
	default: async ({request}) => {
	  const data = await request.formData();
	  
	  let studentid = data.get("studentid")
      let courseid = data.get("courseid")
      let grade = data.get("grade")

      if (studentid  === null || studentid === "Select student") {
		return fail(400, {
		  missing: true,
		});
	  }

      if (courseid === null || courseid === "Select course") {
		return fail(400, {
		  missing: true,
		});
	  }

      if (grade === null || grade === "Select grade") {
		return fail(400, {
		  missing: true,
		});
	  }

	  addResult(studentid, courseid, grade)

	  return {
		success: true
	  }

	},
  };
  