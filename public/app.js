const h1 = document.querySelector('.submit-btn')
const input = document.querySelector('.form-input')
const formAlert = document.querySelector('.form-alert')




// btn.addEventListener('click', async (e) => {
//   e.preventDefault()
//   const nameValue = input.value

//   try {
//     const { data } = await axios.post('/api/people', { name: nameValue })
//     const h5 = document.createElement('h5')
//     h5.textContent = data.person
//     result.appendChild(h5)
//   } catch (error) {
//     // console.log(error.response)
//     formAlert.textContent = error.response.data.msg
//   }
//   input.value = ''
// })
