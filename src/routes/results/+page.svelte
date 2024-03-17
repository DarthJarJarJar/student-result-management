<script>
    import SideBar from '../../components/SideBar.svelte'
    export let form;
    export let data;
    let grades = ['A', 'B', 'C', 'D', 'E', 'F']

</script>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <SideBar></SideBar>

        <div class="col py-3">
        
            <div class="m-5 p-2">
                <h1 class="mb-3">Results</h1>

                <h4>Add a result</h4>
                <form class="mt-4 mb-4 border p-4" method="POST">
                    {#if form?.success}<p class="success">Result added</p>{/if}

                    {#if form?.missing}<p class="error">Please fill all the fields</p>{/if}

                    <div class="mb-3">
                      <label for="name" class="form-label">Student Name</label>
                      <!-- <input type="text" value={form?.name ?? ''} class="form-control" id="name" name="name"> -->
                      <select class="form-select" name="studentid" value="" >
                        <option selected>Select student</option>
                        {#each data.students as student}
                        <option value={student.ID}>{student.FirstName + " " + student.LastName}</option>
                        {/each}
                      </select>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Course Name</label>
                        <!-- <input type="text" value={form?.name ?? ''} class="form-control" id="name" name="name"> -->
                        <select class="form-select" name="courseid" value="">
                          <option selected>Select course</option>
                          {#each data.courses as course}
                          <option value={course.ID}>{course.Name}</option>
                          {/each}
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="name" class="form-label">Grade</label>
                        <!-- <input type="text" value={form?.name ?? ''} class="form-control" id="name" name="name"> -->
                        <select class="form-select"  name="grade" value="">
                          <option selected>Select Grade</option>
                          {#each grades as grade}
                          <option value={grade}>{grade}</option>
                          {/each}
                        </select>
                      </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>

                  <h4>Current courses</h4>
                  {#if data.result}
                  <table class="table border p-4 mt-4">
                    <thead>
                      <tr>
                        <th scope="col">Course</th>
                        <th scope="col">Student</th>
                        <th scope="col">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                        {#each data.result as result}
                        <tr>
                            <td>{result.Name}</td>
                            <td>{result.FirstName + " " + result.LastName}</td>
                            <td>{result.Grade}</td>
                          </tr>
                        {/each}
                    </tbody>
                  </table>
                {:else}
                <p>No courses added yet!</p>
                  {/if}
                  
                  
            </div>

        </div>
    </div>
</div>


<style>

    .error {
        color: red;
    }

    .success {
        color: green;
    }
</style>
