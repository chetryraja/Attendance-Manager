
document.addEventListener('DOMContentLoaded',()=>{

    console.log("File 2");

    var data= JSON.parse(localStorage.getItem('myData'));
    
    console.log(data);

    const file_form=document.getElementById('file_form');
    
    
    const image_input = document.querySelector(".image_input");
    var uploaded_image = "";
    
    image_input.addEventListener("change", function(){
        // console.log(image_input.value);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploaded_image = reader.result;
            document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    });
    
        file_form.addEventListener('submit',(event)=>{
            event.preventDefault(); // prevent the default form submission behavior
            
            const formData = new FormData(file_form); // create a new FormData object from the form

            const fileInput = document.querySelector('input[type="file"]');
  
            // console.log(fileInput);

            // formData.append('image',fileInput.files[0])

            console.log(formData);

            for (const entry of formData.entries()) {
                console.log(entry);
              }

            const entries = Array.from(formData.entries());

            // Convert the array to an object
            const file_data = Object.fromEntries(entries);
    
            // Convert the object to JSON
            const json = JSON.stringify(file_data);
    

            console.log(json)

        })

})