



document.addEventListener('DOMContentLoaded',()=>{
    
    const form = document.getElementById('myForm');
    
    console.log("hello");
    
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the default form submission behavior
    
    
        const formData = new FormData(form); // create a new FormData object from the form
    

        const entries = Array.from(formData.entries());

        // Convert the array to an object
        const data = Object.fromEntries(entries);

        // Convert the object to JSON
        const json = JSON.stringify(data);

        console.log(json)

        fetch('http://localhost:3000/api/auth/login', { // send the form data to the server using Fetch API
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: json
        })
        .then(res=>res.json())
        .then(data => {
            console.log("response");
          console.log(data.user_info);

          location.href='./student/student.html'
          // var Name=document.querySelector('.Name');
          // console.log(Name.innerHTML);

          localStorage.setItem('myData',JSON.stringify(data.user_info));

        })
        .catch(error => {
            console.log("error: ")
            console.log(error);
    
        });
      });



})    



