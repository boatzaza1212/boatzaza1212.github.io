function updateData() {
  // ทำการเรียกข้อมูลจาก API ของเซ็นเซอร์ที่อยู่บน server ผ่าน URL ที่กำหนด
  fetch("https://206.189.146.138/api/sensors")
    .then((response) => response.json()) // เมื่อได้ response กลับมา ให้แปลงข้อมูลเป็น JSON
    .then((data) => {
      // เมื่อแปลงเป็น JSON สำเร็จ จะได้ข้อมูลที่ส่งมาในตัวแปร data
      // นำค่าที่ได้จาก data มาแสดงในองค์ประกอบของ HTML ที่มี id = 'timestamp'
      document.getElementById("timestamp").textContent = data.timestamp;
      // แสดงค่า temperature โดยการปรับให้เป็นทศนิยม 2 ตำแหน่ง
      document.getElementById("temperature").textContent =
        data.temperature.toFixed(2);
      // แสดงค่า humidity โดยการปรับให้เป็นทศนิยม 2 ตำแหน่ง
      document.getElementById("humidity").textContent =
        data.humidity.toFixed(2);
      // แสดงค่า luxsensor โดยการปรับให้เป็นทศนิยม 2 ตำแหน่ง
      document.getElementById("luxsensor").textContent =
        data.luxsensor.toFixed(2);
      // แสดงค่าสถานะของ motion (อาจเป็น true/false หรือข้อความ)
      document.getElementById("motion").textContent = data.motion;
    });
}

// เรียกใช้ฟังก์ชัน updateData ทุก 1000 มิลลิวินาที (1 วินาที) เพื่ออัปเดตข้อมูลอย่างต่อเนื่อง
setInterval(updateData, 1000);

// <script src="get.js"></script> วิธีการเรียกใช้ไฟล์ JavaScript ภายนอก (เช่น ไฟล์นี้ที่ชื่อ get.js)
