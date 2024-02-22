// CourseCreate.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from '../Auth/AuthContext';

function CourseCreate() {
  const { userId,token } = useAuth();
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [previewVideo, setPreviewVideo] = useState(''); // New input for preview video URL
  const navigate = useNavigate();
  console.log('User Object:', userId);
  const handleCreateCourse = async () => {
    console.log(token);
    try {
      const response = await fetch('http://localhost:8000/api/courses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          teacher : userId,
          title,
          mode,
          category,
          price,
          description,
          preview_video: previewVideo, // Include the preview_video in the request body
        }),
      });

      if (response.ok) {
        console.log('Course created successfully!');
        navigate('/teacherdashboard');
      } else {
        console.error('Failed to create course.');
      }
    } catch (error) {
      console.error('Error during course creation:', error);
    }
  };

  return (
    <div>
      <h1>Create New Course</h1>
      <form>
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Course Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="mode" className="form-label">Mode</label>
          <input type="text" className="form-control" id="mode" value={mode} onChange={(e) => setMode(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="previewVideo" className="form-label">Preview Video URL</label>
          <input type="text" className="form-control" id="previewVideo" value={previewVideo} onChange={(e) => setPreviewVideo(e.target.value)} />
        </div>

        <Button variant="primary" onClick={handleCreateCourse}>
          Create Course
        </Button>
      </form>
    </div>
  );
}

export default CourseCreate;
