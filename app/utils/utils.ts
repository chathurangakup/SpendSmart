import { changeSlideUpObj } from "../slices/CommonSlice";


export const expenses = [
  { "id": "1", "category": "Housing", "color": "#FF6347" },          // Tomato
  { "id": "2", "category": "Utilities", "color": "#4682B4" },        // Steel Blue
  { "id": "3", "category": "Food", "color": "#FFD700" },             // Gold
  { "id": "4", "category": "Transport", "color": "#32CD32" },   // Lime Green
  { "id": "5", "category": "Health and Insurance", "color": "#8A2BE2" }, // Blue Violet
  { "id": "6", "category": "Personal Care", "color": "#FF69B4" }, // Hot Pink
  { "id": "7", "category": "Savings", "color": "#20B2AA" }, // Light Sea Green
  { "id": "8", "category": "Entertainment", "color": "#FF4500" }, // Orange Red
  { "id": "9", "category": "Others", "color": "#FF0000" }
];

export const showSlideUpPanel = (
    title: any,
    titleColor:any,
    correctNumberOfAnswers:string,
    colorcorrectNumberOfAnswers: any,
    msg: any,
    twoButtons: any,
    imgName: any,
    okPress = () => {},
    okBtnText: any,
    IsShowcorrectNumberOfAnswers: boolean,
  ) => {
    global.store.dispatch(changeSlideUpObj({
      type: 'SHOW_BOTTOM_ALERT',
      payload: {
        alertType: 'SHOW_MARKS',
        visible: true,
        title,
        titleColor,
        correctNumberOfAnswers,
        colorcorrectNumberOfAnswers,
        msg,
        twoButtons,
        imgName,
        okPress,
        okBtnText,
        IsShowcorrectNumberOfAnswers,
        snapToIndexValue:2
      },
    }));
  };


  export const showSlideUpPanelLogout = (
    title: any,
    titleColor:any,
    msg: any,
    twoButtons: boolean,
    leftBtnText: any,
    onPressLeft=()=>{},
    rightBtnText: any,
    onPressRight=()=>{},
    imgName: any,
  ) => {
    global.store.dispatch(changeSlideUpObj({
      type: 'SHOW_BOTTOM_ALERT',
      payload: {
        alertType: 'SHOW_MARKS',
        visible: true,
        title,
        titleColor,
        leftBtnText,
        onPressLeft,
        rightBtnText,
        onPressRight,
        msg,
        twoButtons,
        imgName,
        IsShowcorrectNumberOfAnswers:false,
        snapToIndexValue:2
      },
    }));
  };