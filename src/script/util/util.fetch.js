<<<<<<< HEAD

/*封装好的fect*/
=======
>>>>>>> origin/wangbei
let fetchData = (url, callback) => {
  fetch(url)
    .then(response=>response.json())
    .then(res=>{
      callback(res)
    })
}

export default fetchData
