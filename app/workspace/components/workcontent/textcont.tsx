"use client";
import React, { useState, useEffect } from "react";
import { FaMicrophone, FaVolumeUp } from "react-icons/fa";

const TextCont: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [speechSynthesisUtterance, setSpeechSynthesisUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.interimResults = true;
      recog.continuous = true;
      recog.onresult = (e: SpeechRecognitionEvent) => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setContent(transcript);
      };
      recog.onend = () => {
        if (isRecording) {
          recog.start(); // Restart recognition if it ends and we are still recording
        }
      };
      setRecognition(recog);
    } else {
      console.error("SpeechRecognition not supported");
    }

    // Initialize speech synthesis
    const synth = window.speechSynthesis;
    setSpeechSynthesis(synth);

    // Load available voices
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      // Choose a default voice (e.g., first female voice if available)
      const femaleVoice = availableVoices.find(voice => voice.name.toLowerCase().includes('female'));
      setSelectedVoice(femaleVoice || availableVoices[0]); // Default to the first available voice if no female voice is found
    };

    // Load voices once
    loadVoices();
    synth.onvoiceschanged = loadVoices; // Load voices if they change dynamically

    // Cleanup
    return () => {
      if (recognition) {
        recognition.stop();
        setRecognition(null);
      }
      if (speechSynthesisUtterance) {
        speechSynthesisUtterance.onend = null; // Clean up event handler
      }
    };
  }, [isRecording]);

  const handleToggleRecording = () => {
    if (recognition) {
      if (isRecording) {
        recognition.stop();
        setIsRecording(false);
      } else {
        recognition.start();
        setIsRecording(true);
      }
    }
  };

  const handleToggleSpeech = () => {
    if (speechSynthesis) {
      if (isSpeaking) {
        speechSynthesis.cancel(); // Stop the speech
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(content);
        utterance.voice = selectedVoice || null; // Set the selected voice
        utterance.pitch = 1.1; // Higher pitch for a sweeter sound
        utterance.rate = 0.95; // Lower rate for slower speech
        utterance.volume = 0.8; // Set volume to max
        utterance.onend = () => setIsSpeaking(false);
        setSpeechSynthesisUtterance(utterance);
        speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="relative bg-bl border-t h-full transform-all duration-300 dark:bg-black pl-12 pr-20 overflow-y-auto" style={{ maxHeight: "calc(100vh - 260px)" }}>
      <textarea
        value={content}
        onChange={handleChange}
        className="mt-6 w-full h-full transform-all duration-300 dark:bg-black p-4 border-none outline-none resize-none" style={{ maxHeight: "calc(100vh - 350px)" }}
        placeholder="Start making your own notebook here..."
      />

      {/* Microphone and Speaker Icons */}
      <div className="absolute bottom-0 left-12 flex space-x-4">
        <button 
          onClick={handleToggleRecording}
          className={`p-2 rounded-[50%] transition-all duration-200 ${isRecording ? 'text-red-600 bg-white dark:bg-black hover:bg-red-600' : 'bg-gray-300 dark:bg-gray-900 hover:bg-gray-400'} dark:hover:bg-gray-800`}
        >
          <FaMicrophone size={20} />
        </button>
        <button 
          onClick={handleToggleSpeech}
          className={`p-2 rounded-full ${isSpeaking ? 'text-green-600 bg-white dark:bg-black hover:bg-green-600' : 'bg-gray-300 dark:bg-gray-900 hover:bg-gray-400'} transition-all duration-200 dark:hover:bg-gray-800`}
        >
          <FaVolumeUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default TextCont;
