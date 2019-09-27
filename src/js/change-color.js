const $elements = [].slice.call(document.querySelectorAll("[data-colour]"));

if($elements){
    $elements.forEach( $element => {
        const title = $element.childNodes[1];
        title.addEventListener("click", () => {
            const colorToApply = $element.getAttribute("data-colour");
            $element.getElementsByTagName("P")[0].style.color = colorToApply;
        });
    });
}
