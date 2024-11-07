
const BOBOT_TUGAS = 0.30;
const BOBOT_UTS = 0.30;
const BOBOT_UAS = 0.40;
const BATAS_KELULUSAN = 60; 


function hitungNilai() {
   
    let nilaiTugas = parseFloat(document.getElementById('tugas').value);
    let nilaiUts = parseFloat(document.getElementById('uts').value);
    let nilaiUas = parseFloat(document.getElementById('uas').value);
    
    
    if (isNaN(nilaiTugas) || isNaN(nilaiUts) || isNaN(nilaiUas)) {
        alert('Harap masukkan nilai yang valid!');
        return;
    }
    
    if (nilaiTugas < 0 || nilaiTugas > 100 || nilaiUts < 0 || nilaiUts > 100 || nilaiUas < 0 || nilaiUas > 100) {
        alert('Nilai harus berada antara 0 dan 100!');
        return;
    }

   
    let nilaiAkhir = (nilaiTugas * BOBOT_TUGAS) + (nilaiUts * BOBOT_UTS) + (nilaiUas * BOBOT_UAS);
    
  
    let grade = '';
    if (nilaiAkhir >= 90) {
        grade = 'A';
    } else if (nilaiAkhir >= 80) {
        grade = 'B';
    } else if (nilaiAkhir >= 70) {
        grade = 'C';
    } else if (nilaiAkhir >= 60) {
        grade = 'D';
    } else {
        grade = 'E';
    }

   
    let status = (nilaiAkhir >= BATAS_KELULUSAN) ? 'Lulus' : 'Gagal';
    let statusClass = (status === 'Lulus') ? 'lulus' : 'gagal';


    document.getElementById('rata-rata').textContent = `Nilai Akhir: ${nilaiAkhir.toFixed(2)} (${grade})`;
    document.getElementById('status').textContent = `Status: ${status}`;
    document.getElementById('status').className = statusClass;
}
