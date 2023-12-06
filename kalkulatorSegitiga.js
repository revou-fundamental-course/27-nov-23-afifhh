
 function luas() {
   if(form1.angka1.value == "" && form1.angka2.value == ""){
      alert("data kosong"); //jika angka kosong maka pesan akan tampils
      }
    
    var a = document.getElementById('nilai1').value; //mengisi variabel a dengan isi dari input name angka1
    var t =  document.getElementById('nilai2').value;//mengisi variabel t dengan isi dari input name angka2
    var l =1/2 * a * t//hitung luas segitiga
    document.getElementById("hitungLuas1").innerHTML= "Luas = 1/2 * a * t"+"<br>";
    document.getElementById("hitungLuas2").innerHTML= "Luas = 1/2 * "+a+" * "+t+"<br>";
    document.getElementById("hitungLuas3").innerHTML= "Luas = "+l;
   }
 function keliling() {
   if(form2.angka1.value == "" && form2.angka2.value == "" && form2.angka3.value == ""){
      alert("tidak ada angka yang di imput")
   }

    var s1 = document.getElementById('sisi1').value;
    var s2 = document.getElementById('sisi2').value;
    var s3 = document.getElementById('sisi3').value;
    var k = s1 * s2 * s3
    document.getElementById("hitungKeliling1").innerHTML= "Keliling = s *s *s "+"<br>";
    document.getElementById("hitungKeliling2").innerHTML= "Keliling = " +s1+" * "+s2+ "*"+ s3+"<br>";
    document.getElementById("hitungKeliling3").innerHTML= "Keliling = "+k;
 }

 function reset() {
    document.getElementById('nilai1').value="";
    document.getElementById('nilai2').value="";
    document.getElementById('sisi1').value="";
    document.getElementById('sisi2').value="";
    document.getElementById('sisi3').value="";
}