const init = () => {
    if(document.querySelector('.question-7-heading')){
        const formatText = (text = 'ipsum') => {
            const $text = $( '.' + text);
            return text + ': ' + $text.data('hello');
        };
    
        const result = attr => {
            attr = attr || 'dolor';
            let test = '123456';
            let val = $( '[data-' + attr + ']' ).data(attr);
            return `<p>Result [ ${test} ]: ${test * val} </p>`;
        };
    
        const div = () => {
            const myDiv = $( '#mine' );
            myDiv.html( result());
            myDiv.css( "background-color" , "cyan" );
            return myDiv;
        };
        
        div().on( 'click' ,() => {
            $( this ).find( 'p' ).css( 'color' , 'red' );
        });
        
        formatText( 'welcome' );
    }
}
init();


