import {developerTemplate} from './../views/developerTemplate'

async function renderDevelopers(developerData){
    let markup = ''

    developerData.forEach(developer => {
        markup += developerTemplate(developer)
    })
    return markup
}

export {renderDevelopers}