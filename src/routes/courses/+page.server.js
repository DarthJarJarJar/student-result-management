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
    let name = data.get("name")

    if (name.length === 0) {
        return fail(400, {
        missing: true,
        });
    }

    try {
        addCourse(name)
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
