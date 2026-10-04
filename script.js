document.addEventListener('DOMContentLoaded', () => {
  
    // 1. 흑백 토글 기능 구현
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // 요소가 존재할 때만 이벤트 리스너를 등록하여 에러 방지
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'monotone') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', 'monotone');
        }
      });
    }
  
    // 2. 페이지 번호 클릭 시 동적 변경 기능
    const numItems = document.querySelectorAll('.num-item');
    const numItemBoxes = document.querySelectorAll('.num-item-box');
    const webFrame = document.getElementById('web-frame');
    const toolsList = document.getElementById('tools-list');
    const beforeLink = document.getElementById('before-link');
  
    // 각 페이지별 데이터 정의
    const pageData = {
      '1': { url: 'https://jeju-nyangtueo-yeohaeng-webaeb--freeutleeyj.replit.app/', tools: ['Stitch', 'Replit', 'Gemini'], detailUrl: '1-1.html' },
      '2': { url: 'page2.html', tools: ['Adobe XD', 'ChatGPT', 'Anima'], detailUrl: '2-1.html' },
      '3': { url: 'page3.html', tools: ['Figma', 'Claude'], detailUrl: '3-1.html' },
      '4': { url: 'page4.html', tools: ['Adobe XD', 'Gemini'], detailUrl: '4-1.html' }
    };
  
    // 아이템 클릭 이벤트 바인딩
    numItems.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
  
        // 활성화된 버튼 스타일(active 클래스) 이동
        numItemBoxes.forEach(box => box.classList.remove('active'));
        if (numItemBoxes[index]) {
          numItemBoxes[index].classList.add('active');
        }
  
        // 선택한 페이지 데이터 가져오기
        const pageNum = item.getAttribute('data-page');
        const data = pageData[pageNum];
  
        if (data) {
          // iframe 주소 변경
          if (webFrame) webFrame.src = data.url;
  
          // 우측 li 리스트 내용 동적 변경
          if (toolsList) {
            toolsList.innerHTML = '';
            data.tools.forEach(tool => {
              const li = document.createElement('li');
              li.textContent = tool;
              toolsList.appendChild(li);
            });
          }
  
          // Before 버튼의 링크 주소 변경
          if (beforeLink) beforeLink.href = data.detailUrl;
        }
      });
    });
  
    // 초기 실행 시 1번 버튼 활성화 상태 표시
    if (numItemBoxes.length > 0) {
      numItemBoxes[0].classList.add('active');
    }
  });
  