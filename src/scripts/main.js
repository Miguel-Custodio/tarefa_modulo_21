document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const avatarSection = document.querySelector('.avatar');
    const alturaAvatar = avatarSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaAvatar) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeToddasAbas();
            aba.classList.add('avatarfilmes__list--is--active')
            removeBotaoAtivo();
            botao.target.classList.add('avatarfilmes__tabs__button--is--active');
        })
    }


    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeToddasAbas();
            aba.classList.add('avatarfilmes__list--is--active')
            removeBotaoAtivo();
            botao.target.classList.add('avatarfilmes__tabs__button--is--active');
        })
    }

    function ocultaElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header');
    }
    
    function exibeElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header');
    }
    
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
    
        for (let i=0; i < buttons.length; i++) {
            buttons[i].classList.remove('avatarfilmes__tabs__button--is--active');
        }
    }
    
    function escondeToddasAbas () {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('avatarfilmes__list--is--active');
        }
    }
})
