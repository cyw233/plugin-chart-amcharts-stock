import { AxisBreakDatum } from '../plugin/transformProps';

export function convertToDatetime(d: AxisBreakDatum[]) {
  for (let i = 0; i < d.length; i++) {
    d[i]['`HalfHourStarting`'] = new Date(d[i]['`HalfHourStarting`'] as string);
  }

  d.sort((a, b) => {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return (
      new Date(a['`HalfHourStarting`'] as string).valueOf() -
      new Date(b['`HalfHourStarting`'] as string).valueOf()
    );
  });
  return d;
}
