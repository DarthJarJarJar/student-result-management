import { fail } from '@sveltejs/kit';
import { addStudent, getStudent } from '../../lib/server/database.js';


function convertToDate(dateString) {
    let parts = dateString.split("-");
    let date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date;
}

export const load = (() => {
   const student = getStudent()
   return {
	student
   }
})

export const actions = {
	default: async ({request }) => {
	  const data = await request.formData()
	  
	  let firstName = data.get("firstName")
	  let lastName = data.get("lastName")
	  let dob = data.get("dob")

	  if (firstName.length === 0 || lastName.length === 0 || dob.length === 0) {
		return fail(400, {
		  missing: true,
		  firstName: data.get("firstName"),
		  lastName: data.get("lastName"),
		  dob: data.get("dob"),
		});
	  }

	  let date_obj = convertToDate(dob);
	  let currentdate = new Date()
	  let tenYearsAgo = new Date(currentdate.getFullYear() - 10, currentdate.getMonth(), currentdate.getDate())

	  if (date_obj >= tenYearsAgo) {
		return fail(400, {
		  error: true,
		  firstName: data.get("firstName"),
		  lastName: data.get("lastName"),
		});
	  }

	  try {
		addStudent(firstName, lastName, dob)
		return {
			success: true
		}
	  } catch {
		return fail(400, {
			db_error: true
		})
	  }


	},
  };
  