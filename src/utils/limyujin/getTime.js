export function getTime(t) {
  let result = '';
  if (t / 60 / 60 / 1000 < 1) {
    result = t / 60 / 1000 + '분 전';
  } else if (t > 86400000) {
    result = '1일 전';
  } else {
    result = t / 60 / 60 / 1000 + '시간 전';
  }
  return result;
}
