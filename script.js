// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    
    // 스크롤 시 부드러운 이동
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 모든 nav-item에서 active 클래스 제거
            navItems.forEach(nav => nav.classList.remove('active'));
            // 클릭된 항목에 active 클래스 추가
            item.classList.add('active');
            
            // 해당 섹션으로 부드럽게 스크롤
            const targetId = item.querySelector('a').getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 스크롤 위치에 따른 네비게이션 활성화
    const sections = document.querySelectorAll('.service-section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('a').getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}); 
