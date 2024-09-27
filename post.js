async function submitData() {
  // รับข้อมูลจากฟอร์ม
  const studentName = document.getElementById("studentName").value;
  const studentID = document.getElementById("studentID").value; 

  // สร้างข้อมูลในรูปแบบ JSON
  const data = {
      id: studentID,
      name: studentName
  };

  // ส่งข้อมูลไปยัง API โดยใช้ fetch
  try {
      const response = await fetch("https://206.189.146.138/api/students", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          alert("Successfully");
      } else {
          alert("!ERROR!");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("!ERROR!");
  }
}