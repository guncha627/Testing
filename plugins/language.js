export default (content, inject)=>{
    inject('tt', (tm, en, ru)=>{
        if(content.app.i18n.locale === 'tm') return tm
        else if(content.app.i18n.locale === 'en') return en
        return ru
    })
}