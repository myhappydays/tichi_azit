// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 요소들 가져오기
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrollDownBtn = document.getElementById('scroll-down');
    const bgBlob1 = document.getElementById('bg-blob-1');
    const bgBlob2 = document.getElementById('bg-blob-2');
    
    // 마우스 위치 추적 변수
    let mouseX = 0;
    let mouseY = 0;
    
    // 1. 네비게이션 스크롤 효과
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        // 맨 위로 가기 버튼 표시/숨김
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // 2. 모바일 메뉴 토글
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // 모바일 메뉴 링크 클릭 시 메뉴 닫기
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // 3. 부드러운 스크롤 (네비게이션 링크)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // 네비게이션 높이 고려
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 4. 스크롤 다운 버튼
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 5. 맨 위로 가기 버튼
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 6. 마우스 추적 배경 애니메이션
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 배경 블롭 이동 (패럴랙스 효과)
        if (bgBlob1) {
            const moveX1 = (mouseX - window.innerWidth / 2) * 0.01;
            const moveY1 = (mouseY - window.innerHeight / 2) * 0.01;
            bgBlob1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
        }
        
        if (bgBlob2) {
            const moveX2 = (mouseX - window.innerWidth / 2) * -0.015;
            const moveY2 = (mouseY - window.innerHeight / 2) * -0.015;
            bgBlob2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
        }
    });
    
    // 7. 스크롤 애니메이션 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 통계 카운터 애니메이션
                if (entry.target.classList.contains('stat-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // 애니메이션할 요소들 관찰
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
    
    // 8. 통계 카운터 애니메이션
    function animateCounter(element) {
        const numberElement = element.querySelector('.text-4xl');
        if (!numberElement) return;
        
        const finalNumber = parseInt(numberElement.textContent);
        const duration = 2000; // 2초
        const increment = finalNumber / (duration / 16); // 60fps
        let currentNumber = 0;
        
        const counter = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                numberElement.textContent = finalNumber + '+';
                clearInterval(counter);
            } else {
                numberElement.textContent = Math.floor(currentNumber) + '+';
            }
        }, 16);
    }
    
    // 9. CTA 버튼 클릭 이벤트
    const ctaButtons = document.querySelectorAll('.cta-button, .final-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 리플 효과
            createRipple(this, event);
            
            // 실제 동작 (이메일이나 연락처로 이동)
            const buttonText = this.textContent.trim();
            if (buttonText.includes('시작하기') || buttonText.includes('상담')) {
                // 이메일 클라이언트 열기
                window.location.href = 'mailto:oli@tichi.or.kr?subject=TiChi 프로그램 문의&body=안녕하세요! TiChi 프로그램에 관심이 있어서 연락드립니다.';
            }
        });
    });
    
    // 10. 리플 효과 함수
    function createRipple(button, event) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // 11. 키보드 네비게이션
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모바일 메뉴 닫기
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        
        // 스페이스바로 스크롤
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            window.scrollBy(0, window.innerHeight * 0.8);
        }
    });
    
    // 12. 이메일 링크 클릭 이벤트
    const emailLinks = document.querySelectorAll('a[href^="mailto:"], p:contains("@")');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // 13. 로딩 애니메이션
    window.addEventListener('load', function() {
        document.body.classList.add('loading');
        
        // 히어로 텍스트 순차 애니메이션
        const heroWords = document.querySelectorAll('.hero-word');
        heroWords.forEach((word, index) => {
            setTimeout(() => {
                word.style.animationDelay = `${index * 0.2}s`;
                word.classList.add('animate');
            }, index * 200);
        });
    });
    
    // 14. 성능 최적화: 스크롤 쓰로틀링
    let scrollTimeout;
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // 스크롤 방향 감지
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // 아래로 스크롤: 네비게이션 숨기기
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // 위로 스크롤: 네비게이션 보이기
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        }, 10);
    });
    
    // 15. 터치 디바이스 지원
    if ('ontouchstart' in window) {
        // 터치 이벤트를 위한 추가 처리
        const touchElements = document.querySelectorAll('.hover\\:scale-110');
        touchElements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            el.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    console.log('🎨 TiChi 웹사이트가 성공적으로 로드되었습니다!');
});

// CSS 애니메이션 키프레임 동적 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes slideInFromLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);