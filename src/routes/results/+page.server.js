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

      if (studentid  === null || studentid === "Select student" || courseid === null || courseid === "Select course" || grade === null || grade === "Select grade") {
		return fail(400, {
		  missing: true,
		});
	  }

      try {
        addResult(studentid, courseid, grade)
        return {
            success: true
        }
      } catch {
        return fail(400, {
            db_error: true,
        });
        }

	},
  };
  