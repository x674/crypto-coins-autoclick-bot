import { appsHostMap } from '@/hostMap';

const __main_def__ = async () => {
  const [callback] = appsHostMap[location.host];

  if (typeof callback === 'function') return callback();
  console.log('nothing found');
};

__main_def__();
