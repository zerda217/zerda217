import { create } from 'zustand';

import examData from '../data/exam_data'
import testData from '../data/test_data'

const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const getUniqueID = () => {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${timestamp}${randomNum}`;
};

const UseStore = create((set) => ({
  name: '',
  testId: getUniqueID(),
  seatNumber: getCurrentDate().slice(-2),
  isvisible: 'false',
  viewlevel: 0,
  viewcount: 1,
  dataType: '',
  examData: examData,
  testData: testData,
  data: [],
  questionNumber: 88,
  sheet: [],

  setName: (name) => set({ name: name }),
  setSeatNumber: (seatNumber) => set({ seatNumber: seatNumber }),
  setisvisible: (isvisible) => set({ isvisible: isvisible }),
  setviewlevel: (level) => set({ viewlevel: level }),
  setviewcount: (count) => set({ viewcount: count }),
  setDataType: (dataType) => set({ dataType: dataType }),
  setQuestionNumber: (questionNumber) => set({ questionNumber: questionNumber }),

  setSheet: (newSheet) => set((state) => {
    const updatedSheet = [...state.sheet, ...newSheet];
    return { sheet: updatedSheet };
  }),
    
  setData: (newData) => set((state) => {
    const updatedData = [...state.data, ...newData];
    return { data: updatedData };
  }),
}));

export default UseStore;
