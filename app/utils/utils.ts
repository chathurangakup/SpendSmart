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

export const incomes = [
  { "id": "1", "category": "Salary", "color": "#2E8B57" },         // Sea Green
  { "id": "2", "category": "Investments", "color": "#DAA520" },    // Goldenrod
  { "id": "3", "category": "Business", "color": "#4682B4" },       // Steel Blue
  { "id": "4", "category": "Freelancing", "color": "#8B0000" },    // Dark Red
  { "id": "5", "category": "Rental Income", "color": "#D2691E" },  // Chocolate
  { "id": "6", "category": "Interest", "color": "#6A5ACD" },       // Slate Blue   
  { "id": "8", "category": "Others", "color": "#A52A2A" }          // Brown
];


export const cardCashData = [
  { "id": 1, "type": "Cash", "color": "#FF6347"},   
  { "id": 2, "type": "Card", "color": "#FF6347"},               

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


  export const showSlideUpPanelIncomeExpence = (
    title: any,
    titleColor:any,
    type:string,
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
        type,
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