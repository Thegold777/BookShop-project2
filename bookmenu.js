function selected(){
   let category ='Architecture'
   let start = 0;
   let count = 0;
   if (localStorage.number) {
      count = parseInt(localStorage.number)
      document.querySelector('.header__bagItems_count').style.display='block'
      document.querySelector('.header__bagItems_count').innerHTML = count

   }
   const fetchData = async () => {
      const url =`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyA3fIMcK5K76dw3YByU2onMbdJFA0-bLHY&printType=books&startIndex=${start}&maxResults=6&langRestrict=en`
      let data = await fetch(url)
          .then((response) => {
             return response.json()

          })
          .then((data) =>{
             data.items.forEach((item) =>{
                const authors =  item.volumeInfo.authors ? item.volumeInfo.authors.join(',') : 'Unknown author'
                document.querySelector('.main__shelf').innerHTML +=     `<div class="main__shelf_book"><img class="main__shelf_book_img" src="${item.volumeInfo.imageLinks.thumbnail}" alt="">\n` +
                    `<div class="main__shelf_book_info"><span class="main__shelf_book_info_author">${authors}</span>\n` +
                    `<span class="main__shelf_book_info_name">${item.volumeInfo.title}</span>\n` +
                    `<div class="main__shelf_book_info_rating">${item.volumeInfo?.averageRating ?? ''}</div>\n` +
                    `<p class="main__shelf_book_info_text">${item.volumeInfo?.description ?? ' No description'}</p>\n` +
                    `<span class="main__shelf_book_info_price">${item.saleInfo.listPrice?.amount  ?? ''   } ${item.saleInfo.listPrice?.currencyCode  ?? ''   }</span>\n` +
                    `<button class="main__shelf_book_button">Buy now</button></div>\n` +
                    `</div>`

             })
          })
   }

   document.addEventListener('click',  function ()   {
      if (event.target.classList.contains('main__menu_list_item')){
         document.querySelector('.main__shelf').innerHTML= '';
         document.querySelector('.main__menu_list_item_selected').classList.remove('main__menu_list_item_selected');
         event.target.classList.add('main__menu_list_item_selected')
         category = event.target.innerText;
         fetchData()
      }
   })

   document.addEventListener('click', function () {
      if (event.target.classList.contains('main__shelf_book_button')) {
         event.target.classList.add('main__shelf_book_button_active')
         event.target.innerText = 'In the cart';
         document.querySelector('.header__bagItems_count').style.display='block'
         count = count + 1;
         document.querySelector('.header__bagItems_count').innerHTML = count
         localStorage.setItem('number',count)
      }

   })
  
   let loadButton = document.querySelector('.main__load');
   document.querySelector('.main__load').addEventListener('click',() =>{
      start = start + 6;
      fetchData();
      document.querySelector('.main__load').style.marginTop
   })
   fetchData()
}
export {selected}