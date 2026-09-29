// 1. 흑백 토글 기능 구현
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'monotone') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'monotone');
    }
});

// 2. 페이지 번호(1, 2, 3, 4) 클릭 시 iframe 주소 및 li 리스트 내용 변경 기능
const numItems = document.querySelectorAll('.num-item');
const numItemBoxes = document.querySelectorAll('.num-item-box');
const webFrame = document.getElementById('web-frame');
const toolsList = document.getElementById('tools-list');

// 각 페이지별로 연결할 웹사이트 링크와 우측 li 리스트 내용 설정
const pageData = {
    '1': {
        url: 'https://jeju-nyangtueo-yeohaeng-webaeb--freeutleeyj.replit.app/',
        tools: ['Replit', 'Gemini']
    },
    '2': {
        url: 'page2.html', // 2번 페이지 주소 또는 링크
        tools: ['Figma', 'HTML / CSS']
    },
    '3': {
        url: 'page3.html', // 3번 페이지 주소 또는 링크
        tools: ['Photoshop', 'Illustrator']
    },
    '4': {
        url: 'page4.html', // 4번 페이지 주소 또는 링크
        tools: ['React', 'JavaScript']
    }
};

numItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 활성화된 버튼 스타일(active 클래스) 이동
        numItemBoxes.forEach(box => box.classList.remove('active'));
        numItemBoxes[index].classList.add('active');

        // 선택한 페이지 데이터 가져오기
        const pageNum = item.getAttribute('data-page');
        const data = pageData[pageNum];

        if (data) {
            // iframe 주소 변경
            webFrame.src = data.url;

            // 우측 li 리스트 내용 동적 변경
            toolsList.innerHTML = '';
            data.tools.forEach(tool => {
                const li = document.createElement('li');
                li.textContent = tool;
                toolsList.appendChild(li);
            });
        }
    });
});

// 초기 실행 시 1번 버튼 활성화 상태 표시
if (numItemBoxes.length > 0) {
    numItemBoxes[0].classList.add('active');
}
