


function solution(today, terms, privacies) {
    var answer = [];
    
    // 조건 객체화 > "A": "6"
    const termsObj = {};
    terms.forEach((item) => {
        const [_term, long] = item.split(" ");
        termsObj[_term] = long;
    })
    
    // privacies 객체화 > "2021.05.02": "A"
    const privaciesObj = {};
    privacies.forEach((item) => {
        const [_date, _term] = item.split(" ");
        privaciesObj[_date] = _term;
    })

    // privaciesObj 돌리면서 오늘날짜보다 작으면 폐기처리 로직
    Object.entries(privaciesObj).forEach(([_data, _term], index) => {
        const [_year, _month, _date] = _data.split(".");
        
        let [year, month, date] = [Number(_year), Number(_month), Number(_date)];
        
        let changeMonth = month + Number(termsObj[_term]);
        
        if(changeMonth > 12) {
            year += 1;
            month = changeMonth - 12;
        }else month = changeMonth;
        
        
        const [todayYear, todayMonth, todayDate] = today.split(".");
        
        if(Number(todayYear) > year){
            answer.push(index + 1);
        }else if(Number(todayYear) === year && Number(todayMonth) > month){
            answer.push(index + 1);
        }else if(Number(todayYear) === year && Number(todayMonth) === month && Number(todayDate) >= date){
            answer.push(index + 1);
        }
    })
    return answer;
}