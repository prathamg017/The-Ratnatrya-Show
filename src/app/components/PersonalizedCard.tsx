'use client';

import { useEffect, useRef, useState } from 'react';

export default function PersonalizedCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'camera' | 'adjust' | 'name' | 'preview'>('camera');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [adjustedImage, setAdjustedImage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [finalCard, setFinalCard] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cropPosition, setCropPosition] = useState({ x: 0, y: 0, scale: 1 });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Set canvas size for full photo
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to image
    const imageData = canvas.toDataURL('image/png');
    setCapturedImage(imageData);
    stopCamera();
    setStep('adjust');
  };

  // Apply crop and create adjusted image
  const applyCrop = () => {
    if (!capturedImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Create square crop for circular display
    const size = 800;
    canvas.width = size;
    canvas.height = size;

    const img = new window.Image();
    img.src = capturedImage;
    
    img.onload = () => {
      // Calculate crop area based on position and scale
      const scale = cropPosition.scale;
      const sourceSize = Math.min(img.width, img.height) / scale;
      const sx = (img.width - sourceSize) / 2 + cropPosition.x;
      const sy = (img.height - sourceSize) / 2 + cropPosition.y;

      // Draw cropped and scaled image
      context.drawImage(
        img,
        sx, sy, sourceSize, sourceSize,
        0, 0, size, size
      );

      const croppedData = canvas.toDataURL('image/png');
      setAdjustedImage(croppedData);
      setStep('name');
    };
  };

  // Generate final card
  const generateCard = () => {
    if (!adjustedImage || !userName || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Load the VIP card template
    const vipTemplate = new window.Image();
    vipTemplate.crossOrigin = 'anonymous';
    vipTemplate.src = '/vip-card-template.png';
    
    vipTemplate.onload = () => {
      // Set canvas dimensions (9:16 ratio)
      canvas.width = 1080;
      canvas.height = 1920;

      // Draw the VIP template as background
      context.drawImage(vipTemplate, 0, 0, canvas.width, canvas.height);

      // Calculate positions (based on template design)
      const photoY = 580; // Center of circular area
      const photoRadius = 220; // Size of photo circle
      const nameY = 900; // Position for name on golden ribbon

      // Draw user photo (circular) in the template's circular frame
      context.save();
      context.beginPath();
      context.arc(canvas.width / 2, photoY, photoRadius, 0, Math.PI * 2);
      context.closePath();
      context.clip();
      
      const userImg = new window.Image();
      userImg.src = adjustedImage;
      userImg.onload = () => {
        // Draw user photo centered in the circle
        context.drawImage(
          userImg, 
          canvas.width / 2 - photoRadius, 
          photoY - photoRadius, 
          photoRadius * 2, 
          photoRadius * 2
        );
        context.restore();

        // Add user name on the golden ribbon
        context.font = 'bold 65px Georgia, serif';
        context.fillStyle = '#8B4513'; // Dark brown for contrast on gold ribbon
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Add subtle shadow for depth
        context.shadowColor = 'rgba(0, 0, 0, 0.3)';
        context.shadowBlur = 4;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        
        context.fillText(userName, canvas.width / 2, nameY);
        
        // Reset shadow
        context.shadowColor = 'transparent';
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;

        // Convert to final image
        const cardData = canvas.toDataURL('image/png');
        setFinalCard(cardData);
        setStep('preview');
      };
    };

    vipTemplate.onerror = () => {
      alert('Unable to load VIP card template. Please try again.');
    };
  };

  // Download card
  const downloadCard = () => {
    if (!finalCard) return;

    const link = document.createElement('a');
    link.download = `ratnatray-invitation-${userName.replace(/\s+/g, '-')}.png`;
    link.href = finalCard;
    link.click();
  };

  // Share card
  const shareCard = async (platform: string) => {
    if (!finalCard) return;

    const text = `${userName} आपको रत्नत्रय - सागर में आमंत्रित करते हैं! 🎭✨\n27 जनवरी 2026 • शाम 7:00 बजे\n#रत्नत्रय #जिनशासन`;
    
    switch (platform) {
      case 'whatsapp':
        const blob = await (await fetch(finalCard)).blob();
        const file = new File([blob], 'ratnatray-invitation.png', { type: 'image/png' });
        
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Ratnatray Invitation',
              text: text,
              files: [file]
            });
          } catch (error) {
            console.log('Share cancelled');
          }
        } else {
          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }
        break;
        
      case 'instagram':
        alert('कार्ड डाउनलोड करें और अपनी Instagram स्टोरी पर शेयर करें!');
        downloadCard();
        break;
    }
  };

  // Reset
  const reset = () => {
    setCapturedImage(null);
    setUserName('');
    setFinalCard(null);
    setStep('camera');
    startCamera();
  };

  // Close
  const close = () => {
    stopCamera();
    setCapturedImage(null);
    setUserName('');
    setFinalCard(null);
    setStep('camera');
    setIsOpen(false);
  };

  // Cleanup
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
        className="personalized-card-trigger"
      >
        <span className="card-icon">🎴</span>
        <span className="card-text">अपना निमंत्रण कार्ड बनाएं</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="personalized-card-modal">
          <div className="personalized-card-container">
            {/* Header */}
            <div className="card-header">
              <h2>🎴 व्यक्तिगत निमंत्रण कार्ड</h2>
              <button onClick={close} className="card-close">✕</button>
            </div>

            {/* Content */}
            <div className="card-content">
              {/* Step 1: Camera */}
              {step === 'camera' && (
                <>
                  <div className="camera-container">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="camera-video"
                    />
                    
                    {!isCameraActive && (
                      <div className="camera-loading">
                        <div className="loading-spinner"></div>
                        <p>कैमरा शुरू हो रहा है...</p>
                      </div>
                    )}
                  </div>

                  <p className="instruction-text">📸 अपनी फोटो लें</p>

                  <button 
                    onClick={capturePhoto}
                    disabled={!isCameraActive}
                    className="capture-button"
                  >
                    <span className="capture-icon">📷</span>
                    <span>फोटो लें</span>
                  </button>
                </>
              )}

              {/* Step 2: Adjust Photo on Card Template */}
              {step === 'adjust' && capturedImage && (
                <>
                  <p className="instruction-text">📐 अपनी फोटो को कार्ड पर सेट करें</p>
                  
                  <div className="card-template-adjust">
                    {/* VIP Card Template Background */}
                    <div className="template-preview">
                      <img src="/vip-card-template.png" alt="Card Template" className="template-bg" />
                      
                      {/* User Photo Overlay (adjustable) */}
                      <div 
                        className="photo-overlay"
                        style={{
                          top: `${30 + cropPosition.y}%`,
                          left: `50%`,
                          transform: `translate(-50%, -50%) scale(${cropPosition.scale})`,
                        }}
                      >
                        <img src={capturedImage} alt="Your photo" />
                      </div>
                    </div>
                  </div>

                  <div className="adjust-controls">
                    <label>
                      🔍 आकार: {cropPosition.scale.toFixed(1)}x
                      <input
                        type="range"
                        min="0.3"
                        max="1.5"
                        step="0.05"
                        value={cropPosition.scale}
                        onChange={(e) => setCropPosition({...cropPosition, scale: parseFloat(e.target.value)})}
                        className="slider"
                      />
                    </label>

                    <label>
                      ↕️ स्थिति (ऊपर/नीचे): {cropPosition.y}%
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        step="0.5"
                        value={cropPosition.y}
                        onChange={(e) => setCropPosition({...cropPosition, y: parseFloat(e.target.value)})}
                        className="slider"
                      />
                    </label>
                  </div>

                  <div className="button-group">
                    <button onClick={() => setStep('camera')} className="btn-secondary">
                      🔙 वापस जाएं
                    </button>
                    <button onClick={applyCrop} className="btn-primary">
                      आगे बढ़ें ✓
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Name Input */}
              {step === 'name' && (
                <>
                  <div className="photo-preview-small">
                    <img src={capturedImage || ''} alt="Your photo" />
                  </div>

                  <div className="name-input-section">
                    <label htmlFor="userName">अपना नाम दर्ज करें:</label>
                    <input
                      id="userName"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="आपका नाम"
                      className="name-input"
                      autoFocus
                    />
                  </div>

                  <div className="button-group">
                    <button onClick={() => setStep('camera')} className="btn-secondary">
                      🔙 वापस जाएं
                    </button>
                    <button 
                      onClick={generateCard}
                      disabled={!userName.trim()}
                      className="btn-primary"
                    >
                      कार्ड बनाएं ✨
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Preview */}
              {step === 'preview' && finalCard && (
                <>
                  <div className="card-preview">
                    <img src={finalCard} alt="Your invitation card" />
                  </div>

                  <div className="card-actions">
                    <button onClick={reset} className="action-btn retake">
                      🔄 नया कार्ड बनाएं
                    </button>
                    <button onClick={downloadCard} className="action-btn download">
                      ⬇️ डाउनलोड करें
                    </button>
                  </div>

                  <div className="share-section">
                    <p className="share-label">शेयर करें:</p>
                    <div className="share-buttons">
                      <button onClick={() => shareCard('whatsapp')} className="share-btn whatsapp">
                        📱 WhatsApp
                      </button>
                      <button onClick={() => shareCard('instagram')} className="share-btn instagram">
                        📸 Instagram
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Hidden Canvas */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        </div>
      )}
    </>
  );
}
