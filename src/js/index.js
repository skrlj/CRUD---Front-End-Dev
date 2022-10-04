
// Import all the developers JSON Data
import {getAllDevelopers} from './api/getRequests'
import {renderDevelopers} from './render/renderDevelopers'

async function appInit(){
    const developerData = await getAllDevelopers()

    if(developerData){
        // start the process of rendering the li for developer card if there is developerData
        document.querySelector('#developerList').innerHTML = await renderDevelopers(developerData)
    }
}

appInit()
