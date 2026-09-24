// App.js
import React, { useState } from 'react';
import './App.css'; // Import file CSS

// 3. Component cháu: StudentItem
const StudentItem = ({ name, score }) => {
  // Logic kiểm tra Đạt/Trượt
  const isPassed = parseFloat(score) >= 5;
  const statusText = isPassed ? 'Đạt' : 'Trượt';
  
  // Gán class CSS linh hoạt dựa trên trạng thái (Template Literals)
  const statusClass = isPassed ? 'status-passed' : 'status-failed';

  return (
    <li className={`student-item ${statusClass}`}>
      {`Họ tên: ${name} - Điểm: ${score} (${statusText})`}
    </li>
  );
};

// 2. Component con: StudentList
const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <StudentItem key={index} name={student.name} score={student.score} />
      ))}
    </ul>
  );
};

// 1. Component cha: App
const App = () => {
  // State quản lý danh sách sinh viên
  const [students, setStudents] = useState([
    { name: 'Nguyễn Văn A', score: 8.5 },
    { name: 'Trần Thị B', score: 4 },
    { name: 'dm đông ma', score: 20000000000 }
  ]);

  // State quản lý form
  const [newName, setNewName] = useState('');
  const [newScore, setNewScore] = useState('');

  // Hàm xử lý thêm sinh viên
  const handleAddStudent = (e) => {
    e.preventDefault(); 
    
    if (!newName.trim() || !newScore.trim()) {
      alert('Vui lòng nhập đầy đủ tên và điểm!');
      return;
    }

    const newStudent = { name: newName, score: newScore };
    
    // Cập nhật danh sách mới
    setStudents([...students, newStudent]);
    
    // Làm sạch form
    setNewName('');
    setNewScore('');
  };

  return (
    <div className="container">
      <h1 className="heading">Xin chào!!!</h1>
      <h2 className="heading">Quản lý điểm sinh viên</h2>

      <form className="form-group" onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Tên sinh viên"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Điểm số"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="btn-submit">
          Thêm sinh viên
        </button>
      </form>

      <StudentList students={students} />
    </div>
  );
};

export default App;