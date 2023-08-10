const addstdbtn = document.getElementById("addexamdata")

async function addexamdatat() {
    addstdbtn.innerText = "Saving.."
    addstdbtn.disabled = true;

    const addexamtype = document.getElementById("addexamtype").value;
    const addexamdate = document.getElementById("addexamdate").value;
    const addexamroll = document.getElementById("addexamroll").value;
    const addfullmarks = document.getElementById("addfullmarks").value;
    const addexammarks = document.getElementById("addexammarks").value;

    try {
        const response = await fetch(`https://server-as2k.onrender.com/24278updateresult/${addexamroll}/${addexamtype}/${addexamdate}/${addfullmarks}/${addexammarks}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            addstdbtn.innerText = "Saved";
            addstdbtn.classList.add("bg-success", "text-white", "border", "border-success");
            
            try {
                const response = await fetch(`https://server-as2k.onrender.com/getEmail/${addexamroll}`, {
                    method: 'GET', // Using GET method
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                const responseData = await response.json();
                console.log(responseData);
        
                if (response.ok) {
                    const email = responseData.email;
                    const data = {
                        email:email
                    };
                
                    try {
                        const response = await fetch(`https://server-as2k.onrender.com/24278sendresultemail/${addexamtype}`, {
                            method: 'POST', // Using POST method
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data) // Convert the data object to JSON string
                        });
                
                        const responseData = await response.json();
                        console.log(responseData);
                
                        if (response.ok) {
                          alert("Email are sent to the Student about his Result")
                        } else {
                           alert("Failed Stage 2")
                        }
                    } catch (error) {
                        console.error("Error:", error);
                    }
                  
                } else {
                alert("Error Ocurred while Delivering Mail Stage 1")
                }
            } catch (error) {
                console.error("Error:", error);
            }
       

        } else {
            addstdbtn.innerText = "Failed";
            addstdbtn.classList.add("bg-danger", "text-white", "border", "border-danger");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setTimeout(() => {
            addstdbtn.disabled = false;
            addstdbtn.innerText = "Save Student's Marks"
            addstdbtn.classList.remove("bg-danger", "text-white", "border", "border-danger");
            addstdbtn.classList.remove("bg-success", "text-white", "border", "border-success");
        }
        , 1500);

    }
}
