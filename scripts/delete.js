const addstdbtn = document.getElementById("deletebtn")

async function deleteStudent() {
    addstdbtn.innerText = "Deleting"
    addstdbtn.disabled = true;

    const roll = document.getElementById("deleteroll").value;

    try {
        const response = await fetch(`https://server-as2k.onrender.com/24278deletestudent/${roll}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            addstdbtn.innerText = "Deleted";
            addstdbtn.classList.add("bg-success", "text-white", "border", "border-success");

       

        } else {
            addstdbtn.innerText = "Failed";
            addstdbtn.classList.add("bg-danger", "text-white", "border", "border-danger");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setTimeout(() => {
            addstdbtn.disabled = false;
            addstdbtn.innerText = "Delete Student"
            addstdbtn.classList.remove("bg-danger", "text-white", "border", "border-danger");
            addstdbtn.classList.remove("bg-success", "text-white", "border", "border-success");
        }
        , 1500);

    }
}
