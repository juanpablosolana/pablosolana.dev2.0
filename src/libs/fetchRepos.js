const API = 'https://api.github.com/users/juanpablosolana/repos'
export default async function fetch(){
 const response = await fetch(API)
 let myRepo = await response.json()
 .catch(err=>{console.err(err)})
  return myRepo;
}

// export default fetch