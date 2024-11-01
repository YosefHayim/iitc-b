const firstImgDiv = document.querySelector('.first-image')

fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(data => {
      const imgUrl = data.url
      const newImgEl = document.createElement('img')
      newImgEl.src = imgUrl
      firstImgDiv.append(newImgEl)

    })
    .catch(error => console.error('Error:', error));

    fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(data => {
      const imgUrl = data.url
      const newImgEl = document.createElement('img')
      newImgEl.src = imgUrl
      firstImgDiv.append(newImgEl)

    })
    .catch(error => console.error('Error:', error));

    fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(data => {
      const imgUrl = data.url
      const newImgEl = document.createElement('img')
      newImgEl.src = imgUrl
      newImgEl.alt = 'This is a sexy japanese anima image'
      firstImgDiv.append(newImgEl)

    })
    .catch(error => console.error('Error:', error));


    fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(data => {
      const imgUrl = data.url
      const newImgEl = document.createElement('img')
      newImgEl.src = imgUrl
      firstImgDiv.append(newImgEl)

    })
    .catch(error => console.error('Error:', error));


    fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(data => {
      const imgUrl = data.url
      const newImgEl = document.createElement('img')
      newImgEl.src = imgUrl
      firstImgDiv.append(newImgEl)

    })
    .catch(error => console.error('Error:', error));


