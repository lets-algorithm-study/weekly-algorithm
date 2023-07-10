


const case1 = ["20-DE0815", "20-CO1299", "20-MO0901", "20-KE0511", "20-SP1102","21-DE0401", "21-CO0404", "21-MO0794", "21-KE0704", "21-SP0404","19-DE0401", "19-CO0404", "19-MO0794", "19-KE1204", "19-SP0404"];
const answer1 = ["19-SP0404", "19-KE1204", "19-MO0794", "19-CO0404", "19-DE0401", "20-SP1102", "20-KE0511", "20-MO0901", "20-CO1299", "20-DE0815", "21-SP0404", "21-KE0704", "21-MO0794", "21-CO0404", "21-DE0401"];

const case2 = ["2-MO0915", "19-MO1299", "17-CO0901", "14-DE0511", "19-KE1102", "13-DE0101", "20-SP0404", "20-CO0794"];
const answer2 = ["13-DE0401", "14-DE0511", "17-CO0901", "19-KE1102", "19-MO1299", "20-SP0404", "20-CO0794"];

const answer3 = ["13-DE0401", "14-DE0511", "17-CO0901", "19-KE1102", "19-MO1299", "20-SP0404", "20-CO0794", "22-MO0815"];
const case3 = ["13-DE0401", "14-DE0511", "17-CO0901", "19-KE1102", "19-MO1299", "20-SP0404", "20-CO0794", "22-MO0815"];

// 스마트폰 SP- 키보드 KE- 모니터 MO- 컴퓨터 CO- 책상 DE총 5가지로 구성

const ASSET_CODE = {
    "SP": "1",
    "KE": "2",
    "MO": "3",
    "CO": "4",
    "DE": "5",
}

function solution(assets){
    let tmp = [];
    assets.forEach((item) => {
        let result = "";
        if(assets.length !== 9) return;

        let registerYear = Number(item[0] + item[1]);
        if(registerYear < 13 || registerYear > 22) return;

        result += `${registerYear - 12}`

        let _symbol = item[2];

        if(_symbol !== "-") return;

        let assetCode = item[3] + item[4];

        // flag 넣기
        Object.keys(ASSET_CODE).some((item) => {
            if(assetCode === item){
                result += ASSET_CODE[item];

                return true;
            }
        })



    })
}