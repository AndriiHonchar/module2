function slugify(title) {
  // Пиши код ниже этой строки
 let slug = '';
 slug = title.toLowerCase().split(' ').join('-');
 return slug;
  // Пиши код выше этой строки
}