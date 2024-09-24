import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Event-Handler für Datei-Drop
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    
    const droppedFile = event.dataTransfer.files[0];
    
    // Überprüfen, ob die Datei ein Bild ist (jpg oder png)
    if (droppedFile && (droppedFile.type === "image/jpeg" || droppedFile.type === "image/png")) {
      setFile(droppedFile);
    } else {
      alert("Bitte laden Sie nur Bilder (jpg oder png) hoch.");
    }
  };

  // Dragging-Events verhindern das Standardverhalten
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDeleteFile = () => {
    setFile(null); // Setzt den Dateinamen zurück
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sem. 5 Softwareprojekt - Gruppe 2</h1>
        
        <div
          className={`dropzone ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {isDragging ? (
            <p>Loslassen zum Hochladen</p>
          ) : (
            <p>Ziehen Sie ein Bild hierher</p>
          )}
        </div>
        
        <div className={`output ${file ? 'visible' : 'visible'}`}>
            {/* Toolbar section */}
            <div className="toolbar">
              <button className="tool-button">✏️</button>
              <button className="tool-button">🔲</button>
              <button className="tool-button">🖌️</button>
              {/* Add more tool buttons here */}
            </div>

            {file ? (
              <div className="file-preview">
                <img src={URL.createObjectURL(file)} alt="Preview" className="image-preview" />
              </div>
            ) : (
              <p>Preview</p>
            )}
        </div>

        {file ? (
          <img 
            src="https://img.icons8.com/ios-glyphs/30/ffffff/trash.png" 
            alt="Delete" 
            className="trash-icon"
            onClick={handleDeleteFile}
          />
        ) : ""}

      </header>
    </div>
  );
}

export default App;
