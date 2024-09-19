// types/global.d.ts or global.d.ts in the root

interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
  
  interface SpeechRecognition extends EventTarget {
    new (): SpeechRecognition;
    start(): void;
    stop(): void;
    abort(): void;
    grammars: SpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    onaudiostart: ((event: Event) => void) | null;
    onaudioend: ((event: Event) => void) | null;
    onend: ((event: Event) => void) | null;
    onerror: ((event: Event) => void) | null;
    onnomatch: ((event: Event) => void) | null;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onstart: ((event: Event) => void) | null;
  }
  
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }
  
  interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }
  
  interface SpeechRecognitionResult {
    isFinal: boolean;
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }
  
  interface SpeechRecognitionAlternative {
    confidence: number;
    transcript: string;
  }
  
  interface SpeechGrammarList {
    length: number;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
  }
  
  interface SpeechGrammar {
    // Define properties of SpeechGrammar if needed
  }
  