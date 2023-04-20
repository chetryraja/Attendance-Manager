document.addEventListener('DOMContentLoaded',()=>{


    // const fileInput=document.getElementById('image')
    const form = document.getElementById('signup-form');

    form.addEventListener('submit',(event)=>{
        event.preventDefault(); // prevent the default form submission behavior
    
    
        const formData = new FormData(form); // create a new FormData object from the form
    
        // formData.append('image',fileInput.files[0])

        console.log(formData);



        

        // const entries = Array.from(formData.entries());

        // // Convert the array to an object
        // const data = Object.fromEntries(entries);

        // // Convert the object to JSON
        // const json = JSON.stringify(data);

        // console.log(json)

        // localStorage.setItem('myData',JSON.stringify(json));

        fetch('http://localhost:3000/api/imgupload', { // send the form data to the server using Fetch API
          method: 'POST',
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
          body: formData
        })
        .then(res=>res.json())
        .then(data => {
            console.log("response");
        //   console.log(data.user_info);

          localStorage.setItem('myData',JSON.stringify(data.user_info));
          location.href='./student/student.html'

        // location.href='./photo.html';
    })

    })

})
