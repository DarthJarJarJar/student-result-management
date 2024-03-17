import { fail } from '@sveltejs/kit';
import { addStudent, getStudent } from '../../lib/server/database.js';


function convertToDate(dateString) {
    var parts = dateString.split("-");
    // Note: months are 0-based in JavaScript Date object, so we need to subtract 1 from the month
    var date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date;
}

export const load = (() => {
   const stu = getStudent()
   return {
	stu
   }
})

export const actions = {
	default: async ({request }) => {
	  const data = await request.formData();
	  if (data.get("firstName").length === 0) {
		return fail(400, {
		  missing: true,
		  firstName: data.get("firstName"),
		  lastName: data.get("lastName"),
		  dob: data.get("dob"),
		});
	  }
	  if (data.get("lastName").length === 0) {
		return fail(400, {
		  missing: true,
		  firstName: data.get("firstName"),
		  lastName: data.get("lastName"),
		  dob: data.get("dob"),
		});
	  }

	  if (data.get("dob").length === 0) {
		return fail(400, {
		  missing: true,
		  firstName: data.get("firstName"),
		  lastName: data.get("lastName"),
		  dob: data.get("dob"),
		});
	  }

	  let givendate = data.get("dob")
	  let date = convertToDate(givendate);
	  let currentdate = new Date()
	  let tenYearsAgo = new Date(currentdate.getFullYear() - 10, currentdate.getMonth(), currentdate.getDate())

	  if (date >= tenYearsAgo) {
		return fail(400, {
		  error: true,
		  firstName: data.get("firstName"),
		  lastName: data.get("lastName"),
		});
	  }
	 
	  let firstName = data.get("firstName")
	  let lastName = data.get("lastName")
	  let dob = data.get("dob")

	  addStudent(firstName,lastName,dob)

	  return {
		success: true
	  }

	},
  };
  