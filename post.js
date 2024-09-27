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
            alert("ได้รับแล้วจั๊ฟผม");
        } else {
            alert("ยังไม่เข้าจั๊ฟพรี่!!!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("ยังไม่เข้าจั๊ฟพรี่!!!");
    }
}