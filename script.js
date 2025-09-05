// 로컬 스토리지 키
const STORAGE_KEY = 'nooguna_promotions';

// 롱테일 키워드 템플릿
const longtailTemplates = [
    '{keyword} 추천',
    '{keyword} 베스트',
    '{keyword} 할인',
    '{keyword} 이벤트',
    '{keyword} 가격비교',
    '{keyword} 후기',
    '{keyword} 리뷰',
    '{keyword} 순위',
    '{keyword} TOP10',
    '{keyword} 인기',
    '{keyword} 최저가',
    '{keyword} 무료배송',
    '{keyword} 당일배송',
    '{keyword} 신상품',
    '{keyword} 세일',
    '{keyword} 쿠폰',
    '{keyword} 프로모션',
    '{keyword} 비교',
    '{keyword} 구매가이드',
    '{keyword} 사용법'
];

// 홍보 콘텐츠 템플릿
const contentTemplates = [
    {
        title: '{keyword} 완벽 가이드 2025',
        generateBody: (keyword, longtails, url, anchorText) => {
            const intro = `안녕하세요! ${keyword}에 대해 찾고 계신 분들을 위한 상세한 정보를 준비했습니다. 
최근 ${keyword} 관련 트렌드와 함께 유용한 정보들을 종합적으로 정리해드립니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 ${keyword} 관련 핵심 키워드 총정리

${longtails}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 ${keyword} 선택 가이드

1. 품질 검증 체크리스트
   ✓ 인증 마크 확인
   ✓ 사용자 리뷰 평점 4.0 이상
   ✓ A/S 보증 기간 확인
   ✓ 정품 인증 여부

2. 가격 비교 팁
   • 시즌별 할인 시기 체크
   • 묶음 구매 할인 활용
   • 쿠폰 및 적립금 활용
   • 무료배송 조건 확인

3. 구매 전 필수 확인사항
   • 상세 스펙 확인
   • 배송 기간 및 방법
   • 교환/반품 정책
   • 고객센터 운영 시간

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 ${keyword} 활용 꿀팁

▶ 초보자를 위한 팁
${keyword} 처음 이용하시는 분들은 기본 기능부터 차근차근 익히시는 것을 추천합니다.

▶ 중급자를 위한 팁  
다양한 기능을 조합하여 더욱 효율적으로 활용해보세요.

▶ 전문가 팁
고급 기능과 커스터마이징을 통해 최적화된 결과를 얻으실 수 있습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ${keyword} 시장 동향

최근 ${keyword} 시장은 지속적인 성장세를 보이며,
특히 온라인 구매 비중이 크게 증가하고 있습니다.

• 전년 대비 30% 성장
• 온라인 구매 비중 75%
• 20-30대 구매층 45%
• 재구매율 평균 68%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌟 추천 정보

${anchorText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✉️ 추가 정보
더 자세한 정보가 필요하시다면 아래 링크를 참고해주세요.
🔗 자세히 보기: <a href="${url}" target="_blank" rel="nofollow">${url}</a>

최종 업데이트: ${new Date().toLocaleDateString('ko-KR')}`
            return intro;
        }
    },
    {
        title: '{keyword} 전문가가 알려주는 모든 것',
        generateBody: (keyword, longtails, url, anchorText) => {
            return `🔥 ${keyword} 완벽 분석 리포트

오늘은 ${keyword}에 대한 A부터 Z까지 모든 정보를 상세히 다뤄보겠습니다.
전문가의 시각으로 분석한 내용을 바탕으로 실용적인 정보를 제공해드립니다.

════════════════════════════════════════

📋 목차
1. ${keyword} 기본 개념
2. 주요 특징 및 장점
3. 선택 가이드
4. 자주 묻는 질문
5. 전문가 추천

════════════════════════════════════════

1️⃣ ${keyword} 기본 개념

${keyword}는 현재 많은 분들이 관심을 가지고 있는 주제입니다.
기본적인 개념부터 차근차근 알아보겠습니다.

🔍 관련 검색어 모음
${longtails}

════════════════════════════════════════

2️⃣ 주요 특징 및 장점

✨ 핵심 특징
• 뛰어난 가성비
• 검증된 품질
• 편리한 사용성
• 우수한 내구성
• 다양한 활용도

💪 강점 분석
1. 경쟁력 있는 가격대
2. 우수한 고객 만족도
3. 빠른 배송 서비스
4. 체계적인 A/S 시스템
5. 다양한 결제 옵션

════════════════════════════════════════

3️⃣ ${keyword} 선택 가이드

🎯 구매 전 체크리스트
□ 예산 범위 설정
□ 필요 기능 목록 작성
□ 브랜드별 비교 분석
□ 사용자 리뷰 확인
□ 보증 기간 체크

💰 가격대별 추천
• 가성비형: 3-5만원대
• 스탠다드형: 5-10만원대
• 프리미엄형: 10만원 이상

════════════════════════════════════════

4️⃣ 자주 묻는 질문 (FAQ)

Q: ${keyword} 선택 시 가장 중요한 것은?
A: 개인의 사용 목적과 예산을 고려하는 것이 가장 중요합니다.

Q: 온라인 구매가 안전한가요?
A: 신뢰할 수 있는 쇼핑몰을 이용한다면 안전합니다.

Q: A/S는 어떻게 받나요?
A: 구매처 또는 제조사 고객센터를 통해 신청 가능합니다.

════════════════════════════════════════

5️⃣ 전문가 추천

${anchorText}

════════════════════════════════════════

📍 마무리

${keyword}에 대한 상세 가이드를 마치겠습니다.
추가 정보는 아래 링크에서 확인하실 수 있습니다.

🔗 자세히 보기: <a href="${url}" target="_blank" rel="nofollow">${url}</a>

작성일: ${new Date().toLocaleDateString('ko-KR')}
`
        }
    },
    {
        title: '{keyword} 구매 가이드 & 리뷰',
        generateBody: (keyword, longtails, url, anchorText) => {
            return `🏆 ${keyword} 베스트 정보 모음

${keyword}를 찾고 계신가요? 
수많은 정보 중에서 정말 필요한 핵심만 정리했습니다.

▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

🔎 인기 검색 키워드

${longtails}

▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

📈 ${keyword} 트렌드 분석

◆ 최근 동향
${keyword} 시장은 최근 급격한 변화를 겪고 있습니다.
특히 다음과 같은 트렌드가 주목받고 있습니다:

• 스마트 기능 강화
• 친환경 소재 사용 증가
• 개인 맞춤형 서비스 확대
• 구독 서비스 모델 도입
• AI 기술 접목

◆ 소비자 선호도 변화
1. 품질 > 가격 (45%)
2. 브랜드 신뢰도 (30%)
3. 디자인 (15%)
4. 기능성 (10%)

───────────────────────────────────

⭐ ${keyword} 평가 기준

🥇 최우수 평가 항목
• 성능: ★★★★★
• 내구성: ★★★★★
• 가격: ★★★★☆
• 디자인: ★★★★★
• A/S: ★★★★☆

🥈 우수 평가 항목
• 사용 편의성
• 에너지 효율
• 소음 레벨
• 안전성
• 호환성

───────────────────────────────────

💼 ${keyword} 구매 전략

STEP 1: 니즈 분석
- 사용 목적 명확히 하기
- 필수 기능 vs 부가 기능 구분
- 예산 범위 설정

STEP 2: 시장 조사
- 브랜드별 특징 비교
- 가격 비교 사이트 활용
- 프로모션 시기 체크

STEP 3: 상세 비교
- 스펙 상세 비교
- 사용자 리뷰 분석
- 전문가 평가 참고

STEP 4: 최종 결정
- 보증 기간 확인
- 배송 옵션 선택
- 결제 혜택 활용

───────────────────────────────────

🎁 특별 추천

${anchorText}

───────────────────────────────────

📝 체크리스트

☑ 정품 여부 확인
☑ 보증서 포함 여부
☑ 한글 매뉴얼 제공
☑ A/S 센터 위치
☑ 교환/반품 정책
☑ 추가 비용 발생 여부
☑ 설치 서비스 포함
☑ 소모품 가격

───────────────────────────────────

📞 문의 및 상담

더 자세한 정보를 원하시나요?
아래 링크에서 확인해보세요!

🔗 자세히 보기: <a href="${url}" target="_blank" rel="nofollow">${url}</a>

최종 수정: ${new Date().toLocaleDateString('ko-KR')} ${new Date().toLocaleTimeString('ko-KR')}`
        }
    }
];

