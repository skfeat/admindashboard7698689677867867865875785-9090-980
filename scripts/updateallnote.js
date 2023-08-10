const addstdbtn = document.getElementById("alltrasnfernote");

async function transfernotes() {
    addstdbtn.innerText = "Transferring..";
    addstdbtn.disabled = true;

    const updateallclass = document.getElementById("updateallclass").value;
    const updateallsubject = document.getElementById("updateallsubject").value;
    const updateallnotename = document.getElementById("updateallnotename").value;
    const upadteallnotelink = document.getElementById("upadteallnotelink").value;
    const updateallchapter = document.getElementById("updateallchapter").value;

    const data = {
        note_name: updateallnotename,
        note_link: upadteallnotelink,
        order:updateallchapter
    };

    try {
        const response = await fetch(`https://server-as2k.onrender.com/24278updatenotes/${updateallsubject}/${updateallclass}`, {
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
