async function submitData() {
  // ฟังก์ชัน submitData ถูกประกาศเป็นแบบ asynchronous เพื่อให้สามารถใช้คำสั่ง await ภายในฟังก์ชันได้

  // รับข้อมูลจาก input ที่มี id เป็น "studentName" และ "studentID" และเก็บในตัวแปร
  const studentName = document.getElementById("studentName").value; // ดึงค่าชื่อจากฟอร์ม
  const studentID = document.getElementById("studentID").value; // ดึงค่า ID นักเรียนจากฟอร์ม

  // สร้างออบเจ็กต์ data ในรูปแบบ JSON โดยมีฟิลด์ id และ name
  const data = {
    id: studentID, // ตั้งค่าฟิลด์ id เป็นค่า studentID ที่รับมาจากฟอร์ม
    name: studentName, // ตั้งค่าฟิลด์ name เป็นค่า studentName ที่รับมาจากฟอร์ม
  };

  // เริ่มการส่งข้อมูลไปยัง API โดยใช้ fetch เพื่อทำการ POST ข้อมูลไปยังเซิร์ฟเวอร์
  try {
    const response = await fetch("https://206.189.146.138/api/students", {
      method: "POST", // ใช้วิธีการส่งแบบ POST
      headers: {
        "Content-Type": "application/json", // กำหนดให้ส่งข้อมูลในรูปแบบ JSON
      },
      body: JSON.stringify(data), // แปลงออบเจ็กต์ data ให้เป็นสตริง JSON และส่งเป็น body ของ request
    });

    // ตรวจสอบว่า response ที่ได้รับกลับมานั้นเป็นแบบ success (สถานะ 200) หรือไม่
    if (response.ok) {
      alert("ส่งมาถึงแล้วจั๊ฟพรี่"); // แสดงการแจ้งเตือนว่าการส่งสำเร็จ
    } else {
      alert("!ยังไม่ได้รับเลยจั๊ฟพรี่!"); // แสดงการแจ้งเตือนว่าการส่งไม่สำเร็จ
    }
  } catch (error) {
    // ถ้ามีข้อผิดพลาดระหว่างการส่งข้อมูลจะจับและแสดงใน console
    console.error("Error:", error); // แสดงข้อผิดพลาดใน console
    alert("!ยังไม่ได้รับเลยจั๊ฟพรี่!"); // แสดงการแจ้งเตือนว่ามีข้อผิดพลาด
  }
}
