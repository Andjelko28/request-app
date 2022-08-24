const forma = document.querySelector('#searchForm');
const deleteBtn = document.querySelector('#reset');
//first extract search term from the form
forma.addEventListener('submit',async function(e){
    e.preventDefault();
     const searchTerm = forma.elements.query.value
     //then default search parameter is search term 
     const config = {params: {q: searchTerm}}
     //this here wait until function createImg is done 
     const res = await axios.get(`https://api.tvmaze.com/search/shows?`,config);
    createImg(res.data)
    forma.elements.query.value = ''



  
})
//this is append to the page
const createImg = (shows) => {
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('IMG');
        img.src = result.show.image.medium
        document.body.append(img)
        }
    }
} 

//button iterate over all imgs append to the page and delete it(type need to be set on 'reset' because in form by default this button is for submit)
deleteBtn.addEventListener('click', function(){
    const images = document.querySelectorAll('img')
    for(let image of images){
        image.remove();
    }
    }
)
deleteBtn.addEventListener('click',image())




