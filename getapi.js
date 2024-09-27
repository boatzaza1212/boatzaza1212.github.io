function updateData() {
  // แทนที่ด้วยโค้ดสำหรับดึงข้อมูลของคุณ
  fetch('https://206.189.146.138/api/sensors')
  .then(response => response.json())
  .then(data => {
    document.getElementById('timestamp').textContent = data.timestamp;
    document.getElementById('temperature').textContent = data.temperature.toFixed(2);
    document.getElementById('humidity').textContent = data.humidity.toFixed(2);
    document.getElementById('luxsensor').textContent = data.luxsensor.toFixed(2);
    document.getElementById('motion').textContent = data.motion;
  });
}
setInterval(updateData, 1000); // เรียกใช้ฟังก์ชัน updateData ทุก 1000 มิลลิวินาที (1 วินาที)

// <script src="get.js"></script> วิธีเรียกหา js