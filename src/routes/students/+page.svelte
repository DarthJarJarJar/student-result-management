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
                <h1 class="mb-3">Students</h1>

                <h4>Add a student</h4>
                <form class="mt-4 mb-4 border p-4" method="POST">
                    {#if form?.success}<p class="success">Student added</p>{/if}

                    {#if form?.missing}<p class="error">Please fill all the fields</p>{/if}

                    <div class="mb-3">
                      <label for="firstName" class="form-label">First Name</label>
                      <input type="text" value={form?.firstName ?? ''} class="form-control" id="firstName" name="firstName">
                    </div>
                    <div class="mb-3">
                        <label for="familyName" class="form-label">Family Name</label>
                        <input type="text" value={form?.lastName ?? ''} class="form-control" id="familyName" name="lastName" >
                    </div>
                    <div class="mb-3">
                        <label for="dateOfBirth" class="form-label">Date Of Birth</label>
                        <input type="date" value={form?.dob ?? ''} class="form-control" id="dateOfBirth"  name="dob">
                        {#if form?.error}<p class="error">Student must be atleast 10 years old</p>{/if}

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>

                  <h4>Current students</h4>
                  <table class="table border p-4 mt-4">
                    <thead>
                      <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Date of Birth</th>
                      </tr>
                    </thead>
                    <tbody>
                        {#each data.stu as student}
                        <tr>
                            <td>{student.FirstName}</td>
                            <td>{student.LastName}</td>
                            <td>{student.DOB}</td>
                          </tr>
                        {/each}
                    </tbody>
                  </table>

                  
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
