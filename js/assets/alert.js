export function showAlert(message){
    document.querySelector(".alert p").innerText = message;
    document.querySelector(".alert").style = 'right: 1rem';

    setTimeout(()=>{
        document.querySelector(".alert").style = 'right: -20rem';
    }, 3000)

}