let generatedData = null;
let promotions = [];
let currentPage = 1;
const itemsPerPage = 10;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadPromotions();
    addInputListeners();
});

function addInputListeners() {
    document.getElementById('keyword').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // 폼 제출 방지
            if (typeof generateContent === 'function') {
                generateContent();
            }
        }
    });

    document.getElementById('url').addEventListener('input', function(e) {
        const url = e.target.value;
        if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
            e.target.value = 'https://' + url;
        }
    });

    document.getElementById('domain').addEventListener('input', function(e) {
        const domain = e.target.value;
        if (domain && !domain.startsWith('http://') && !domain.startsWith('https://')) {
            e.target.value = 'https://' + domain;
        }
    });
}

// 도메인 추출
function extractDomain(str) {
    const match = str.match(/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})/);
    return match ? match[1] : null;
}

// 롱테일 키워드 생성
function generateLongtailKeywords(keyword) {
    const keywords = keyword.split(',').map(k => k.trim()).filter(k => k);
    const longtails = [];
    
    keywords.forEach(kw => {
        const shuffled = [...longtailTemplates].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.floor(Math.random() * 3) + 5); // 5~7개
        
        selected.forEach(template => {
            longtails.push(template.replace('{keyword}', kw));
        });
    });
    
    return longtails;
}

