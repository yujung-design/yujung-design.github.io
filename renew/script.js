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

// 2. 페이지 번호(1, 2, 3, 4) 클릭 시 iframe, 리스트, 그리고 Before 버튼 링크 동적 변경
const numItems = document.querySelectorAll('.num-item');
const numItemBoxes = document.querySelectorAll('.num-item-box');
const webFrame = document.getElementById('web-frame');
const toolsList = document.getElementById('tools-list');
const beforeLink = document.getElementById('before-link');

// 각 페이지별 웹사이트 링크, 사용 프로그램, 그리고 번호별 -1.html 파일 설정
const pageData = {
    '1': {
        url: 'https://jeju-nyangtueo-yeohaeng-webaeb--freeutleeyj.replit.app/',
        tools: ['Replit', 'Gemini'],
        detailUrl: '1-1.html'
    },
    '2': {
        url: 'page2.html',
        tools: ['Figma', 'HTML / CSS'],
        detailUrl: '2-1.html'
    },
    '3': {
        url: 'page3.html',
        tools: ['Photoshop', 'Illustrator'],
        detailUrl: '3-1.html'
    },
    '4': {
        url: 'page4.html',
        tools: ['React', 'JavaScript'],
        detailUrl: '4-1.html'
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
            // 1. iframe 주소 변경
            webFrame.src = data.url;

            // 2. 우측 li 리스트 내용 동적 변경
            toolsList.innerHTML = '';
            data.tools.forEach(tool => {
                const li = document.createElement('li');
                li.textContent = tool;
                toolsList.appendChild(li);
            });

            // 3. Before 버튼의 링크 주소 변경 (1-1.html, 2-1.html 등)
            beforeLink.href = data.detailUrl;
        }
    });
});

// 초기 실행 시 1번 버튼 활성화 상태 표시
if (numItemBoxes.length > 0) {
    numItemBoxes[0].classList.add('active');
}// 1. 흑백 토글 기능 구현
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'monotone') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'monotone');
    }
});

// 2. 페이지 번호(1, 2, 3, 4) 클릭 시 iframe, 리스트, 그리고 Before 버튼 링크 동적 변경
const numItems = document.querySelectorAll('.num-item');
const numItemBoxes = document.querySelectorAll('.num-item-box');
const webFrame = document.getElementById('web-frame');
const toolsList = document.getElementById('tools-list');
const beforeLink = document.getElementById('before-link');

// 각 페이지별 웹사이트 링크, 사용 프로그램, 그리고 번호별 -1.html 파일 설정
const pageData = {
    '1': {
        url: 'https://jeju-nyangtueo-yeohaeng-webaeb--freeutleeyj.replit.app/',
        tools: ['Replit', 'Gemini'],
        detailUrl: '1-1.html'
    },
    '2': {
        url: 'page2.html',
        tools: ['Figma', 'HTML / CSS'],
        detailUrl: '2-1.html'
    },
    '3': {
        url: 'page3.html',
        tools: ['Photoshop', 'Illustrator'],
        detailUrl: '3-1.html'
    },
    '4': {
        url: 'page4.html',
        tools: ['React', 'JavaScript'],
        detailUrl: '4-1.html'
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
            // 1. iframe 주소 변경
            webFrame.src = data.url;

            // 2. 우측 li 리스트 내용 동적 변경
            toolsList.innerHTML = '';
            data.tools.forEach(tool => {
                const li = document.createElement('li');
                li.textContent = tool;
                toolsList.appendChild(li);
            });

            // 3. Before 버튼의 링크 주소 변경 (1-1.html, 2-1.html 등)
            beforeLink.href = data.detailUrl;
        }
    });
});

// 초기 실행 시 1번 버튼 활성화 상태 표시
if (numItemBoxes.length > 0) {
    numItemBoxes[0].classList.add('active');
}