
'use client';
import {  useCallback, useState,useRef,useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GATE_TEMPLATES  } from '@/data/products'; // adjust the path if needed

export default function Home() {
  const [currentStep, setCurrentStep] = useState('upload');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [aiCoordinates, setAiCoordinates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedTemplateType, setSelectedTemplateType] = useState("straight");
  const [uploadedFile, setUploadedFile] = useState(null);

  const generateAICoordinates = useCallback(() => {
    // Simulate AI-generated rectangle coordinates
    const coordinates = [
      { id: 1, x: 30, y: 70, confidence: 0.95, type: 'top_left_corner' },
      { id: 2, x: 70, y: 70, confidence: 0.92, type: 'top_right_corner' },
      { id: 3, x: 70, y: 93, confidence: 0.89, type: 'bottom_right_corner' },
      { id: 4, x: 30, y: 93, confidence: 0.91, type: 'bottom_left_corner' }
    ];
    setAiCoordinates(coordinates);
    const randomIndex = Math.floor(Math.random() * GATE_TEMPLATES.length);
        const randomTemplate = GATE_TEMPLATES[randomIndex];
        setSelectedTemplate(randomTemplate || GATE_TEMPLATES[0]);
        // setSelectedTemplate(GATE_TEMPLATES[0]);
  }, []);

  const handleFileUpload = useCallback(async (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB.');
      return;
    }

    // Show preview immediately
    setUploadedFile(file);
    setUploadedImage(URL.createObjectURL(file));
    setCurrentStep('processing');

    // Send to backend API
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/analyze-gate", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error(`API returned ${res.status}`);

      const data = await res.json();

      if (data.type && Array.isArray(data.coordinates)) {
        setAiCoordinates(data.coordinates);
        setCurrentStep('selection');
        const matchingTemplate = GATE_TEMPLATES.find(
          (template) => template.templateType?.toLowerCase() === data.type.toLowerCase()
        );
        const randomIndex = Math.floor(Math.random() * GATE_TEMPLATES.length);
        const randomTemplate = GATE_TEMPLATES[randomIndex];
        // console.log(randomTemplate)
        setSelectedTemplate(randomTemplate || GATE_TEMPLATES[0]);
        // setSelectedTemplate(matchingTemplate || GATE_TEMPLATES[0]);
        setSelectedTemplateType(data.type); // enable later if you have filtering
      } else {
        generateAICoordinates();
        setCurrentStep('selection');
      }
    } catch (err) {
      generateAICoordinates();
      setCurrentStep('selection');
    }
  }, []);


  const updateCoordinate = useCallback((id, x, y) => {
    setAiCoordinates(prev => {
      const updatedCoords = [...prev];
      const draggedIndex = updatedCoords.findIndex(coord => coord.id === id);
      
      if (draggedIndex === -1) return prev;
      
      // Update the dragged coordinate
      updatedCoords[draggedIndex] = { ...updatedCoords[draggedIndex], x, y };
      
      // Find the opposite corner (diagonal) that should remain fixed
      let oppositeId, adjacent1Id, adjacent2Id;
      
      if (id === 1) { // Top-left
        oppositeId = 3; // Bottom-right stays fixed
        adjacent1Id = 2; // Top-right moves
        adjacent2Id = 4; // Bottom-left moves
      } else if (id === 2) { // Top-right
        oppositeId = 4; // Bottom-left stays fixed
        adjacent1Id = 1; // Top-left moves
        adjacent2Id = 3; // Bottom-right moves
      } else if (id === 3) { // Bottom-right
        oppositeId = 1; // Top-left stays fixed
        adjacent1Id = 2; // Top-right moves
        adjacent2Id = 4; // Bottom-left moves
      } else if (id === 4) { // Bottom-left
        oppositeId = 2; // Top-right stays fixed
        adjacent1Id = 1; // Top-left moves
        adjacent2Id = 3; // Bottom-right moves
      }
      
      // Get the fixed opposite corner coordinates
      const oppositeCorner = updatedCoords.find(coord => coord.id === oppositeId);
      const adjacent1 = updatedCoords.find(coord => coord.id === adjacent1Id);
      const adjacent2 = updatedCoords.find(coord => coord.id === adjacent2Id);
      
      if (!oppositeCorner || !adjacent1 || !adjacent2) return prev;
      
      // Update adjacent corners to maintain rectangle shape
      if (id === 1) { // Top-left dragged
        // Top-right: same Y as dragged, X from opposite
        updatedCoords.find(coord => coord.id === 2).x = oppositeCorner.x;
        updatedCoords.find(coord => coord.id === 2).y = y;
        // Bottom-left: same X as dragged, Y from opposite
        updatedCoords.find(coord => coord.id === 4).x = x;
        updatedCoords.find(coord => coord.id === 4).y = oppositeCorner.y;
      } else if (id === 2) { // Top-right dragged
        // Top-left: same Y as dragged, X from opposite
        updatedCoords.find(coord => coord.id === 1).x = oppositeCorner.x;
        updatedCoords.find(coord => coord.id === 1).y = y;
        // Bottom-right: same X as dragged, Y from opposite
        updatedCoords.find(coord => coord.id === 3).x = x;
        updatedCoords.find(coord => coord.id === 3).y = oppositeCorner.y;
      } else if (id === 3) { // Bottom-right dragged
        // Top-right: same Y as dragged, X from opposite
        updatedCoords.find(coord => coord.id === 2).x = oppositeCorner.x;
        updatedCoords.find(coord => coord.id === 2).y = y;
        // Bottom-left: same X as dragged, Y from opposite
        updatedCoords.find(coord => coord.id === 4).x = x;
        updatedCoords.find(coord => coord.id === 4).y = oppositeCorner.y;
      } else if (id === 4) { // Bottom-left dragged
        // Top-left: same Y as dragged, X from opposite
        updatedCoords.find(coord => coord.id === 1).x = oppositeCorner.x;
        updatedCoords.find(coord => coord.id === 1).y = y;
        // Bottom-right: same X as dragged, Y from opposite
        updatedCoords.find(coord => coord.id === 3).x = x;
        updatedCoords.find(coord => coord.id === 3).y = oppositeCorner.y;
      }
      return updatedCoords;
    });
  }, []);

  const handleTemplateSelect = useCallback((template) => {
    setSelectedTemplate(template);
  }, []);

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadImageWithGate = useCallback(() => {
    if (!uploadedImage || !selectedTemplate || aiCoordinates.length < 4) {
      alert('Please select a gate template and ensure all coordinates are set.');
      return;
    }
    const freshBlobUrl = URL.createObjectURL(uploadedFile);

    setIsDownloading(true);

    // Create a canvas to combine the house image with gate overlay
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Create image elements
    const houseImg = new Image();
    const gateImg = new Image();
    
    houseImg.crossOrigin = 'anonymous';
    gateImg.crossOrigin = 'anonymous';
    
    houseImg.onload = () => {
      // Set canvas size to match house image
      canvas.width = houseImg.naturalWidth;
      canvas.height = houseImg.naturalHeight;
      
      // Draw house image
      ctx.drawImage(houseImg, 0, 0);
      
      gateImg.onload = () => {
        // Calculate rectangle bounds
        const minX = Math.min(...aiCoordinates.map(coord => coord.x));
        const maxX = Math.max(...aiCoordinates.map(coord => coord.x));
        const minY = Math.min(...aiCoordinates.map(coord => coord.y));
        const maxY = Math.max(...aiCoordinates.map(coord => coord.y));
        
        // Calculate gate position and size
        const gateX = (minX / 100) * canvas.width;
        const gateY = (minY / 100) * canvas.height;
        const gateWidth = ((maxX - minX) / 100) * canvas.width;
        const gateHeight = ((maxY - minY) / 100) * canvas.height;
        
        // Draw gate overlay with full opacity
        ctx.globalAlpha = 1.0;
        ctx.drawImage(gateImg, gateX, gateY, gateWidth, gateHeight);
        
        // Add a subtle border around the gate area
        // ctx.strokeStyle = '#22c55e';
        // ctx.lineWidth = 3;
        // ctx.strokeRect(gateX, gateY, gateWidth, gateHeight);

        // Calculate the center position of the gate area
        const centerX = houseImg.naturalWidth / 2;
        const centerY = houseImg.naturalHeight / 2;

        // Draw a semi-transparent rounded background
        const bgWidth = 160;
        const bgHeight = 50;
        const bgX = centerX - bgWidth / 2;
        const bgY = centerY - bgHeight / 2;

        // Rounded rectangle function
        function roundRect(ctx, x, y, width, height, radius) {
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height - radius);
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          ctx.lineTo(x + radius, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.closePath();
        }

        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.shadowColor = "rgba(34, 197, 94, 0.4)";
        ctx.shadowBlur = 10;
        roundRect(ctx, bgX, bgY, bgWidth, bgHeight+10, 12);
        ctx.fill();
        ctx.shadowBlur = 0;
        // Draw model name at the center
        ctx.font = "italic 18px Arial";      // Small, readable text
        ctx.fillStyle = "#2a2a2b";         //  text color
        ctx.textAlign = "center";          // Center align horizontally
        ctx.textBaseline = "middle";       // Center align vertically
        ctx.fillText(`Model ${selectedTemplate.model}`, centerX, centerY);
        ctx.font = "italic 12px Arial";
        ctx.fillStyle = "#374151";
        ctx.fillText("(Generated with AI ✅)", centerX, centerY+15);
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `house-with-${selectedTemplate.model.toLowerCase().replace(/\s+/g, '-')}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          setIsDownloading(false);
        }, 'image/png');
      };
      
      gateImg.onerror = () => {
        alert('Error loading gate image. Please try again.');
        setIsDownloading(false);
      };
      
      gateImg.src = selectedTemplate.image;
    };
    
    houseImg.onerror = () => {
      alert('Error loading house image. Please try again.');
      setIsDownloading(false);
    };
    
    // houseImg.src = uploadedImage;
    houseImg.src = freshBlobUrl;
  }, [uploadedImage, selectedTemplate, aiCoordinates]);

  return (
    <>
      <Head>
        <title>Gupta Fabrication - AI Gate Visualizer</title>
        <meta name="description" content="AI-powered gate visualization tool - See real gate designs on your house instantly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
        <Navbar />
        
        <main className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {currentStep === 'upload' && (
            <UploadSection onFileUpload={handleFileUpload} />
          )}
          
          {currentStep === 'processing' && (
            <ProcessingSection />
          )}
          
          {currentStep === 'selection' && (
            <GateSelectionSection
              uploadedImage={uploadedImage}
              aiCoordinates={aiCoordinates}
              selectedTemplate={selectedTemplate}
              gateTemplates={GATE_TEMPLATES}
              onCoordinateUpdate={updateCoordinate}
              onTemplateSelect={handleTemplateSelect}
              onBackToUpload={() => setCurrentStep('upload')}
              onDownloadImage={downloadImageWithGate}
              isDownloading={isDownloading}
              selectedTemplateType={selectedTemplateType}
              setSelectedTemplateType={setSelectedTemplateType}
            />
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
}

// components/UploadSection.js
function UploadSection({ onFileUpload }) {
  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
    const files = e.dataTransfer.files;
    if (files.length > 0) onFileUpload(files[0]);
  };

  return (
    <div className="md:pt-20 max-w-4xl mx-auto px- sm:px-6 lg:px-8 sm:pt-20">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🏠 Upload Your House Image
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Let our AI analyze your house and suggest the perfect gate designs that will enhance your property&apos;s beauty and security
          </p>
        </div>

        {/* Drag and drop area */}
        <div
          className="border-3 border-dashed border-gray-300 rounded-xl pb-8 sm:p-12 lg:p-16 text-center cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 group"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="space-y-6">
            <div className="text-6xl sm:text-7xl lg:text-8xl group-hover:scale-110 transition-transform duration-300">🏠📸</div>
            <p className="text-lg sm:text-xl font-semibold text-gray-700">
              Drag & Drop or Use Buttons Below
            </p>
            <p className="text-sm sm:text-base text-gray-500">PNG, JPG, JPEG up to 10MB</p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <span>🔒</span>
              <span>Secure & private</span>
            </div>

            {/* Buttons for both options */}
            <div className="flex flex- sm:flex-row justify-center gap-2 mt-4">
              <button
                onClick={() => galleryInputRef.current?.click()}
                className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-1.5 md:px-8 py-2 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-1 md:gap-2 mx-auto"
              >
                📁 Upload from Gallery
              </button>
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-1.5 md:px-8 py-1.5 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-1 md:gap-2 mx-auto"
              >
                <span className="text-lg pb-1">📸</span> Take a Photo
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-blue-800 mb-1">AI Analysis</h3>
            <p className="text-xs text-blue-600">Advanced AI detects optimal gate positions</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold text-green-800 mb-1">Real Designs</h3>
            <p className="text-xs text-green-600">See actual gate designs on your house</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-purple-800 mb-1">Instant Preview</h3>
            <p className="text-xs text-purple-600">Real-time visualization & customization</p>
          </div>
        </div>

        {/* Hidden Inputs */}
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

// components/ProcessingSection.js
function ProcessingSection() {
  const [currentStatus, setCurrentStatus] = useState(0);
  
  const statusMessages = [
    'Analyzing image structure and dimensions...',
    'Detecting architectural features and entrance points...',
    'Identifying optimal gate placement locations...',
    'Calculating gate sizes and proportions...',
    'Finalizing AI recommendations...'
  ];

  const progressSteps = [
    { icon: '🔍', title: 'Image Analysis', desc: 'Analyzing structure' },
    { icon: '🏗️', title: 'Feature Detection', desc: 'Finding entrances' },
    { icon: '📍', title: 'Position Mapping', desc: 'Mapping locations' },
    { icon: '📐', title: 'Size Calculation', desc: 'Calculating dimensions' },
    { icon: '✅', title: 'Finalization', desc: 'Preparing results' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(prev => {
        if (prev < statusMessages.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center">
        <div className="space-y-8">
          {/* AI Robot Animation */}
          <div className="relative">
            <div className="text-6xl sm:text-7xl lg:text-8xl animate-bounce">🤖</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Processing Your Image
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our advanced AI is analyzing your house to identify the perfect gate positions and suggest optimal designs
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-4xl mx-auto">
            {progressSteps.map((step, index) => (
              <div key={index} className={`text-center transition-all duration-500 ${
                index <= currentStatus ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
              }`}>
                <div className={`text-2xl sm:text-3xl mb-2 transition-all duration-300 ${
                  index === currentStatus ? 'animate-pulse scale-110' : ''
                }`}>
                  {step.icon}
                </div>
                <div className="text-xs sm:text-sm">
                  <div className={`font-semibold ${
                    index <= currentStatus ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-gray-500 text-xs hidden sm:block">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Loading Animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
              <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-purple-600" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
          </div>
          
          {/* Current Status */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl border border-blue-200">
            <div className="text-sm sm:text-base text-blue-700 font-medium mb-2">
              {statusMessages[currentStatus]}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-blue-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Processing step {currentStatus + 1} of {statusMessages.length}</span>
            </div>
          </div>
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-blue-800 mb-1 text-sm">Precise Detection</h3>
              <p className="text-xs text-blue-600">AI identifies exact gate positions</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-green-800 mb-1 text-sm">Fast Processing</h3>
              <p className="text-xs text-green-600">Results in under 30 seconds</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-purple-800 mb-1 text-sm">Secure Analysis</h3>
              <p className="text-xs text-purple-600">Your image is processed securely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// components/GateSelectionSection.js
function GateSelectionSection({
  uploadedImage,
  aiCoordinates,
  selectedTemplate,
  gateTemplates,
  onCoordinateUpdate,
  onTemplateSelect,
  onBackToUpload,
  onDownloadImage,
  isDownloading,
  selectedTemplateType,
  setSelectedTemplateType
}) {
  const imageContainerRef = useRef(null);

  const calculateRectangleBounds = useCallback(() => {
    if (aiCoordinates.length < 4) return null;
    
    const minX = Math.min(...aiCoordinates.map(coord => coord.x));
    const maxX = Math.max(...aiCoordinates.map(coord => coord.x));
    const minY = Math.min(...aiCoordinates.map(coord => coord.y));
    const maxY = Math.max(...aiCoordinates.map(coord => coord.y));
    
    return { minX, maxX, minY, maxY };
  }, [aiCoordinates]);

  const [showHandle, setShowHandle] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowHandle(false), 2000);
  }, []);

  const handleHomeClick = () => {
    setShowHandle(true);
    setTimeout(() => setShowHandle(false), 4000); // Hide after 2s
  };

  return (
    <div className="sm:pt-20 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8" >
      <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-6 lg:p-8">
        <h2 className="text-sm sm:text-lg md::text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🏗️ Gate Visualizer - AI-Powered Design
        </h2>
        
        {/* Desktop Layout: Side by Side */}
        <div className=" lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Image with AI Coordinates */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className=" text-xs sm:text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Your House with AI-Detected Gate Positions
              </h3>
            </div>
            
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
              <div ref={imageContainerRef} className="relative inline-block max-w-full" style={{ touchAction: 'none' }} onClick={handleHomeClick}>
                {showHandle && <FlashTip />}
                <FlashTip />
                <img
                  src={uploadedImage}
                  alt="Uploaded house"
                  className="max-w-full h-auto block rounded-lg shadow-lg pointer-events-none"
                  onClick={handleHomeClick}
                />
                
                {/* Draggable Markers */}
                {aiCoordinates.map(coord => (
                  <DraggableMarker
                    key={coord.id}
                    coordinate={coord}
                    containerRef={imageContainerRef}
                    onUpdate={onCoordinateUpdate}
                    showHandle={showHandle}
                    handleHomeClick={handleHomeClick}
                  />
                ))}
                
                {/* Gate Template Overlay */}
                {selectedTemplate && (
                  <GateTemplate
                    template={selectedTemplate}
                    bounds={calculateRectangleBounds()}
                  />
                )}
              </div>
            </div>
            
            <div className="mt-4 flex gap-3 justify-between">
              <button
                onClick={onBackToUpload}
                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-2 md:py-3 px-2 md:px-6 rounded-lg text-xs font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-0.5 md:gap-2"
              >
                <span>📷</span>
                Upload New Image
              </button>
              <button
                onClick={onDownloadImage}
                disabled={isDownloading}
                className={`${
                  isDownloading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                } text-white py-2 md:py-3 px-2 md:px-6 rounded-lg text-xs font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-0.5 md:gap-2`}
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>✅</span>
                    <span>Download Image</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Gate Template Gallery */}
          <div className="lg:col-span-1">
            <GateGallery
              templates={gateTemplates}
              selectedTemplate={selectedTemplate}
              onTemplateSelect={onTemplateSelect}
              aiCoordinates={aiCoordinates}
              selectedTemplateType={selectedTemplateType}
              setSelectedTemplateType={setSelectedTemplateType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// components/DraggableMarker.js
function DraggableMarker({ coordinate, containerRef, onUpdate, showHandle, handleHomeClick }) {
  const [isDragging, setIsDragging] = useState(false);
  const handleTouchStart = useCallback((e) => {
    
    // Use a more mobile-friendly approach
    if (e.touches && e.touches.length > 0) {
      // For touch devices, use a different approach
      const touch = e.touches[0];
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      
      const handleTouchMove = (e) => {
        if (e.touches.length === 0) return;
        
        const touch = e.touches[0];
        const newX = touch.clientX - rect.left;
        const newY = touch.clientY - rect.top;
        
        // Constrain to container bounds
        const constrainedX = Math.max(0, Math.min(newX, rect.width));
        const constrainedY = Math.max(0, Math.min(newY, rect.height));
        
        // Convert to percentage
        const xPercent = (constrainedX / rect.width) * 100;
        const yPercent = (constrainedY / rect.height) * 100;
        
        onUpdate(coordinate.id, xPercent, yPercent);
      };

      const handleTouchEnd = () => {
        setIsDragging(false);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };

      setIsDragging(true);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      // Fallback for mouse events
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // Ignore preventDefault errors in passive listeners
      }
      
      setIsDragging(true);

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      
      const handleMouseMove = (e) => {
        const newX = e.clientX - rect.left;
        const newY = e.clientY - rect.top;
        
        // Constrain to container bounds
        const constrainedX = Math.max(0, Math.min(newX, rect.width));
        const constrainedY = Math.max(0, Math.min(newY, rect.height));
        
        // Convert to percentage
        const xPercent = (constrainedX / rect.width) * 100;
        const yPercent = (constrainedY / rect.height) * 100;
        
        onUpdate(coordinate.id, xPercent, yPercent);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  }, [coordinate.id, containerRef, onUpdate]);

  return (
    <>
      {(showHandle || isDragging) &&
        <div
          className={`absolute w-6 h-6 sm:w-9 sm:h-9
                      bg-blue-600 border-2 border-white rounded-full
                      cursor-move active:cursor-grabbing
                      flex items-center justify-center shadow-md
                      ${isDragging ? 'scale-125 shadow-lg' : 'hover:scale-110'}`}
          style={{
            left: `${coordinate.x}%`,
            top: `${coordinate.y}%`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            touchAction: 'none',
            userSelect: 'none'
          }}
          onMouseDown={handleTouchStart}
          onTouchStart={handleTouchStart}
          onClick={handleHomeClick}
        >
          {/* Blinking Grip Lines */}
          <div className="flex flex-col gap-[2px] text-white text-sm sm:text-base font-bold">
            {coordinate.id}
          </div>
        </div>
      }
    </>
  );
}

// components/GateTemplate.js
function GateTemplate({ template, bounds }) {
  if (!template || !bounds) return null;

  const { minX, maxX, minY, maxY } = bounds;

  return (
    <div
      className="absolute border border-green-500 bg-green-500 bg-opacity-10 rounded-md pointer-events-none z-5 overflow-hidden"
      style={{
        left: `${minX}%`,
        top: `${minY}%`,
        width: `${maxX - minX}%`,
        height: `${maxY - minY}%`
      }}
    >
      {/* Real gate image overlay */}
      <img
        src={template.image}
        alt={template.name}
        className="w-full h-full object-cover opacity-"
        //! imp // className="w-full h-full object-cover opacity-85"
        //! imp // style={{ 
        //   filter: 'brightness(0.95) contrast(1.05)',
        //   mixBlendMode: 'multiply'
        // }}
      />
    </div>
  );
}

// components/GateGallery.js
function GateGallery({ templates, selectedTemplate, onTemplateSelect,selectedTemplateType,setSelectedTemplateType }) {
  return (
    <>
      <h3 className="mt-5 text-base sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">Select Gate Template</h3>
      
      {/* Category Filter */}
      <div className="mb-0 sm:mb-0">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {['All', 'Pipe', 'Iron', 'Castiron'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedTemplateType(category)} // set selected type
              className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full border transition-colors"
              style={{
                backgroundColor: selectedTemplateType === category ? '#3b82f6' : '#f3f4f6',
                color: selectedTemplateType === category ? 'white' : '#374151',
                borderColor: selectedTemplateType === category ? '#3b82f6' : '#d1d5db',
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Horizontal Scrollable Gallery */}
      <div className="bg-gray-50 rounded-lg p-2 sm:p-4">
        <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2 sm:pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-blue-400">
          {templates.map(template => (
            <div
              key={template.id}
              className={`min-w-[40px] max-w-[200px] sm:min-w-[40px] h-[80px] w-[135px] sm:h-[100px] border-2 rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 bg-white hover:shadow-lg ${
                selectedTemplate?.id === template.id
                  ? 'border-green-500 bg-green-50 shadow-lg'
                  : 'border-gray-300 hover:border-blue-500 hover:-translate-y-1'
              }`}
              onClick={() => onTemplateSelect(template)}
            >
              <div className="p-1 sm:p-2 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center bg-gray-100 rounded mb-1 sm:mb-2 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full h-full object-cover transition-transform duration-300" 
                  />
                </div>
                {/* <div className="text-center">
                  <p className="text-xs text-green-600 font-medium">{template.name}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <p className="text-xs text-blue-700 flex items-center gap-2">
          <span className="text-lg">💡</span>
          <span><strong>Pro Tip:</strong> Drag the blue corner markers to manually adjust the gate area for perfect fit</span>
        </p>
      </div>
      
      {/* Selected Gate Info - Compact on Mobile */}
      {selectedTemplate && (
        <div className="mt-3 sm:mt-4 p-2 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2 sm:mb-3 flex items-center gap-2 text-xs sm:text-base">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Selected Template
          </h4>
          <div className="space-y-2 sm:space-y-3">
            <div>
              <h5 className="font-bold text-blue-800 text-xs sm:text-lg mb-1 sm:mb-2">{selectedTemplate.name}</h5>
              <div className="space-y-1 text-xs">
                <p className="text-blue-700"><span className="font-medium">Category:</span> {selectedTemplate.category}</p>
                <p className="text-blue-700"><span className="font-medium">Price:</span> {selectedTemplate.price}</p>
                <p className="text-blue-700"><span className="font-medium">Size:</span> {selectedTemplate.size.width}&nbsp;feet × {selectedTemplate.size.height}&nbsp;feet</p>
                <p className="text-blue-700"><span className="font-medium">Type:</span> {selectedTemplate.templateType}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-blue-600 font-medium mb-1 sm:mb-2">Features:</p>
              <div className="grid grid-cols-1 gap-1">
                {selectedTemplate.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-blue-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FlashTip() {
  const messages = [
    "💡 Tip: Drag the blue corner markers to adjust the gate area for a perfect fit.",
    "💡 सुझाव: सही फिटिंग के लिए नीले कोनों को खींचकर गेट का साइज़ एडजस्ट करें।"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [hideForever, setHideForever] = useState(false);

  useEffect(() => {
    let shownCount = 0;

    const interval = setInterval(() => {
      shownCount++;
      if (shownCount >= messages.length) {
        // After showing both messages → hide permanently
        clearInterval(interval);
        setTimeout(() => setHideForever(true), 2000); // wait for last fade
      } else {
        // Show next message
        setShow(false); // fade out
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev === 0 ? 1 : 0));
          setShow(true); // fade in
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (hideForever) return null;

  return (
    <div
      className={`absolute transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-300 shadow-md text-center`}
    >
      <p className="text-xs text-yellow-800 font-medium">
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
}