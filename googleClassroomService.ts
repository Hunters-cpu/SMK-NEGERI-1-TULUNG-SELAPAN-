// 🎓 Google Classroom API Integration Service
export interface ClassroomCourse {
  id: string;
  name: string;
  section?: string;
  descriptionHeading?: string;
  description?: string;
  room?: string;
  ownerId?: string;
  creationTime?: string;
  updateTime?: string;
  enrollmentCode?: string;
  courseState?: 'ACTIVE' | 'ARCHIVED' | 'PROVISIONED' | 'DECLINED' | 'SUSPENDED';
  alternateLink?: string;
  teacherGroupEmail?: string;
  courseGroupEmail?: string;
  guardiansEnabled?: boolean;
}

export interface ClassroomCourseWork {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  materials?: any[];
  state?: 'PUBLISHED' | 'DRAFT' | 'DELETED';
  alternateLink?: string;
  creationTime?: string;
  updateTime?: string;
  dueDate?: {
    year: number;
    month: number;
    day: number;
  };
  dueTime?: {
    hours: number;
    minutes: number;
    seconds?: number;
    nanos?: number;
  };
  maxPoints?: number;
  workType?: 'ASSIGNMENT' | 'SHORT_ANSWER_QUESTION' | 'MULTIPLE_CHOICE_QUESTION' | 'COURSE_WORK_TYPE_UNSPECIFIED';
  submissionModificationMode?: string;
  creatorUserId?: string;
  topicId?: string;
}

export interface ClassroomAnnouncement {
  id: string;
  courseId: string;
  text: string;
  materials?: any[];
  state?: 'PUBLISHED' | 'DRAFT' | 'DELETED';
  alternateLink?: string;
  creationTime?: string;
  updateTime?: string;
  creatorUserId?: string;
}

export interface ClassroomUserProfile {
  id: string;
  name?: {
    givenName?: string;
    familyName?: string;
    fullName?: string;
  };
  emailAddress?: string;
  photoUrl?: string;
}

export interface ClassroomStudent {
  courseId: string;
  userId: string;
  profile?: ClassroomUserProfile;
}

export interface ClassroomTeacher {
  courseId: string;
  userId: string;
  profile?: ClassroomUserProfile;
}

/**
 * List all active courses the user teaches or is enrolled in
 */
export async function listClassroomCourses(
  accessToken: string,
  courseStates: string[] = ['ACTIVE']
): Promise<ClassroomCourse[]> {
  const query = new URLSearchParams();
  courseStates.forEach(state => query.append('courseStates', state));
  query.append('pageSize', '30');

  const response = await fetch(`https://classroom.googleapis.com/v1/courses?${query.toString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat daftar Google Classroom (${response.status})`);
  }

  const data = await response.json();
  return data.courses || [];
}

/**
 * Get details of a specific course
 */
export async function getClassroomCourse(
  accessToken: string,
  courseId: string
): Promise<ClassroomCourse> {
  const response = await fetch(`https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat detail kelas (${response.status})`);
  }

  return response.json();
}

/**
 * List coursework items (assignments, questions, quizzes) for a course
 */
export async function listClassroomCourseWork(
  accessToken: string,
  courseId: string,
  courseWorkStates: string[] = ['PUBLISHED']
): Promise<ClassroomCourseWork[]> {
  const query = new URLSearchParams();
  courseWorkStates.forEach(state => query.append('courseWorkStates', state));
  query.append('pageSize', '50');

  const response = await fetch(
    `https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}/courseWork?${query.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat tugas kelas (${response.status})`);
  }

  const data = await response.json();
  return data.courseWork || [];
}

/**
 * List announcements for a course
 */
export async function listClassroomAnnouncements(
  accessToken: string,
  courseId: string
): Promise<ClassroomAnnouncement[]> {
  const response = await fetch(
    `https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}/announcements?pageSize=30`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat pengumuman kelas (${response.status})`);
  }

  const data = await response.json();
  return data.announcements || [];
}

/**
 * List students enrolled in a course
 */
export async function listClassroomStudents(
  accessToken: string,
  courseId: string
): Promise<ClassroomStudent[]> {
  const response = await fetch(
    `https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}/students?pageSize=50`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat anggota siswa kelas (${response.status})`);
  }

  const data = await response.json();
  return data.students || [];
}

/**
 * Create a new announcement in a course
 */
export async function createClassroomAnnouncement(
  accessToken: string,
  courseId: string,
  text: string
): Promise<ClassroomAnnouncement> {
  const response = await fetch(
    `https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}/announcements`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        state: 'PUBLISHED'
      })
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal mengirim pengumuman ke Google Classroom (${response.status})`);
  }

  return response.json();
}

/**
 * Create a new coursework assignment in a course
 */
export async function createClassroomCourseWork(
  accessToken: string,
  courseId: string,
  work: {
    title: string;
    description?: string;
    maxPoints?: number;
    workType?: 'ASSIGNMENT' | 'SHORT_ANSWER_QUESTION' | 'MULTIPLE_CHOICE_QUESTION';
    dueYear?: number;
    dueMonth?: number;
    dueDay?: number;
    dueHours?: number;
    dueMinutes?: number;
  }
): Promise<ClassroomCourseWork> {
  const payload: any = {
    title: work.title,
    description: work.description || '',
    workType: work.workType || 'ASSIGNMENT',
    state: 'PUBLISHED',
    maxPoints: work.maxPoints !== undefined ? work.maxPoints : 100
  };

  if (work.dueYear && work.dueMonth && work.dueDay) {
    payload.dueDate = {
      year: work.dueYear,
      month: work.dueMonth,
      day: work.dueDay
    };
    if (work.dueHours !== undefined) {
      payload.dueTime = {
        hours: work.dueHours,
        minutes: work.dueMinutes || 0
      };
    }
  }

  const response = await fetch(
    `https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}/courseWork`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal membuat tugas di Google Classroom (${response.status})`);
  }

  return response.json();
}

/**
 * Delete a coursework assignment (Requires explicit user confirmation!)
 */
export async function deleteClassroomCourseWork(
  accessToken: string,
  courseId: string,
  courseWorkId: string
): Promise<boolean> {
  const response = await fetch(
    `https://classroom.googleapis.com/v1/courses/${encodeURIComponent(courseId)}/courseWork/${encodeURIComponent(courseWorkId)}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  if (!response.ok && response.status !== 204 && response.status !== 404) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal menghapus tugas Google Classroom (${response.status})`);
  }

  return true;
}
