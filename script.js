
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('HAPPY VALENTINES PEEPS!!').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 155); 
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };
