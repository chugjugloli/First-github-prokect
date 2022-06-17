



function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overaly--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_w4yjy2s',
            'template_bqpmi4g',
            event.target,
            'r3iHZZJ-BJdrk0Yqh'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overaly--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at cadenallen97@gmail.com"
        );
    })
}