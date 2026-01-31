'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function PhotoBooth() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState(1);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Available frames
  const frames = [
    { id: 1, name: 'Golden Frame', image: '/frames/frame1.png' },
    { id: 2, name: 'I\'m Attending', image: '/frames/frame2.png' },
    { id: 3, name: 'Sacred Symbols', image: '/frames/frame3.png' },
    { id: 4, name: 'Event Badge', image: '/frames/frame4.png' },
  ];

  // Start camera
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 1280, height: 720 },
        audio: false
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsCameraActive(false);
    }
  };

  // Capture photo
  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Set canvas size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame (user's photo)
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Add decorative border
    context.strokeStyle = '#FFD700';
    context.lineWidth = 20;
    context.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Add inner border
    context.strokeStyle = '#D4AF37';
    context.lineWidth = 5;
    context.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Add top banner background
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, 120);

    // Add bottom banner background
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, canvas.height - 120, canvas.width, 120);

    // Add branding text at top
    context.font = 'bold 50px Arial';
    context.fillStyle = '#FFD700';
    context.strokeStyle = '#000000';
    context.lineWidth = 4;
    context.textAlign = 'center';
    
    // Event name at top
    context.strokeText('RATNATRAY 2026', canvas.width / 2, 70);
    context.fillText('RATNATRAY 2026', canvas.width / 2, 70);
    
    // Date at bottom
    context.font = 'bold 40px Arial';
    context.strokeText('January 27, 2026 • 7:00 PM', canvas.width / 2, canvas.height - 50);
    context.fillText('January 27, 2026 • 7:00 PM', canvas.width / 2, canvas.height - 50);

    // Add hashtag
    context.font = 'bold 30px Arial';
    context.fillStyle = '#FFFFFF';
    context.strokeText('#Ratnatray #Jinshasan', canvas.width / 2, canvas.height - 15);
    context.fillText('#Ratnatray #Jinshasan', canvas.width / 2, canvas.height - 15);

    // Convert to image
    const imageData = canvas.toDataURL('image/png');
    setCapturedImage(imageData);
    stopCamera();
  };

  // Download photo
  const downloadPhoto = () => {
    if (!capturedImage) return;

    const link = document.createElement('a');
    link.download = `ratnatray-2026-${Date.now()}.png`;
    link.href = capturedImage;
    link.click();
  };

  // Share to social media
  const sharePhoto = async (platform: string) => {
    if (!capturedImage) return;

    const text = 'Join me at Ratnatray 2026! 🎭✨ #Ratnatray #Jinshasan #CulturalEvent';
    
    switch (platform) {
      case 'whatsapp':
        // Convert base64 to blob for sharing
        const blob = await (await fetch(capturedImage)).blob();
        const file = new File([blob], 'ratnatray-2026.png', { type: 'image/png' });
        
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Ratnatray 2026',
              text: text,
              files: [file]
            });
          } catch (error) {
            console.log('Share cancelled or failed');
          }
        } else {
          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }
        break;
        
      case 'facebook':
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
        break;
        
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
        break;
        
      case 'instagram':
        alert('Download the photo and share it to your Instagram story!');
        downloadPhoto();
        break;
    }
  };

  // Reset and retake
  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };

  // Close booth
  const closeBooth = () => {
    stopCamera();
    setCapturedImage(null);
    setIsOpen(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => {
          setIsOpen(true);
          setTimeout(startCamera, 300);
        }}
        className="photo-booth-trigger"
      >
        <span className="booth-icon">📸</span>
        <span className="booth-text">Try Photo Booth</span>
      </button>

      {/* Photo Booth Modal */}
      {isOpen && (
        <div className="photo-booth-modal">
          <div className="photo-booth-container">
            {/* Header */}
            <div className="booth-header">
              <h2>📸 Ratnatray Photo Booth</h2>
              <button onClick={closeBooth} className="booth-close">✕</button>
            </div>

            {/* Main Content */}
            <div className="booth-content">
              {!capturedImage ? (
                <>
                  {/* Camera View */}
                  <div className="camera-container">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="camera-video"
                    />
                    
                    {/* Frame Overlay */}
                    {isCameraActive && (
                      <div className="frame-overlay">
                        <Image
                          src={frames[selectedFrame - 1].image}
                          alt="Frame"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )}

                    {/* Loading State */}
                    {!isCameraActive && (
                      <div className="camera-loading">
                        <div className="loading-spinner"></div>
                        <p>Starting camera...</p>
                      </div>
                    )}
                  </div>

                  {/* Frame Selection */}
                  <div className="frame-selector">
                    <p className="selector-label">Choose Frame:</p>
                    <div className="frame-options">
                      {frames.map((frame) => (
                        <button
                          key={frame.id}
                          onClick={() => setSelectedFrame(frame.id)}
                          className={`frame-option ${selectedFrame === frame.id ? 'active' : ''}`}
                        >
                          <div className="frame-preview">
                            <Image
                              src={frame.image}
                              alt={frame.name}
                              width={80}
                              height={80}
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                          <span className="frame-name">{frame.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Capture Button */}
                  <button 
                    onClick={capturePhoto}
                    disabled={!isCameraActive}
                    className="capture-button"
                  >
                    <span className="capture-icon">📷</span>
                    <span>Capture Photo</span>
                  </button>
                </>
              ) : (
                <>
                  {/* Preview Captured Photo */}
                  <div className="photo-preview">
                    <img src={capturedImage} alt="Captured" className="preview-image" />
                  </div>

                  {/* Action Buttons */}
                  <div className="photo-actions">
                    <button onClick={retakePhoto} className="action-btn retake">
                      <span>🔄</span> Retake
                    </button>
                    <button onClick={downloadPhoto} className="action-btn download">
                      <span>⬇️</span> Download
                    </button>
                  </div>

                  {/* Share Buttons */}
                  <div className="share-section">
                    <p className="share-label">Share on:</p>
                    <div className="share-buttons">
                      <button onClick={() => sharePhoto('whatsapp')} className="share-btn whatsapp">
                        <span>📱</span> WhatsApp
                      </button>
                      <button onClick={() => sharePhoto('instagram')} className="share-btn instagram">
                        <span>📸</span> Instagram
                      </button>
                      <button onClick={() => sharePhoto('facebook')} className="share-btn facebook">
                        <span>👥</span> Facebook
                      </button>
                      <button onClick={() => sharePhoto('twitter')} className="share-btn twitter">
                        <span>🐦</span> Twitter
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Hidden Canvas for Processing */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        </div>
      )}
    </>
  );
}
