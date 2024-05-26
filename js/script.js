// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon) {
            nav.style.display = 'none';
        }
    });
});



const newsContainer = document.getElementById('news-container');

const newsData = [
    { date: '17 мая 2024', title: '18 мая 2024 г. будут проводится плановые/технические работы на сервисах ДБО и СБП.', 
    content: 'Уважаемые клиенты! АО «НК Банк» уведомляет, что 18.05.2024 г. МСК в промежутках с 8-00 до 10-00 и с 11:00 до 13:00 будут проводиться плановые работы на сетевой инфраструктуре банка, с остановкой сервисов СБП, в связи с чем будет не доступно мобильное приложение NK Bank Card Pay. Приносим свои извинения за доставленные неудобства в работе.' },
    { date: '22 апреля 2024', title: 'Изменение тарифов на предоставление ДБО физическим лицам с 01 мая 2024 года.', 
    content: 'Уважаемые клиенты и партнеры! С 01 мая 2024 года АО «НК Банк» изменяет Тарифы на предоставление дистанционного банковского обслуживания физическим лицам – клиентам АО «НК Банк».' },
    {
        date:'3 апреля 2024', title:"С 08 апреля 2024 г. изменение тарифов по предоставлению в аренду индивидуальных сейфов.",
        content: "Уважаемые клиенты и партнеры!\n С 08 апреля 2024 года АО «НК Банк» изменяет Тарифы по предоставлению в аренду индивидуальных сейфов, установленных в АО «НК БАНК»."
    },
    {
        date: "18 декабря 2023", title: "АКРА ПОВЫСИЛО КРЕДИТНЫЙ РЕЙТИНГ АО «НК БАНК»",
        content:"Аналитическое Кредитное Рейтинговое Агентство повысило кредитный рейтинг АО «НК Банк» до уровня ВB-(RU), прогноз «Стабильный» Кредитный рейтинг АО \"НК Банк\""
    },
    {
        date: "15 декабря 2023", title: "Открытие нового филиала НК-Банка в Казани",
        content: "Сегодня НК-Банк открыл новый филиал в Казани, предоставляя клиентам региона более широкий доступ к банковским услугам."
    },
    {
        date: "28 ноября 2023", title: "НК-Банк внедряет новые технологии безопасности",
        content: "НК-Банк объявил о внедрении новой системы кибербезопасности, чтобы обеспечить максимальную защиту данных своих клиентов."
    },
    {
        date: "10 октября 2023", title: "НК-Банк поддерживает малый бизнес",
        content: "НК-Банк запустил новую программу кредитования для малого и среднего бизнеса с выгодными условиями и низкими процентными ставками."
    },
    {
        date: "05 сентября 2023", title: "Новая услуга онлайн-консультаций от НК-Банка",
        content: "НК-Банк представил услугу онлайн-консультаций, позволяющую клиентам получить профессиональную помощь, не выходя из дома."
    },
    {
        date: "22 августа 2023", title: "Партнёрство НК-Банка с международными финансовыми институтами",
        content: "НК-Банк заключил стратегическое партнёрство с несколькими международными финансовыми институтами для улучшения своих услуг."
    },
    {
        date: "18 июля 2023", title: "НК-Банк проводит благотворительную акцию для детей",
        content: "В преддверии новогодних праздников НК-Банк организовал благотворительную акцию для детей из малообеспеченных семей."
    }
];

// Функция для создания карточки новости
function createNewsCard(news) {
    const card = document.createElement('div');
    card.classList.add('card');

    const dateElement = document.createElement('p');
    dateElement.textContent = news.date;
    card.appendChild(dateElement);

    const titleElement = document.createElement('h2');
    titleElement.textContent = news.title;
    card.appendChild(titleElement);

    const contentElement = document.createElement('text');
    contentElement.textContent = news.content.slice(0, 100) + '...';
    card.appendChild(contentElement);

    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'Показать полностью';
    showMoreButton.classList.add('show-more');
    showMoreButton.addEventListener('click', () => {
        if (showMoreButton.textContent === 'Показать полностью') {
            contentElement.textContent = news.content;
            showMoreButton.textContent = 'Скрыть';
        } else {
            contentElement.textContent = news.content.slice(0, 100) + '...';
            showMoreButton.textContent = 'Показать полностью';
        }
    });
    card.appendChild(showMoreButton);

    return card;
}

// Заполнение контейнера новостей
newsData.forEach(news => {
    const card = createNewsCard(news);
    newsContainer.appendChild(card);
});
