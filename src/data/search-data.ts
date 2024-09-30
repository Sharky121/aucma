import lunr from 'lunr';

const pages = [
    {
      path: '/about',
      title: 'О нас',
      content: 'Описание страницы "О нас".',
      keywords: ['о нас', 'компания', 'история']
    },
    {
      path: '/services',
      title: 'Наши услуги',
      content: 'Описание наших услуг.',
      keywords: ['услуги', 'работа', 'помощь']
    }
];

const index = lunr(function () {
    this.ref('path');
    this.field('title');
    this.field('content');
    this.field('keywords');
  
    // Добавляем  функцию  для  обработки  токенов
    this.pipeline.add(function(token) {
    if (typeof token === 'string') {
        //@ts-ignore
        return token.toLowerCase();
    }
    return token;
    });

    this.pipeline.remove(lunr.trimmer); // Удаляем  trimmer  из  pipeline

    pages.forEach(page => {
      this.add(page);
    });
  });

function searchPages(query: string) {
    const results = index.search(query);

    return results.map(result => ({
        path: result.ref,
        matchingWord: query
      }));
}

export { searchPages };