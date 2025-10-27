import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('About Me');
  const [isBlinking, setIsBlinking] = useState(false);
  const [images, setImages] = useState([
    { id: 1, src: createBuildingImage() },
    { id: 2, src: createBuildingImage() },
    { id: 3, src: createBuildingImage() },
  ]);

  // Create gradient building images
  function createBuildingImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik00MCA1MEwwIDQwTDAgMTEwTDQwIDEwMEw0MCA1MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTEwMCA3MEw2MCA2MEw2MCAxMzBMMTAwIDEyMEwxMDAgNzB6IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik0xNjAgOTBMMTIwIDgwTDEyMCAxNTBMMTYwIDE0MEwxNjAgOTB6IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMSIvPjxsaW5lIHgxPSIwIiB5MT0iNzAiIHgyPSIxMDAiIHkyPSI2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI1LDUiIG9wYWNpdHk9IjAuMTUiLz48bGluZSB4MT0iMCIgeTE9IjkwIiB4Mj0iMTYwIiB5Mj0iODAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNSw1IiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+';
  }

  const handleAddImage = () => {
    const newImage = {
      id: Date.now(),
      src: createBuildingImage()
    };
    setImages([...images, newImage]);
  };

  const handleQuestionClick = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 300);
  };

  return (
    <div className="app-container">
      {/* Empty left half */}
      <div className="left-section"></div>

      {/* Right half with widgets */}
      <div className="right-section">
        {/* Profile Card - Combined */}
        <div className="profile-card-combined">
          {/* Navigation section */}
          <div className="nav-section">
            <div className={`question-icon ${isBlinking ? 'blink' : ''}`} onClick={handleQuestionClick}>?</div>
            
            {/* Navigation tabs */}
            <div className="nav-tabs">
              <button 
                className={`tab ${activeTab === 'About Me' ? 'active' : ''}`}
                onClick={() => setActiveTab('About Me')}
              >
                About Me
              </button>
              <button 
                className={`tab ${activeTab === 'Experiences' ? 'active' : ''} ${isBlinking ? 'blink-tab' : ''}`}
                onClick={() => setActiveTab('Experiences')}
              >
                Experiences
              </button>
              <button 
                className={`tab ${activeTab === 'Recommended' ? 'active' : ''} ${isBlinking ? 'blink-tab' : ''}`}
                onClick={() => setActiveTab('Recommended')}
              >
                Recommended
              </button>
            </div>
          </div>

          {/* Content section */}
          <div className="profile-content">
            <div className="grid-icon">
              <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
            <div className="scrollable-content">
              <p>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Card */}
        <div className="content-card gallery-card">
          <div className="gallery-card-header">
            <div className={`question-icon-small ${isBlinking ? 'blink' : ''}`} onClick={handleQuestionClick}>?</div>
            <button className="gallery-btn">Gallery</button>
            <button className="add-image-btn" onClick={handleAddImage}>
              + ADD IMAGE
            </button>
            <div className="arrow-buttons">
              <button className="arrow-btn prev">
                ←
              </button>
              <button className={`arrow-btn next active ${isBlinking ? 'blink-arrow' : ''}`}>
                →
              </button>
            </div>
          </div>
          
          <div className="gallery-content-wrapper">
            <div className="grid-icon">
              <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
            
            <div className="gallery-images">
              {images.map((img, index) => (
                <div key={img.id} className="image-thumbnail">
                  <img src={img.src} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