// 콘텐츠 생성 (window.generateContent로 접근 가능하도록 전역 스코프에 할당)
window.originalGenerateContent = function() {
    const url = document.getElementById('url').value;
    const keyword = document.getElementById('keyword').value;
    const domainInput = document.getElementById('domain').value.trim();
    
    if (!url || !keyword) {
        showToast('URL과 키워드를 모두 입력해주세요', 'error');
        return;
    }
    
    document.getElementById('loading').classList.add('active');
    
    const longtails = generateLongtailKeywords(keyword);
    
    let domain = null;
    let anchorText = '';
    
    if (domainInput) {
        domain = extractDomain(domainInput) || domainInput;
        const randomIndex = Math.floor(Math.random() * longtails.length);
        const selectedKeyword = longtails[randomIndex];
        anchorText = `<a href="${domainInput.startsWith('http') ? domainInput : 'https://' + domainInput}" target="_blank" rel="nofollow">👉 ${selectedKeyword}</a>`;
        longtails[randomIndex] = `🔗 ${selectedKeyword} (${domain})`;
    }
    
    const template = contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
    const keywords = keyword.split(',').map(k => k.trim()).filter(k => k);
    const mainKeyword = keywords[0] || '정보';
    
    const title = template.title.replace('{keyword}', mainKeyword);
    const longtailsList = longtails.map(lt => `• ${lt}`).join('\n');
    const body = template.generateBody(mainKeyword, longtailsList, url, anchorText || `🔗 관련 정보 보기: <a href="${url}" target="_blank" rel="nofollow">${url}</a>`);
    
    generatedData = {
        url: url,
        keyword: keyword,
        longtails: longtails,
        title: title,
        content: body,
        date: new Date().toISOString(),
        domain: domain
    };
    
    setTimeout(() => {
        document.getElementById('loading').classList.remove('active');
        
        const longtailContainer = document.getElementById('longtailKeywords');
        longtailContainer.innerHTML = longtails.map(lt => {
            if (lt.startsWith('🔗')) {
                return `<span class="keyword-tag domain-tag">${lt}</span>`;
            }
            return `<span class="keyword-tag">${lt}</span>`;
        }).join('');
        
        const preview = document.getElementById('contentPreview');
        preview.innerHTML = `<h4>${title}</h4><div>${body.replace(/<a /g, '<a style="color: var(--primary-color); text-decoration: underline;" ')}</div>`;
        
        document.getElementById('submitBtn').disabled = false;
        
        showToast('콘텐츠가 생성되었습니다!', 'success');
    }, 1000);
}

