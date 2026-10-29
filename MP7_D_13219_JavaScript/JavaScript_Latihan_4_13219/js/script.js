function fn_ValForm() {
    var sMsg = "";

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;

    var verif_email = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;


    if (nama == "" || email == "" || umur == "" || kategori == "") {
        alert("\n* Data anda belum lengkap");
        return false;
    }else{
        alert("Terima kasih " + nama + " ! Anda terdaftar di acara" + sMsg +" [(info)]");
        return true;
    }

    //----- Email --------------
    if(email=="" ){
        sMsg+= "anda belum mengisikan email";
    }else if(!verif_email.test(email)){
         sMsg+= "Format email tidak valid";
    }


    //----- Umur --------------
    if(document.getElementById("umur") <= 25){
        alert("Peserta Mahasiswa");
    }else if(document.getElementById("umur") > 25){
        alert("Peserta Umum");
    }

    //----- Kategori -------------

    

    switch (kategori) {
        case "W":
            sMsg = "\n+Workshop";
            return sMsg;
            break;
        case "S":
            sMsg = "\n+Seminar";
            return sMsg;
            break;
        case "L":
            sMsg = "\n+Lomba Coding";
            return sMsg;
            break;
    }
}