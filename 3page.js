import './3page.css'

const images = {
  bed: 'https://images.pexels.com/photos/27439405/pexels-photo-27439405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  towels: 'https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  folded: 'https://images.pexels.com/photos/4210372/pexels-photo-4210372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shirt: 'https://images.pexels.com/photos/22441278/pexels-photo-22441278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  portrait: 'https://images.pexels.com/photos/8697934/pexels-photo-8697934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
}

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <div class="progress-bar" aria-hidden="true"><span></span></div>
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Tekla home">TEKLA</a>
      <nav class="desktop-nav" aria-label="주요 메뉴">
        <a href="#about">브랜드</a>
        <a href="#everyday">제품</a>
        <a href="#journal">저널</a>
      </nav>
      <div class="header-actions">
        <button class="text-button" data-open-search>검색</button>
        <button class="menu-button" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span>
          <b>메뉴</b>
        </button>
      </div>
    </header>

    <aside class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-top"><span>MENU</span><button class="close-button" aria-label="메뉴 닫기">×</button></div>
      <nav aria-label="모바일 메뉴">
        <a href="#about">브랜드 <span>↗</span></a>
        <a href="#everyday">제품 <span>↗</span></a>
        <a href="#rest">컬렉션 <span>↗</span></a>
        <a href="#journal">저널 <span>↗</span></a>
      </nav>
      <p>일상을 위한 편안함.<br />Copenhagen, Denmark</p>
    </aside>

    <main id="top">
      <section class="hero section-pad" id="about">
        <div class="hero-copy reveal">
          <p class="eyebrow">TEKLA OBJECTS · 2026</p>
          <h1>공간의<br /><em>안식</em></h1>
          <p class="intro">가장 편안한 순간을 위해 만들어진<br />오브젝트와 소재에 대한 이야기</p>
        </div>
        <div class="hero-grid">
          <figure class="image-card image-small reveal"><img src="${images.folded}" alt="정갈하게 접힌 베이지색 타월" /><figcaption>01 / BED LINEN</figcaption></figure>
          <figure class="image-card image-large reveal"><img src="${images.bed}" alt="차분한 색감의 침실과 침구" /><figcaption>02 / HOME COLLECTION</figcaption></figure>
        </div>
        <div class="hero-note reveal"><span>SCROLL TO EXPLORE</span><span class="arrow-down">↓</span></div>
      </section>

      <section class="manifesto section-pad" id="everyday">
        <div class="section-heading reveal"><span class="number">01</span><h2>일상의 의식</h2></div>
        <div class="editorial-row row-one">
          <figure class="image-card wide reveal"><img src="${images.towels}" alt="따뜻한 톤의 접힌 타월" /><figcaption>촉감은 공간을 기억하게 합니다</figcaption></figure>
          <div class="side-copy reveal"><p>매일 반복되는 작은 행동에<br />온전한 감각을 더합니다.</p><a class="line-link" href="#shop">제품 보기 <span>↗</span></a></div>
        </div>
        <div class="editorial-row row-two">
          <div class="side-copy reveal"><span class="small-label">MATERIAL / 001</span><p>단순한 형태와<br />오래 남는 소재</p></div>
          <figure class="image-card medium reveal"><img src="${images.folded}" alt="자연광 아래 놓인 섬유 제품" /><figcaption>100% ORGANIC COTTON</figcaption></figure>
        </div>
      </section>

      <section class="ritual section-pad" id="rest">
        <div class="section-heading reveal"><span class="number">02</span><h2>일상 속의<br /><em>온전한 쉼</em></h2></div>
        <div class="ritual-grid">
          <figure class="image-card portrait reveal"><img src="${images.portrait}" alt="화이트 셔츠를 입은 인물의 실루엣" /><figcaption>HOMEWEAR / SS26</figcaption></figure>
          <div class="ritual-text reveal"><p class="big-quote">“좋은 하루는<br />좋은 감각에서<br />시작됩니다.”</p><p class="body-copy">집 안의 모든 순간이 편안하도록. 피부에 닿는 소재부터 손에 잡히는 무게까지, 우리가 매일 사용하는 것들을 다시 생각합니다.</p></div>
          <figure class="image-card square reveal"><img src="${images.shirt}" alt="자연스럽게 걸린 흰색 셔츠" /><figcaption>EVERYDAY PIECES</figcaption></figure>
        </div>
      </section>

      <section class="rest section-pad" id="journal">
        <div class="section-heading reveal"><span class="number">03</span><h2>나만의 휴식</h2></div>
        <div class="rest-grid">
          <div class="rest-card reveal"><div class="swatch swatch-cream"></div><span>01</span><h3>Softness</h3><p>피부에 닿는<br />가장 부드러운 감각</p></div>
          <div class="rest-card dark reveal"><div class="swatch swatch-charcoal"></div><span>02</span><h3>Quiet</h3><p>불필요한 것을 덜어낸<br />차분한 시간</p></div>
          <div class="rest-card reveal"><div class="swatch swatch-sand"></div><span>03</span><h3>Balance</h3><p>오래 사용할수록<br />깊어지는 균형</p></div>
        </div>
      </section>

      <section class="newsletter section-pad" id="shop">
        <div><span class="eyebrow">TEKLA LETTER</span><h2>구독하기 <span>↗</span></h2><p>새로운 컬렉션과 일상의 영감을 가장 먼저 만나보세요.</p></div>
        <form class="subscribe-form"><label class="sr-only" for="email">이메일 주소</label><input id="email" type="email" placeholder="이메일 주소" required /><button type="submit">등록</button></form>
        <p class="form-message" role="status"></p>
      </section>
    </main>

    <footer class="site-footer section-pad"><a class="wordmark" href="#top">TEKLA</a><div class="footer-links"><a href="#about">ABOUT</a><a href="#everyday">SHOP</a><a href="#journal">JOURNAL</a><a href="#top">INSTAGRAM ↗</a></div><p>© 2026 TEKLA. All rights reserved.</p></footer>

    <dialog class="search-dialog"><button class="dialog-close" aria-label="검색 닫기">×</button><p class="eyebrow">SEARCH TEKLA</p><form method="dialog"><input type="search" placeholder="무엇을 찾고 있나요?" autofocus /><button type="submit">↗</button></form></dialog>
  </div>
`

const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false')
  mobileMenu.setAttribute('aria-hidden', 'true')
  mobileMenu.classList.remove('is-open')
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  mobileMenu.setAttribute('aria-hidden', String(isOpen))
  mobileMenu.classList.toggle('is-open', !isOpen)
})
document.querySelector('.close-button').addEventListener('click', closeMenu)
document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', closeMenu))

document.querySelectorAll('[data-open-search]').forEach((button) => button.addEventListener('click', () => document.querySelector('.search-dialog').showModal()))
document.querySelector('.dialog-close').addEventListener('click', () => document.querySelector('.search-dialog').close())

document.querySelector('.subscribe-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const message = document.querySelector('.form-message')
  message.textContent = '구독해주셔서 감사합니다.'
  event.currentTarget.reset()
})

const progress = document.querySelector('.progress-bar span')
window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  progress.style.width = `${(window.scrollY / maxScroll) * 100}%`
}, { passive: true })

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
