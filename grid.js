// Grid page Popular Series fetch api
// import { animeInfoTemplate } from "./info.js";

const popularSeries = document.querySelector("[data-popular-anime]");
export const SESSION_STORAGE_KEY = "ANIME-SHOW-info";

// const infoPage = document.querySelector("[data-info-page]");

const cardTemplate = show => {
  const card = `
      <div class="anime-card flow-content">
          <div class="image">  
              <a href="#">
                  <svg  class="heart" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3531 10.5C13.8063 10.5 11.7063 12.5553 11.7063 15.1468C11.7063 17.6936 13.7616 19.7936 16.3531 19.7936C18.9446 19.7936 20.9999 17.7383 20.9999 15.1468C20.9999 12.5553 18.9446 10.5 16.3531 10.5ZM18.8106 15.817H17.2467C17.1127 15.817 17.0233 15.9064 17.0233 16.0404V17.6043C17.0233 17.9617 16.7106 18.2745 16.3531 18.2745C15.9957 18.2745 15.6829 17.9617 15.6829 17.6043V16.0404C15.6829 15.9064 15.5935 15.817 15.4595 15.817H13.8957C13.5382 15.817 13.2254 15.5043 13.2254 15.1468C13.2254 14.7894 13.5382 14.4766 13.8957 14.4766H15.4595C15.5935 14.4766 15.6829 14.3872 15.6829 14.2532V12.6894C15.6829 12.3319 15.9957 12.0191 16.3531 12.0191C16.7106 12.0191 17.0233 12.3319 17.0233 12.6894V14.2532C17.0233 14.3872 17.1127 14.4766 17.2467 14.4766H18.8106C19.168 14.4766 19.4808 14.7894 19.4808 15.1468C19.4808 15.5043 19.2127 15.817 18.8106 15.817Z" fill="#FFD9D9"/>
                  <path d="M10.4106 14.566C10.6787 11.8851 12.734 9.69575 15.3702 9.24894C16.9787 8.98085 18.4979 9.38298 19.7043 10.1872C19.7489 10.2319 19.8383 10.1872 19.8383 10.1426C20.5532 8.53404 20.9553 7.10426 20.9553 6.0766C20.9553 2.72553 18.4979 0 15.5043 0C13.5383 0 11.7064 1.20638 10.7681 3.0383C10.6787 3.17234 10.4553 3.17234 10.4106 3.0383C9.42766 1.20638 7.64043 0 5.58511 0C2.50213 0 0 2.77021 0 6.21064C0 9.74043 3.84255 16.2191 10.2766 20.9106C10.366 20.9553 10.4106 21 10.5 21C10.5894 21 10.634 21 10.7234 20.9553C11.3043 20.5979 11.8404 20.1957 12.3766 19.7489C12.4213 19.7043 12.4213 19.6149 12.3766 19.5702C10.9915 18.3638 10.2319 16.5319 10.4106 14.566Z" fill="#FFD9D9"/>
                  </svg>
                  <img class="poster" src="${show.cover_image}" alt="">
              </a>
          </div>
          <div class="info">
              <h3 class="title">
                  <a class="name" href="info-page.html" data-id="${show.id}">${show.titles.en}</a>
              </h3>
              <div class="rating">
                  <p>${show.score}</p>
                  
              </div>
          </div>
      </div>
      `;

  popularSeries.innerHTML += card;
};

// const animeInfoTemplate = show => {
//   const description = `
//     <div class="info flow-content">
//     <h1 class="main-heading">${show.titles.en}</h1>
//     <p class="spacer">
//       ${show.descriptions.en}
//     </p>
//     <div class="tags">
//       <a href="#" class="tag">${show.genres[0]}</a>
//       <a href="#" class="tag">${show.genres[1]}</a>
//       <a href="#" class="tag">${show.genres[2]}</a>
//       <a href="#" class="tag">${show.genres[3]}</a>
//     </div>
//     <div class="cta">
//       <!-- <a href="#" class="btn-secondary btn-secondary--play">
//                 <img src="images/play button.svg" alt="" />Play</a
//               > -->
//       <a href="#" class="btn-secondary btn-secondary--play">
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M12 0C9.62663 0 7.30655 0.703787 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519945 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9965 8.81849 22.731 5.7683 20.4814 3.51863C18.2317 1.26897 15.1815 0.00354552 12 0V0ZM18.4744 12.6486L18.4543 12.6608L9.11889 18.0502L9.09768 18.0625C8.97891 18.1311 8.84418 18.1672 8.70704 18.1672C8.5699 18.1672 8.43517 18.1311 8.31639 18.0626C8.19761 17.994 8.09896 17.8954 8.03036 17.7767C7.96176 17.6579 7.92563 17.5232 7.92558 17.386V6.55814C7.92563 6.421 7.96176 6.28628 8.03036 6.16753C8.09896 6.04877 8.19761 5.95017 8.31639 5.88161C8.43517 5.81306 8.5699 5.77698 8.70704 5.77699C8.84418 5.777 8.97891 5.8131 9.09768 5.88167L9.11889 5.89395L18.4543 11.2833L18.4744 11.2956C18.5931 11.3642 18.6916 11.4629 18.7601 11.5816C18.8286 11.7003 18.8647 11.835 18.8647 11.9721C18.8647 12.1092 18.8286 12.2438 18.7601 12.3626C18.6916 12.4813 18.5931 12.5799 18.4744 12.6486Z"
//             fill="#5928E5"
//           /></svg>Play
//           </a>

//       <a href="#" class="btn-secondary btn-secondary--list">
//         <img src="images/add button.svg" alt="" />Add to list</a
//       >
//     </div>
//   </div>
//   <div class="image">
//     <img src="${show.cover_image}" width="420px" alt="" />
//   </div>
// </div>
//     `;
//   infoPage.innerHTML = description;
// };

export const getCard = async () => {
  try {
    const response = await fetch("https://api.aniapi.com/v1/anime");
    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      const anime = data.data.documents.slice(0, 20);
      //   console.log(anime);
      anime.forEach(cardTemplate);
      const buttons = document.querySelectorAll(".name");

      buttons.forEach(btn => {
        btn.addEventListener("click", e => {
          // dataset return a string so we need to convert it to number using parseInt
          const id = parseInt(e.target.dataset.id);
          //   console.log(id);

          //   console.log(id, typeof id);
          //   console.log(anime[0].id, typeof anime[0].id);
          //   console.log(anime.find(x));
          //   const result = anime.find(show => show.id);
          // Use the find() to loop through all the anime to find which anime id matches with our dataset id and store it in a variable that when pass to a function
          const result = anime.find(show => show.id === id);
          // Storing the anime data in session storage but have to use JSON.stringify() the result we get and then we can use it on the other page and JSON.parse() it and use it in a new function to create a template with the info in sessionstorage.
          sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(result));
          // console.log(result);
          // animeInfoTemplate(result);
        });
      });
    }
  } catch (e) {
    console.error(e);
  }
};