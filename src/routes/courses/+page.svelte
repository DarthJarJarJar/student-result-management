<script>
    import SideBar from '../../components/SideBar.svelte'
    export let form;
    export let data;

</script>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <SideBar></SideBar>

        <div class="col py-3">
        
            <div class="m-5 p-2">
                <h1 class="mb-3">Courses</h1>

                <h4>Add a course</h4>
                <form class="mt-4 mb-4 border p-4" method="POST">
                    {#if form?.success}<p class="success">Course added</p>{/if}

                    {#if form?.missing}<p class="error">Please fill all the fields</p>{/if}

                    <div class="mb-3">
                      <label for="name" class="form-label">Course Name</label>
                      <input type="text" value={form?.name ?? ''} class="form-control" id="name" name="name">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>

                  <h4>Current courses</h4>
                  {#if data.courses}
                  <table class="table border p-4 mt-4">
                    <thead>
                      <tr>
                        <th scope="col">Course Name</th>
                      </tr>
                    </thead>
                    <tbody>
                        {#each data.courses as course}
                        <tr>
                            <td>{course.Name}</td>
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
