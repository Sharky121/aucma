const YandexMetrika = () => {
    const script = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
      ym(98962211, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
      });
    `;
  
    const noscript = `<div><img src="https://mc.yandex.ru/watch/98962211" style="position:absolute; left:-9999px;" alt="" /></div>`;
  
    return (
      <>
        <script dangerouslySetInnerHTML={{ __html: script }} />
        <noscript dangerouslySetInnerHTML={{ __html: noscript }} />
      </>
    );
  };
  
export default YandexMetrika;
  