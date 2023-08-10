const addstdbtn = document.getElementById("onetrasnfernote");

async function onetransfernotes() {
    addstdbtn.innerText = "Transferring..";
    addstdbtn.disabled = true;

    const updateoneroll = document.getElementById("updateoneroll").value;
    const updateonesubject = document.getElementById("updateonesubject").value;
    const updateonenotename = document.getElementById("updateonenotename").value;
    const upadteonenotelink = document.getElementById("upadteonenotelink").value;
    const updateonechapter = document.getElementById("updateonechapter").value;


    const data = {
        note_name: updateonenotename,
        note_link: upadteonenotelink,
        order:updateonechapter
    };

    try {
        const response = await fetch(`https://server-as2k.onrender.com/24278updatenoteone/${updateonesubject}/${updateoneroll}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log(responseData);

        if (response.ok) {
            addstdbtn.innerText = "Transffered";
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
            addstdbtn.innerText = "Transfer Note"
            addstdbtn.classList.remove("bg-danger", "text-white", "border", "border-danger");
            addstdbtn.classList.remove("bg-success", "text-white", "border", "border-success");
        }
        , 1500);

    }
}
