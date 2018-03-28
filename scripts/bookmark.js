'use strict';

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



}());