export const handleTeacherSubmit = (e, setFormType) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', e.target.firstName.value);
    formData.append('lastName', e.target.lastName.value);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('dob', e.target.dob.value);
    formData.append('cv', e.target.cv.value);
    formData.append('address', e.target.address.value);
    
  
    fetch('http://localhost:3001/api/register/teacher', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setFormType('');
      })
      .catch((error) => {
        alert('Error registering teacher:', error);
        console.error('Error:', error);
      });
  };
  
  export const handleStudentSubmit = (e, setFormType) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', e.target.firstName.value);
    formData.append('lastName', e.target.lastName.value);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('school', e.target.school.value);
    formData.append('weakSubjects', e.target.weakSubjects.value);
    formData.append('address', e.target.address.value);
    formData.append('photo', e.target.photo.files[0]);
  
    fetch('http://localhost:3001/api/register/student', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setFormType('');
      })
      .catch((error) => {
        alert('Error registering student:', error);
        console.error('Error:', error);
      });
  };
  
  export const handleLoginSubmit = (e, navigate) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful!') {
          if (data.role === 'student') {
            navigate('/StudentDashboard', { state: { userName: data.firstName, profilePic: data.photo } });
          } else if (data.role === 'teacher') {
            navigate('/TeacherDashboard', { state: { userName: data.firstName } });
          }
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert('Error logging in:', error);
        console.error('Error:', error);
      });
  };
  