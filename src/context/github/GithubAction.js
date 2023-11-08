import axios from 'axios'
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL; 

//another way to code the get user and get repos with axios 
const githubAxios = axios.create({
    baseURL: GITHUB_URL,
})

// search results

export const searchUsers = async (text) => {
  
    const params = new URLSearchParams({
      q: text,
    });

const response = await githubAxios.get (`/search/users?${params}`)
return response.data.items
}

//Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos]  = await Promise.all([
    githubAxios.get(`/users/${login}`),
    githubAxios.get (`/users/${login}/repos`)

  ])
  return {user: user.data, repos: repos.data }
}

//before axios
//     try {
//       const response = await fetch(`${GITHUB_URL}/search/users?${params}`);

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const { items } = await response.json();

//       return items 
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

  //get single user

//  export const getUser = async (login) => {
    
//     const response = await fetch(`${GITHUB_URL}/users/${login}`);

//     if (response.status === 404) {
//       window.location = "/notfound";
//     } else {
//       const data = await response.json();
// return data
     
//     }
//   };
//   // g4etting repos finish
//   export const getUserRepos = async (login) => {
   
//     const params = new URLSearchParams({
//       sort: "created",
//       per_page: 10,
//     });
//    const response = await fetch(
//       `${GITHUB_URL}/users/${login}/repos?${params}`
//     );

//     const data = await response.json();
//     return data

    
//   };