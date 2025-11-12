document.addEventListener('DOMContentLoaded', () => {
    // 1. 번뇌 농도별 법문 데이터 맵핑
    const preceptData = {
        0: '만리장천(萬里長天). 번뇌 제로! 평온 그 자체인 하루입니다. 당신의 마음은 청명한 가을 하늘과 같습니다.',
        10: '일념만년(一念萬年). 아주 미세한 번뇌가 찰나의 괴로움으로 보입니다. 고통은 바람처럼 스쳐 지나갈 뿐입니다.',
        20: '심월상명(心月常明). 마음속 달은 언제나 밝습니다. 그림자는 스스로 만든 허상임을 기억하십시오.',
        30: '각수자심(覺受自心). 스스로 자신의 마음을 깨달아 알아차리십시오. 외부의 소리에 현혹되지 않을 때입니다.',
        40: '자재무애(自在無礙). 작은 집착과 저항이 자유를 가로막습니다. 모든 것을 자연스럽게 놓아주세요.',
        50: '일이관지(一以貫之). 마음의 중심을 잡아야 할 때입니다. 삶의 복잡함을 하나의 기준으로 꿰뚫어 보세요.',
        60: '평등일미(平等一味). 당신을 괴롭히는 모든 대상은 본질적으로 평등합니다. 좋고 싫음을 내려놓으세요.',
        70: '법이여시(法爾如是). 세상 모든 일은 원래 그대로 그러한 것입니다. 바꾸려 애쓰지 말고 받아들이십시오.',
        80: '돈오점수(頓悟漸修). 깨달음은 갑자기 오지만, 수행은 점진적입니다. 서두르지 말고 천천히 자신을 돌보세요.',
        90: '이뭣고(是甚麼). 모든 생각과 감정의 근원을 향해 깊이 질문하십시오. 이 번뇌의 주체는 무엇인가?',
        100: '대사일심(大事一心). 번뇌가 하늘을 찌르는 날입니다. 모든 것을 잠시 멈추고 오직 하나의 큰 마음(해탈)에 집중하세요.'
    };

    // 2. 현재 날짜 표시 함수
    function displayCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const formattedDate = `${year}년 ${month}월 ${day}일`;
        document.getElementById('current-date').textContent = formattedDate;
    }

    // 3. 10단위 랜덤 번뇌 농도 생성 함수
    function generateAngstLevel() {
        // Math.random()은 0과 1 사이의 부동 소수점을 반환합니다.
        // 여기에 11 (0부터 100까지 10단위는 총 11개)을 곱하고 Math.floor로 정수로 만듭니다.
        // 결과: 0, 1, 2, ..., 10 중 하나의 정수
        const randomMultiplier = Math.floor(Math.random() * 11);
        
        // 10을 곱하여 10단위 숫자로 변환합니다. (예: 7 * 10 = 70)
        const angstLevel = randomMultiplier * 10; 
        
        return angstLevel;
    }

    // 4. 모든 결과를 웹페이지에 표시하는 메인 함수
    function displayFortune() {
        // 날짜 표시
        displayCurrentDate();

        // 번뇌 농도 생성
        const level = generateAngstLevel();
        
        // 농도 및 법문 텍스트 찾기
        const levelText = `번뇌 농도: ${level}%`;
        const precept = preceptData[level];

        // 웹페이지 업데이트
        document.getElementById('angst-level').textContent = levelText;
        document.getElementById('precept-text').textContent = precept;
    }

    // 페이지 로드 시 실행
    displayFortune();
});
