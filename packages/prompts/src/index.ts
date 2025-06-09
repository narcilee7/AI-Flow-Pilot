// 用戶相關類型
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// 簡歷相關類型
export interface Resume {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// 面試相關類型
export interface Interview {
  id: string;
  userId: string;
  type: 'technical' | 'behavioral' | 'system-design';
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback?: string;
  score?: number;
  createdAt: Date;
  updatedAt: Date;
}

// 求職目標相關類型
export interface JobApplication {
  id: string;
  userId: string;
  company: string;
  position: string;
  status: 'applied' | 'interviewing' | 'offered' | 'rejected';
  appliedAt: Date;
  updatedAt: Date;
}
