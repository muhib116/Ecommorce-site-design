function include()
{ 
    let elements = document.querySelectorAll('include')
    
    if(elements){
        elements.forEach(component=>
        {
            fetch(`${component.dataset.bind}.html`)
            .then(res=>res.text())
            .then(data=>{
                component.innerHTML = data
            })
        });
    }
}
include();