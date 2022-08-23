import axios from 'axios';

export const mutationFail = (mutationDataId: string) => (error: Error) => {
  if (!(error && mutationDataId)) return;
  if (!mutationDataId) return;
  if (mutationDataId && !error) throw new Error('fail function requires err object');

  let { message, stack } = error;
  setTimeout(() => {
    axios.post(`http://log-srv/mutation/data/${mutationDataId}/error`, {
      message,
      code: error.constructor.name,
      stack
    });
  }, 5000);
};
