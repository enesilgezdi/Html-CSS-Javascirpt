let userName = prompt("Adınızı giriniz")
document.getElementById("myName").innerHTML = userName

function myFunction(){
    let date = new Date()
    let today = date.getDay()
    let gun 

    if(today==0){
        gun = "pazar"
    }else if(today==1){
        gun = "pazartesi"
    }else if(today==2){
        gun = "salı"
    }else if(today==3){
        gun = "carsamba"
    }else if(today==4){
        gun = "persembe"
    }else if(today==5){
        gun = "cuma"
    }else if(today==6){
        gun = "cumartesi"
    }
    
    let time = date.toLocaleString('tr-TR')
    return document.getElementById("myClock").innerHTML = `${time} ${gun}`

}

myFunction()
setInterval(myFunction, 1000);

// let kulaniciadi = prompt ("Kulanıcı Adi Giriniz :") // uyarının çıkmasını sağladık
// let myname = document.querySelector("#myName") // uyarıya girdiğimiz değerin nerde yazılacağını girdik
// myname.innerHTML=kulaniciadi // son olarak verilen değeri yazdırıyoruz

// function zaman ()
// {   // burda zaman atadık sadce bunu verseydik çok fazla detay olup ödevin istediği olmazdı anlık değerini vermemizin sebebi diğer atamaların burdan bilgi çekmesini sağlamak
//     let anlık = new Date();  
//     // saat ekledik
//     let saat = anlık.getHours(); 
//     // dakika ekledik
//     let dakika = anlık.getMinutes(); 
//     // saniye ekledik
//     let saniye = anlık.getSeconds(); 
//     // güne ekstra zaman atamamızın sebebi aşağıdaki verdiğimiz değerler ile sorunsuz çalışa bilsin diye aksi takdirde çalışmaz
//     var d = new Date(); 
//     // günleri ekledik
//     var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
//     // id tanımmladık
//     let iceaktarma = document.querySelector("#myClock") 
//     // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
//     iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
// }
// let simdi = setInterval(zaman,100); 



