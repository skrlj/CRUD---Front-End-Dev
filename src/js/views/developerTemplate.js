// Template Literal - Developer Card...(Readme)
// Developer template is an object props

function developerTemplate({type, firstName, lastName, avatar, ...props}){
    return  `
    <li class="developer">
    <aside >
       <div class="avatar ${type}">
        <img
        src="${avatar}"
        width="104"
        height="104"
        alt=" ${firstName} ${lastName} profile avatar"
      />
       </div>
       
       <header>           
        <h2 class="name"> ${firstName} ${lastName}</h2> 
        <p class="speciality">${type} </p>
       </header>
    </aside>
  </li>
    `
}

export {developerTemplate}