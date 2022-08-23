import { Subjects } from '../subjects';
import { AuthGradeType } from '../../enums/auth';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    userId: string;
    grade: AuthGradeType
    termsSms: boolean;
    termsEmail: boolean;
    propsOld: ChangeLogPropsType;
    propsNew: ChangeLogPropsType;
    adminId?: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ChangeLogPropsType {
  grade?: AuthGradeType
  termsSms?: boolean;
  termsEmail?: boolean;
}
