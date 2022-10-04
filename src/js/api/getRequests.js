async function getAllDevelopers() {
    // a list of all the devs
    const res = await fetch(`http://localhost:3000/developers`)
    return await res.json()
}

export {getAllDevelopers}