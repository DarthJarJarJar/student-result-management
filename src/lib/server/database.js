import Database from "better-sqlite3";

const db = new Database("./database/student.db")

export function getStudent() {
    const sql = `
    select * from Student;
    `

    const s = db.prepare(sql)
    const rows = s.all()
    return rows;
}

export function addStudent(firstName, lastName, dob) {
    const sql = `
    INSERT INTO Student(FirstName, LastName, DOB) VALUES('${firstName}', '${lastName}', '${dob}');
    `

    const s = db.prepare(sql)
    s.run()
}

export function getCourse() {
    const sql = `
    select * from Course;
    `

    const s = db.prepare(sql)
    const rows = s.all()
    return rows;
}

export function addCourse(name) {
    const sql = `
    INSERT INTO Course(Name) VALUES('${name}');
    `
    const s = db.prepare(sql)
    s.run()
}

export function getResult() {
    const sql = `
    select r.ID, s.FirstName, s.LastName, r.Grade, c.Name
    from Result r
    join Course c ON(c.ID = r.CourseID)
    join Student s ON(s.ID = r.StudentID);
    `

    const s = db.prepare(sql)
    const rows = s.all()
    return rows;
}

export function addResult(studentid, courseid, grade) {
    const sql = `
    INSERT INTO Result(StudentID, CourseID, Grade) VALUES('${studentid}', '${courseid}', '${grade}');
    `
    const s = db.prepare(sql)
    s.run()
}