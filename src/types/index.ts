export type Locale = 'en' | 'ar';

export type Theme = 'light' | 'dark';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface LearningPath {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  icon: string;
  difficulty: Difficulty;
  estimatedHours: number;
  lessonSlugs: string[];
  color: string;
}

export interface Lesson {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  objectives: Record<Locale, string[]>;
  prerequisites: string[];
  tags: string[];
  order: number;
}

export interface LessonContent {
  beginnerDefinition: string;
  technicalDefinition: string;
  analogy: string;
  explanation: string[];
  codeExample?: {
    language: string;
    code: string;
    description: string;
  };
  commonMistakes: string[];
  bestPractices: string[];
  references: { title: string; url: string }[];
}

export interface QuizQuestion {
  id: string;
  type: 'mcq' | 'true-false' | 'scenario';
  question: Record<Locale, string>;
  options?: Record<Locale, string[]>;
  correctAnswer: number;
  explanation: Record<Locale, string>;
  difficulty: Difficulty;
  category: string;
}

export interface Exam {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  difficulty: Difficulty;
  timeMinutes: number;
  questionIds: string[];
  passingScore: number;
}

export interface Project {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  difficulty: Difficulty;
  estimatedHours: number;
  objectives: Record<Locale, string[]>;
  technologies: string[];
  steps: Record<Locale, string[]>;
}

export interface AgentStep {
  type: 'thinking' | 'planning' | 'tool-call' | 'tool-result' | 'memory' | 'response';
  content: string;
  timestamp: number;
}

export interface SimulationState {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  speed: number;
  data: Record<string, unknown>;
}

export interface ProgressData {
  completedLessons: string[];
  quizScores: Record<string, number>;
  examScores: Record<string, number>;
  currentPath: string | null;
  lastVisited: string | null;
  totalTimeMinutes: number;
}
