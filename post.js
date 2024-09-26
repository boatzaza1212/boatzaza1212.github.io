async function submitData() {
    // รับข้อมูลจากฟอร์ม
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;

    // สร้างข้อมูลในรูปแบบ JSON
    const data = {
        id: studentId,
        name: studentName
    };

    // ส่งข้อมูลไปยัง API โดยใช้ fetch
    try {
        const response = await fetch("http://206.189.146.138/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("ส่งไปแล้วจู้");
        } else {
            alert("ส่งบ่ได้เด้ออออ!!!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("ส่งบ่ได้เด้ออออ!!!");
    }
}