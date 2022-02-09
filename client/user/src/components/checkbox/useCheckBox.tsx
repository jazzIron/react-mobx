import { useState, useEffect } from 'react';
import { IOption } from './checkBox_types';

export default function useCheckBox(options: IOption[]) {
  const [list, setList] = useState<IOption[]>(options);
  const [masterChecked, setMasterChecked] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const isCanNext = list.filter((item) => item.isRequired && !item.isChecked).length === 0;
    setCanNext(isCanNext);
  }, [list]);

  const handleMasterCheck = () => {
    const isAll =
      list.filter((item) => item.isChecked).length === list.length ||
      list.filter((item) => item.isChecked).length === 0;
    if (isAll) {
      setList((prevList) => {
        setMasterChecked(!masterChecked);
        return prevList.map((item) => item && { ...item, isChecked: !item.isChecked });
      });
      return;
    }
    setList((prevList) => prevList.map((item) => item && { ...item, isChecked: true }));
    setMasterChecked(true);
  };
  const handleRegularCheck = (id: string) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)),
    );
  };
  return {
    masterChecked,
    list,
    handleMasterCheck,
    handleRegularCheck,
    canNext,
  };
}
