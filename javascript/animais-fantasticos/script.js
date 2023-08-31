// ANIMAÇAO IMAGENS E CONTEUDO

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');


    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        activeTab(0);

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav()

// ANIMAÇÃO LISTA FAQ

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativoClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(ativoClass);
        accordionList[0].nextElementSibling.classList.add(ativoClass);

        function activeAccordion() {
            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

// SCROL SUAVE LINK INTERNO

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView ({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach ((link) => {
        link.addEventListener('click', scrollToSection)
    });
}

initScrollSuave();

// ANIMAR COM SCROLL

function initAnimacaoScroll() {
    const sections  = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();

// APARECER IMAGEM AO CLICK

const listaImagens = document.querySelectorAll('')