// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    // 스크롤 애니메이션
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // 모든 주요 섹션에 애니메이션 적용
    document.querySelectorAll('section > *').forEach((item) => {
        observer.observe(item);
    });

    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 모바일 메뉴 토글
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 네비게이션 기능 구현
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.customer-section');

    // 초기에는 모든 섹션 숨기기
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 첫 번째 섹션 보이기
    if (sections[0]) {
        sections[0].style.display = 'block';
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 모든 nav-item에서 active 클래스 제거
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 클릭된 항목에 active 클래스 추가
            item.classList.add('active');
            
            // 해당하는 섹션 표시
            const targetId = item.getAttribute('data-target');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                    // 부드러운 페이드인 효과
                    section.style.opacity = 0;
                    setTimeout(() => {
                        section.style.opacity = 1;
                    }, 10);
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}); 
