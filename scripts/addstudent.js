const addstdbtn = document.getElementById("addstdbtn")

async function addnewstudent() {
    addstdbtn.innerText = "Adding.."
    addstdbtn.disabled = true;

    const addstdname = document.getElementById("addstdname").value;
    const addstdclass = document.getElementById("addstdclass").value;
    const addstdroll = document.getElementById("addstdroll").value;
    const addstdpass = document.getElementById("addstdpass").value;
    const addstdemail = document.getElementById("addstdemail").value;

    console.log(addstdclass, addstdname, addstdpass, addstdroll);
    const email = {
        "email": addstdemail
    }
    try {
        const response = await fetch(`https://server-as2k.onrender.com/24278signup/${addstdname}/${addstdroll}/${addstdpass}/${addstdclass}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            addstdbtn.innerText = "Added";
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
            addstdbtn.innerText = "Add Student"
            addstdbtn.classList.remove("bg-danger", "text-white", "border", "border-danger");
            addstdbtn.classList.remove("bg-success", "text-white", "border", "border-success");
        }
        , 1500);

    }
}
