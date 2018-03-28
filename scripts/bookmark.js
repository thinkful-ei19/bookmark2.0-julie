'use strict';
/* global $, cuid*/

const bookmarkList = (function(){
  function generateBookmark(bookmark) {
    return `<li class="bookmark-item" data-bookmark-id="${bookmark.id}">
    <div class="item">
      <p class="item-title">${bookmark.title}</p>
      <p class="bookmark-descr hidden">${bookmark.desc}</p>
      <div class="item-info">
      <p>${bookmark.url}</p> 
      <p class="rating">${bookmark.rating}</p>
      </div>
  <button class="bookmark-toggle" id="details-toggle"> details </button>
  <button class="bookmark-delete" id="detail-delete"> delete </button>
  </li>`;
  
  }


  function generateBookmarkString(bookmarkArray) {
    const bookmarks = bookmarkArray.map((bookmark) => generateBookmark(bookmark));
    console.log(bookmarks);
    return bookmarks.join('');
  } 

  function handleNewBookmarkSubmit() {
    $('#js-bookmark-form').on('submit', function(event) {
      event.preventDefault();
      const newBookmark = {
        title: $('.js-bookmark-entry-title').val(),
        desc: $('.js-bookmark-entry-description').val(),
        rating: $('.js-bookmark-entry-rating').val(),
        url: $('.js-boomark-entry-url').val(),
        id: cuid(),
      };
      console.log(newBookmark);
    });
  }



  return {
    generateBookmark,
    generateBookmarkString,
    handleNewBookmarkSubmit
  };

}());