// 홍보 등록
async function submitPromotion() {
    if (!generatedData) {
        showToast('먼저 콘텐츠를 생성해주세요', 'error');
        return;
    }
    
    try {
        // 등록 버튼 비활성화
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> 등록 중...';
        
        // API로 데이터 저장
        const response = await fetch('/api/promotions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                promotion: generatedData
            })
        });
        
        if (response.ok) {
            // 성공 시 로컬 데이터도 업데이트
            promotions.unshift(generatedData);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(promotions));
            
            updateStats();
            currentPage = 1;
            displayPromotions();
            
            // 폼 리셋
            document.getElementById('url').value = '';
            document.getElementById('keyword').value = '';
            document.getElementById('domain').value = '';
            
            const genSection = document.getElementById('generatedContentSection');
            if (genSection) {
                genSection.classList.remove('active');
            }
            
            generatedData = null;
            showToast('홍보가 성공적으로 등록되었습니다!', 'success');
            
            setTimeout(() => {
                const boardSection = document.getElementById('board-section');
                if (boardSection) {
                    boardSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
            
        } else {
            const errorData = await response.json();
            showToast(errorData.error || '등록 중 오류가 발생했습니다', 'error');
        }
        
    } catch (error) {
        console.error('등록 실패:', error);
        showToast('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', 'error');
    } finally {
        // 버튼 복구
        document.getElementById('submitBtn').innerHTML = '<i class="fas fa-rocket"></i> 지금 바로 노출시키기';
        document.getElementById('submitBtn').disabled = generatedData ? false : true;
    }
}

async function loadPromotions() {
    try {
        // 먼저 localStorage에서 로드 (빠른 표시용)
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                promotions = JSON.parse(saved);
                updateStats();
                displayPromotions();
            } catch (e) {
                console.error("Error parsing promotions from localStorage", e);
            }
        }

        // API에서 최신 데이터 가져오기
        const response = await fetch('/api/promotions');
        if (response.ok) {
            const data = await response.json();
            promotions = data.promotions || [];
            
            // localStorage 업데이트
            localStorage.setItem(STORAGE_KEY, JSON.stringify(promotions));
            
            // UI 업데이트
            updateStats();
            displayPromotions();
        }
    } catch (error) {
        console.error('데이터 로드 실패:', error);
        // API 실패 시 localStorage 데이터만 사용
        updateStats();
        displayPromotions();
    }
}

function savePromotions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(promotions));
}

function updateStats() {
    document.getElementById('totalCount').textContent = promotions.length;
    const today = new Date().toDateString();
    const todayCount = promotions.filter(p => new Date(p.date).toDateString() === today).length;
    document.getElementById('todayCount').textContent = todayCount;
}

function displayPromotions() {
    const listContainer = document.getElementById('promotionList');
    const paginationContainer = document.getElementById('pagination');
    
    if (promotions.length === 0) {
        listContainer.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 40px; color: #999;">아직 등록된 홍보가 없습니다.</td></tr>`;
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    const totalPages = Math.ceil(promotions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPromotions = promotions.slice(startIndex, startIndex + itemsPerPage);
    
    listContainer.innerHTML = currentPromotions.map((promo, index) => {
        const date = new Date(promo.date);
        const dateStr = `${date.getFullYear()}.${(date.getMonth()+1).toString().padStart(2,'0')}.${date.getDate().toString().padStart(2,'0')}`;
        const timeStr = `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`;
        
        const keywordTags = promo.longtails.slice(0, 3).map(lt => {
            const cleanLt = lt.replace(/🔗 | [\s\S]*?\)/g, '');
            return `<span class="keyword-tag">${escapeHtml(cleanLt)}</span>`;
        }).join('');
        
        const rowNumber = startIndex + index + 1;
        
        return `
            <tr>
                <td>${rowNumber}</td>
                <td>
                    <a href="content.html?id=${startIndex + index}" class="promotion-title">${escapeHtml(promo.title)}</a>
                    <a href="${escapeHtml(promo.url)}" class="promotion-url" target="_blank" rel="nofollow">${escapeHtml(promo.url)}</a>
                </td>
                <td><div class="promotion-keywords">${keywordTags}</div></td>
                <td>${dateStr} <small>${timeStr}</small></td>
                <td><a href="content.html?id=${startIndex + index}" class="view-btn">보기</a></td>
            </tr>
        `;
    }).join('');
    
    updatePagination(totalPages);
}

function updatePagination(totalPages) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    paginationHTML += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>◀</button>`;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage > 3) {
        paginationHTML += `<button onclick="changePage(1)">1</button><span class="page-dots">...</span>`;
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `<button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
    }

    if (totalPages - currentPage > 2) {
        paginationHTML += `<span class="page-dots">...</span><button onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    paginationHTML += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>▶</button>`;
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(promotions.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayPromotions();
    
    const boardTable = document.getElementById('promotionTable');
    if (boardTable) {
        boardTable.scrollIntoView({ behavior: 'smooth' });
    }
}


function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.style.background = type === 'error' ? 'var(--danger-color)' : 'var(--success-color)';
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
