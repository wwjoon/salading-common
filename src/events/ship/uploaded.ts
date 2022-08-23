import { Subjects } from '../subjects';

export interface ShipsUploadEvent {
    subject: Subjects.ShipsUploaded;
    data: {
      ids: string[];
    };
}