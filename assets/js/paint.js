function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)// iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')// add appropriate CSS class
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim')//remove appropriate CSS class
    }
    getProductInfo(event.target.id);

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            colorName = 'lime-green'
            price = '$14.99'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            colorName = 'medium-brown'
            price = '$11.14'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            colorName = 'royal-blue'    
            price = '$22.99'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            colorName = 'solid-red'
            price = '$13.42'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            colorName = 'solid-white'
            price = '$21.98'
            updatePrice(colorName, price)            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            colorName = 'solid-black'
            price = '$4.99'
            updatePrice(colorName, price)            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            colorName = 'solid-cyan'
            price = '$8.22'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            colorName = 'solid-purple'
            price = '$11.99'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            colorName = 'solid-yellow'
            price = '$14.99'
            updatePrice(colorName, price)             // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice =  document.getElementById('color-price');
        colorPrice.textContent = price;// select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name')// select element with corresponding id
        color.textContent = colorName;//display color name
    }
    
}
