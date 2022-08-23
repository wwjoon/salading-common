import { Subjects } from '../subjects';

export interface ShipsDownloadEvent {
    subject: Subjects.ShipsDownloaded;
    data: {
      ids: string[];
    };
}
