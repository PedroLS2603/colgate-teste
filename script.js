function showQuestion(id) {
    let element = document.getElementById(id);

    

    switch(element.style['visibility']){
        case '':
            element.style['visibility'] = 'visible';
            break;
        case 'hidden': 
            element.style['visibility'] = 'visible';
            break;
        case 'visible':
            element.style['visibility'] = 'hidden';
            break;
    }
}

function showSection(id) {
    let element = document.getElementById(id);

    switch(element.style['display']){
        case '':
            element.style['display'] = 'flex';
            break;
        case 'none': 
            element.style['display'] = 'flex';
            break;
        case 'flex':
            element.style['display'] = 'none';
            break;
    }
}

function showMoreThanOneSection(origin){
    switch(origin) {            
        case 'regras-resgate-1':
            let element1 = document.getElementById('regras-resgate-2');
            element1.style['display'] = 'none';
                    
            element1 = document.getElementById('regras-resgate-3');
            element1.style['display'] = 'none';
            showSection('faq-section-4');
            showSection('faq-section-5');
            showSection('faq-section-6');
            break;
        case 'duvidas-gerais-1':
            let element = document.getElementById('duvidas-gerais-2');
            element.style['display'] = 'none';
                    
            element = document.getElementById('duvidas-gerais-3');
            element.style['display'] = 'none';
            showSection('faq-section-7');
            showSection('faq-section-8');
            showSection('faq-section-9');
            break;
        }                
}