export enum MSG {
  ALERT_01 = 'ALERT_01',
}

const EN = {
  [MSG.ALERT_01]: 'should be check message',
};

const KO = {
  [MSG.ALERT_01]: '확인이 필요한 내용입니다.',
};

export const MSG_LIST = {
  EN,
  KO,
};
